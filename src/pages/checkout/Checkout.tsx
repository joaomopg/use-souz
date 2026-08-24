import {
    useEffect,
    useRef,
    useState,
    type ChangeEvent
} from "react";

import {
    useNavigate
} from "react-router-dom";

import Header
    from "../../components/header/header";

import Footer
    from "../../components/footer/footer";

import {
    useCart
} from "../../contexts/shoppingCartContext";

import {
    calcularPrecoCarrinho
} from "../../utils/calcularPrecoCarrinho";

import IdentificationStep
    from "./components/IdentificationStep/IdentificationStep";

import DeliveryStep
    from "./components/DeliveryStep/DeliveryStep";

import PaymentStep
    from "./components/PaymentStep/PaymentStep";

import ConfirmationStep
    from "./components/ConfirmationStep/ConfirmationStep";

import CheckoutStepper
    from "../../components/checkoutStepper/checkoutStepper";

import {
    createOrder
} from "../../services/order.service";

import type {
    Order
} from "../../types/Order";

import {
    quoteShipping,
    type ShippingOption
} from "../../services/shipping.service";

import {
    Actions,
    AddressGrid,
    BackButton,
    CheckoutContent,
    CheckoutHeader,
    CheckoutSubtitle,
    CheckoutTitle,
    Container,
    EmptyCart,
    EmptyCartButton,
    EmptyCartText,
    EmptyCartTitle,
    Field,
    FieldFull,
    FormColumn,
    FormSection,
    FormSectionTitle,
    Input,
    Label,
    OrderItem,
    OrderItemContent,
    OrderItemImage,
    OrderItemInfo,
    OrderItemName,
    OrderItemPrice,
    OrderItemQuantity,
    OrderItemVariation,
    OrderItems,
    Page,
    PaymentOption,
    PaymentOptions,
    RadioInput,
    SummaryColumn,
    SummaryDivider,
    SummaryLine,
    SummaryTotal,
    SummaryTitle,
    TextArea,

} from "./CheckoutStyles";

type PaymentMethod =
    | "pix"
    | "card";

interface IdentificationData {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
}

interface IdentificationErrors {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
}

function formatarDinheiro(
    valor: number
): string {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(valor);

}

function formatarNomeAtributo(
    atributo: string
): string {

    return atributo
        .replace(/_/g, " ")
        .replace(
            /^./,
            (letra) =>
                letra.toUpperCase()
        );

}

export default function Checkout() {

    const navigate =
        useNavigate();

    const [
        step,
        setStep
    ] = useState(1);

    const idempotencyKeyRef =
        useRef(
            crypto.randomUUID()
        );

    const {
        items,
        total,
        totalItems
    } = useCart();

    const [
        identificationData,
        setIdentificationData
    ] = useState<IdentificationData>({
        nome: "",
        email: "",
        telefone: "",
        cpf: ""
    });

    const [
        identificationErrors,
        setIdentificationErrors
    ] = useState<IdentificationErrors>({
        nome: "",
        email: "",
        telefone: "",
        cpf: ""
    });

    const [
        paymentMethod,
        setPaymentMethod
    ] = useState<PaymentMethod>(
        "pix"
    );
    const [
        deliveryData,
        setDeliveryData
    ] = useState({
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        observacoes: ""
    });

    const [
        deliveryErrors,
        setDeliveryErrors
    ] = useState({
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
    });

    const [
        cardData,
        setCardData
    ] = useState({
        numero: "",
        nome: "",
        validade: "",
        cvv: ""
    });

    const [
        createdOrder,
        setCreatedOrder
    ] = useState<Order | null>(null);

    const [
        isSubmitting,
        setIsSubmitting
    ] = useState(false);

    const [
        shippingOptions,
        setShippingOptions
    ] = useState<ShippingOption[]>(
        []
    );

    const [
        selectedShipping,
        setSelectedShipping
    ] = useState<ShippingOption | null>(
        null
    );

    const frete =
        selectedShipping?.price ?? 0;

    const totalPedido =
        total + frete;

    const [
        isLoadingShipping,
        setIsLoadingShipping
    ] = useState(false);

    const [
        shippingError,
        setShippingError
    ] = useState("");

    const cartShippingKey =
        items
            .map(
                (item) =>
                    `${item.produtoVariacaoId}-${item.quantidade}`
            )
            .join("|");

    useEffect(() => {

        setShippingOptions(
            []
        );

        setSelectedShipping(
            null
        );

        setShippingError(
            ""
        );

    }, [cartShippingKey]);

    async function calcularFrete() {

        const cepNumeros =
            deliveryData.cep.replace(
                /\D/g,
                ""
            );

        if (
            cepNumeros.length !== 8
        ) {

            setShippingError(
                "Informe um CEP válido para calcular o frete."
            );

            return;

        }

        try {

            setIsLoadingShipping(true);

            setShippingError("");

            setSelectedShipping(
                null
            );

            const result =
                await quoteShipping(
                    cepNumeros,

                    items.map(
                        (item) => ({
                            productVariationId:
                                item.produtoVariacaoId,

                            quantity:
                                item.quantidade
                        })
                    )
                );

            setShippingOptions(
                result.options
            );

        } catch (error) {

            console.error(
                "Erro ao calcular frete:",
                error
            );

            setShippingOptions(
                []
            );

            setShippingError(
                "Não foi possível calcular o frete."
            );

        } finally {

            setIsLoadingShipping(false);

        }

    }

    function voltarParaLoja() {

        navigate(
            "/produtos"
        );

    }

    function voltarPagina() {

        navigate(-1);

    }

    function handleIdentificationChange(
        event: ChangeEvent<HTMLInputElement>
    ) {

        const {
            name,
            value
        } = event.target;

        setIdentificationData(
            (current) => ({
                ...current,
                [name]: value
            })
        );

        /*
            Se o usuário corrigir um campo
            que estava com erro, removemos
            a mensagem desse campo.
        */
        setIdentificationErrors(
            (current) => ({
                ...current,
                [name]: ""
            })
        );

    }

    function validateIdentification() {

        const errors: IdentificationErrors = {
            nome: "",
            email: "",
            telefone: "",
            cpf: ""
        };

        if (
            identificationData.nome
                .trim()
                .length < 3
        ) {

            errors.nome =
                "Informe seu nome completo.";

        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailRegex.test(
                identificationData.email
                    .trim()
            )
        ) {

            errors.email =
                "Informe um e-mail válido.";

        }

        const telefoneNumeros =
            identificationData.telefone
                .replace(
                    /\D/g,
                    ""
                );

        if (
            telefoneNumeros.length < 10
        ) {

            errors.telefone =
                "Informe um telefone válido.";

        }

        const cpfNumeros =
            identificationData.cpf
                .replace(
                    /\D/g,
                    ""
                );

        if (
            cpfNumeros.length !== 11
        ) {

            errors.cpf =
                "Informe um CPF válido.";

        }

        setIdentificationErrors(
            errors
        );

        return !Object.values(
            errors
        ).some(Boolean);

    }

    function handleIdentificationContinue() {

        const isValid =
            validateIdentification();

        if (!isValid) {
            return;
        }

        setStep(2);

    }

    function handleDeliveryChange(
        event:
            ChangeEvent<
                HTMLInputElement |
                HTMLTextAreaElement
            >
    ) {

        const {
            name
        } = event.target;

        let {
            value
        } = event.target;

        if (name === "cep") {

            value = value
                .replace(/\D/g, "")
                .slice(0, 8)
                .replace(
                    /^(\d{5})(\d)/,
                    "$1-$2"
                );

            /*
             * Se o CEP mudar, qualquer cotação
             * anterior deixa de ser válida.
             */
            setShippingOptions(
                []
            );

            setSelectedShipping(
                null
            );

            setShippingError(
                ""
            );

        }

        if (name === "estado") {

            value =
                value
                    .replace(
                        /[^a-zA-Z]/g,
                        ""
                    )
                    .toUpperCase()
                    .slice(0, 2);

        }

        setDeliveryData(
            (current) => ({
                ...current,
                [name]: value
            })
        );

        setDeliveryErrors(
            (current) => ({
                ...current,
                [name]: ""
            })
        );

    }

    function validateDelivery() {
        const errors = {
            cep: "",
            rua: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: ""
        };

        const cepNumeros =
            deliveryData.cep.replace(
                /\D/g,
                ""
            );

        if (cepNumeros.length !== 8) {
            errors.cep =
                "Informe um CEP válido.";
        }

        if (
            deliveryData.rua
                .trim()
                .length < 3
        ) {
            errors.rua =
                "Informe a rua.";
        }

        if (
            !deliveryData.numero
                .trim()
        ) {
            errors.numero =
                "Informe o número.";
        }

        if (
            deliveryData.bairro
                .trim()
                .length < 2
        ) {
            errors.bairro =
                "Informe o bairro.";
        }

        if (
            deliveryData.cidade
                .trim()
                .length < 2
        ) {
            errors.cidade =
                "Informe a cidade.";
        }

        if (
            deliveryData.estado
                .trim()
                .length !== 2
        ) {
            errors.estado =
                "Informe a UF.";
        }

        setDeliveryErrors(
            errors
        );

        return !Object.values(
            errors
        ).some(Boolean);
    }

    async function buscarCep() {
        const cepNumeros =
            deliveryData.cep.replace(
                /\D/g,
                ""
            );

        if (cepNumeros.length !== 8) {
            return;
        }

        try {
            const response =
                await fetch(
                    `https://viacep.com.br/ws/${cepNumeros}/json/`
                );

            const data =
                await response.json();

            if (data.erro) {
                setDeliveryErrors(
                    (current) => ({
                        ...current,
                        cep: "CEP não encontrado."
                    })
                );

                return;
            }

            setDeliveryData(
                (current) => ({
                    ...current,

                    rua:
                        data.logradouro ?? "",

                    bairro:
                        data.bairro ?? "",

                    cidade:
                        data.localidade ?? "",

                    estado:
                        data.uf ?? ""
                })
            );

            setDeliveryErrors(
                (current) => ({
                    ...current,
                    cep: ""
                })
            );
        } catch (error) {
            console.error(
                "Erro ao consultar CEP:",
                error
            );

            setDeliveryErrors(
                (current) => ({
                    ...current,
                    cep:
                        "Não foi possível consultar o CEP."
                })
            );
        }
    }

    function handleDeliveryContinue() {

        const isValid =
            validateDelivery();

        if (!isValid) {
            return;
        }

        if (!selectedShipping) {

            setShippingError(
                "Selecione uma opção de entrega."
            );

            return;
        }

        setStep(3);

    }

    function previousStep() {

        setStep(
            (current) =>
                Math.max(
                    current - 1,
                    1
                )
        );

    }

    function handleCardChange(
        event:
            ChangeEvent<HTMLInputElement>
    ) {

        const {
            name,
            value
        } = event.target;

        setCardData(
            (current) => ({
                ...current,
                [name]: value
            })
        );

    }


    async function finalizarPedido() {

        if (isSubmitting) {
            return;
        }

        if (!selectedShipping) {

            console.error(
                "Nenhuma opção de frete selecionada."
            );

            return;
        }

        try {

            setIsSubmitting(
                true
            );

            const payload = {

                idempotencyKey:
                    idempotencyKeyRef.current,

                cliente: {

                    nome:
                        identificationData.nome,

                    email:
                        identificationData.email,

                    telefone:
                        identificationData.telefone,

                    cpf:
                        identificationData.cpf

                },

                entrega: {

                    cep:
                        deliveryData.cep,

                    rua:
                        deliveryData.rua,

                    numero:
                        deliveryData.numero,

                    complemento:
                        deliveryData.complemento,

                    bairro:
                        deliveryData.bairro,

                    cidade:
                        deliveryData.cidade,

                    estado:
                        deliveryData.estado,

                    observacoes:
                        deliveryData.observacoes

                },

                frete: {

                    optionId:
                        selectedShipping.id

                },

                pagamento: {

                    metodo:
                        paymentMethod === "pix"
                            ? "PIX"
                            : "CARTAO"

                } as const,

                itens:
                    items.map(
                        (item) => ({

                            produtoVariacaoId:
                                item.produtoVariacaoId,

                            quantidade:
                                item.quantidade

                        })
                    )

            };

            const order =
                await createOrder(
                    payload
                );

            setCreatedOrder(
                order
            );

            console.log(
                "Pedido criado:",
                order
            );

            navigate(
                `/pedido/${order.codigo}/sucesso`
            );

        } catch (error) {

            console.error(
                "Erro ao criar pedido:",
                error
            );

        } finally {

            setIsSubmitting(
                false
            );

        }

    }

    if (
        items.length === 0
    ) {

        return (

            <Page>

                <Header />

                <Container>

                    <EmptyCart>

                        <EmptyCartTitle>
                            Seu carrinho está vazio
                        </EmptyCartTitle>

                        <EmptyCartText>
                            Adicione produtos ao
                            carrinho antes de iniciar
                            o checkout.
                        </EmptyCartText>

                        <EmptyCartButton
                            type="button"
                            onClick={
                                voltarParaLoja
                            }
                        >
                            Ver produtos
                        </EmptyCartButton>

                    </EmptyCart>

                </Container>

                <Footer />

            </Page>

        );

    }

    return (

        <Page>

            <Header />

            <CheckoutStepper
                currentStep={
                    step
                }
            />

            <Container>

                <CheckoutHeader>

                    <BackButton
                        type="button"
                        onClick={
                            step === 1
                                ? voltarPagina
                                : previousStep
                        }
                    >
                        ← Voltar
                    </BackButton>

                    <CheckoutTitle>
                        Finalizar compra
                    </CheckoutTitle>

                    <CheckoutSubtitle>
                        Preencha seus dados para
                        concluir o pedido.
                    </CheckoutSubtitle>

                </CheckoutHeader>

                <CheckoutContent>

                    <FormColumn>

                        {/* IDENTIFICAÇÃO */}

                        {step === 1 && (

                            <>

                                <IdentificationStep
                                    data={
                                        identificationData
                                    }
                                    errors={
                                        identificationErrors
                                    }
                                    onChange={
                                        handleIdentificationChange
                                    }
                                />

                                <Actions>

                                    <button
                                        type="button"
                                        onClick={
                                            handleIdentificationContinue
                                        }
                                    >
                                        Continuar
                                    </button>

                                </Actions>

                            </>

                        )}

                        {/* ENTREGA */}

                        {step === 2 && (
                            <>
                                <DeliveryStep
                                    data={
                                        deliveryData
                                    }

                                    errors={
                                        deliveryErrors
                                    }

                                    onChange={
                                        handleDeliveryChange
                                    }

                                    onCepBlur={
                                        buscarCep
                                    }

                                    shippingOptions={
                                        shippingOptions
                                    }

                                    selectedShipping={
                                        selectedShipping
                                    }

                                    isLoadingShipping={
                                        isLoadingShipping
                                    }

                                    shippingError={
                                        shippingError
                                    }

                                    onCalculateShipping={
                                        calcularFrete
                                    }

                                    onSelectShipping={
                                        setSelectedShipping
                                    }
                                />

                                <Actions>
                                    <button
                                        type="button"
                                        onClick={
                                            handleDeliveryContinue
                                        }
                                    >
                                        Continuar para pagamento
                                    </button>
                                </Actions>
                            </>
                        )}

                        {/* PAGAMENTO */}

                        {step === 3 && (

                            <>

                                <PaymentStep
                                    paymentMethod={
                                        paymentMethod
                                    }

                                    setPaymentMethod={
                                        setPaymentMethod
                                    }

                                    cardData={
                                        cardData
                                    }

                                    onCardChange={
                                        handleCardChange
                                    }
                                />

                                <Actions>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setStep(4)
                                        }
                                    >
                                        Revisar pedido
                                    </button>

                                </Actions>

                            </>

                        )}

                        {/* CONFIRMAÇÃO */}

                        {step === 4 && selectedShipping && (
                            <>
                                <ConfirmationStep
                                    identificationData={identificationData}
                                    deliveryData={deliveryData}
                                    paymentMethod={paymentMethod}
                                    selectedShipping={selectedShipping}
                                    onEditIdentification={() =>
                                        setStep(1)
                                    }
                                    onEditDelivery={() =>
                                        setStep(2)
                                    }
                                    onEditShipping={() =>
                                        setStep(2)
                                    }
                                    onEditPayment={() =>
                                        setStep(3)
                                    }
                                />

                                <Actions>
                                    <button
                                        type="button"
                                        onClick={finalizarPedido}
                                        disabled={isSubmitting}
                                    >
                                        {
                                            isSubmitting
                                                ? "Finalizando..."
                                                : "Finalizar pedido"
                                        }
                                    </button>
                                </Actions>
                            </>
                        )}
                        
                    </FormColumn>

                    {/* RESUMO DO PEDIDO */}

                    <SummaryColumn>

                        <SummaryTitle>
                            Resumo do pedido
                        </SummaryTitle>

                        <OrderItems>

                            {items.map(
                                (item) => {

                                    const precoTotalItem =
                                        calcularPrecoCarrinho(
                                            item.precos,
                                            item.quantidade
                                        );

                                    const atributos =
                                        Object.entries(
                                            item.atributos ??
                                            {}
                                        );

                                    return (

                                        <OrderItem
                                            key={
                                                item.id
                                            }
                                        >

                                            <OrderItemImage>

                                                {item.imagem ? (

                                                    <img
                                                        src={
                                                            item.imagem
                                                        }
                                                        alt={
                                                            item.nome
                                                        }
                                                    />

                                                ) : (

                                                    <span>
                                                        Sem imagem
                                                    </span>

                                                )}

                                            </OrderItemImage>

                                            <OrderItemContent>

                                                <OrderItemInfo>

                                                    <OrderItemName>
                                                        {item.nome}
                                                    </OrderItemName>

                                                    {atributos.length >
                                                        0 && (

                                                            <OrderItemVariation>

                                                                {atributos.map(
                                                                    (
                                                                        [
                                                                            atributo,
                                                                            valor
                                                                        ],
                                                                        index
                                                                    ) => (

                                                                        <span
                                                                            key={
                                                                                atributo
                                                                            }
                                                                        >

                                                                            {formatarNomeAtributo(
                                                                                atributo
                                                                            )}
                                                                            : {valor}

                                                                            {index <
                                                                                atributos.length -
                                                                                1 &&
                                                                                " • "}

                                                                        </span>

                                                                    )
                                                                )}

                                                            </OrderItemVariation>

                                                        )}

                                                    <OrderItemQuantity>
                                                        Quantidade:{" "}
                                                        {
                                                            item.quantidade
                                                        }
                                                    </OrderItemQuantity>

                                                </OrderItemInfo>

                                                <OrderItemPrice>

                                                    {formatarDinheiro(
                                                        precoTotalItem
                                                    )}

                                                </OrderItemPrice>

                                            </OrderItemContent>

                                        </OrderItem>

                                    );

                                }
                            )}

                        </OrderItems>

                        <SummaryDivider />

                        <SummaryLine>

                            <span>
                                Produtos ({totalItems})
                            </span>

                            <strong>
                                {formatarDinheiro(
                                    total
                                )}
                            </strong>

                        </SummaryLine>

                        <SummaryLine>

                            <span>
                                Frete
                            </span>

                            <strong>
                                {
                                    selectedShipping
                                        ? (
                                            selectedShipping.price === 0
                                                ? "Grátis"
                                                : formatarDinheiro(
                                                    selectedShipping.price
                                                )
                                        )
                                        : "A calcular"
                                }
                            </strong>

                        </SummaryLine>

                        <SummaryDivider />

                        <SummaryTotal>

                            <span>
                                Total
                            </span>

                            <strong>
                                {
                                    formatarDinheiro(
                                        totalPedido
                                    )
                                }
                            </strong>

                        </SummaryTotal>

                    </SummaryColumn>

                </CheckoutContent>

            </Container>

            <Footer />

        </Page>

    );

}