import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import Header
    from "../../components/header/header";

import Footer
    from "../../components/footer/footer";

import {
    api
} from "../../services/api";

import type {
    Order
} from "../../types/Order";

import {
    Actions,
    PrimaryButton,
    SecondaryButton,
    Container,
    Content,
    ErrorContainer,
    HeaderSection,
    InfoCard,
    InfoGrid,
    InfoItem,
    ItemsContainer,
    OrderCode,
    OrderItem,
    OrderItemContent,
    OrderItemImage,
    OrderItemInfo,
    OrderItemName,
    OrderItemPrice,
    OrderItemVariation,
    Page,
    StatusBadge,
    SuccessIcon,
    SuccessMessage,
    SuccessTitle,
    Summary,
    SummaryLine,
    SummaryTotal
} from "./OrderSuccessStyles";


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
        .replace(
            /_/g,
            " "
        )
        .replace(
            /^./,
            (letra) =>
                letra.toUpperCase()
        );

}


function formatarNomeServico(
    service: string
): string {

    return service
        .replace(
            /_/g,
            " "
        )
        .toLowerCase()
        .replace(
            /\b\w/g,
            (letra) =>
                letra.toUpperCase()
        );

}


export default function OrderSuccess() {

    const navigate =
        useNavigate();

    const {
        codigo
    } = useParams<{
        codigo: string;
    }>();


    const [
        order,
        setOrder
    ] = useState<Order | null>(
        null
    );


    const [
        loading,
        setLoading
    ] = useState(true);


    const [
        error,
        setError
    ] = useState("");


    useEffect(() => {

        if (!codigo) {

            setError(
                "Código do pedido não informado."
            );

            setLoading(false);

            return;

        }

        void carregarPedido();

    }, [codigo]);


    async function carregarPedido() {

        try {

            setLoading(true);

            setError("");

            const response =
                await api.get<Order>(
                    `/orders/${codigo}`
                );

            setOrder(
                response.data
            );

        } catch (error) {

            console.error(
                "Erro ao carregar pedido:",
                error
            );

            setError(
                "Não foi possível carregar os dados do pedido."
            );

        } finally {

            setLoading(false);

        }

    }


    function voltarParaLoja() {

        navigate(
            "/produtos"
        );

    }


    if (loading) {

        return (

            <Page>

                <Header />

                <Container>

                    <ErrorContainer>

                        <h2>
                            Carregando pedido...
                        </h2>

                    </ErrorContainer>

                </Container>

                <Footer />

            </Page>

        );

    }


    if (
        error ||
        !order
    ) {

        return (

            <Page>

                <Header />

                <Container>

                    <ErrorContainer>

                        <h2>
                            Pedido não encontrado
                        </h2>

                        <p>
                            {
                                error ||
                                "Não foi possível localizar esse pedido."
                            }
                        </p>

                        <button
                            type="button"
                            onClick={
                                voltarParaLoja
                            }
                        >
                            Voltar para a loja
                        </button>

                    </ErrorContainer>

                </Container>

                <Footer />

            </Page>

        );

    }


    return (

        <Page>

            <Header />

            <Container>

                <HeaderSection>

                    <SuccessIcon>
                        ✓
                    </SuccessIcon>

                    <SuccessTitle>
                        Pedido realizado com sucesso!
                    </SuccessTitle>

                    <SuccessMessage>
                        Recebemos seu pedido e agora
                        estamos aguardando a confirmação
                        do pagamento.
                    </SuccessMessage>

                    <OrderCode>

                        Pedido{" "}

                        <strong>
                            {order.codigo}
                        </strong>

                    </OrderCode>

                </HeaderSection>


                <Content>

                    <div>

                        <InfoGrid>


                            {/* DADOS DO CLIENTE */}

                            <InfoCard>

                                <h3>
                                    Dados do cliente
                                </h3>

                                <InfoItem>

                                    <span>
                                        Nome
                                    </span>

                                    <strong>
                                        {
                                            order.cliente.nome
                                        }
                                    </strong>

                                </InfoItem>


                                <InfoItem>

                                    <span>
                                        E-mail
                                    </span>

                                    <strong>
                                        {
                                            order.cliente.email
                                        }
                                    </strong>

                                </InfoItem>


                                <InfoItem>

                                    <span>
                                        Telefone
                                    </span>

                                    <strong>
                                        {
                                            order.cliente.telefone
                                        }
                                    </strong>

                                </InfoItem>

                            </InfoCard>


                            {/* ENTREGA */}

                            <InfoCard>

                                <h3>
                                    Entrega
                                </h3>


                                <InfoItem>

                                    <span>
                                        Endereço
                                    </span>

                                    <strong>

                                        {
                                            order.entrega.rua
                                        },{" "}

                                        {
                                            order.entrega.numero
                                        }

                                    </strong>

                                </InfoItem>


                                {order.entrega.complemento && (

                                    <InfoItem>

                                        <span>
                                            Complemento
                                        </span>

                                        <strong>
                                            {
                                                order.entrega.complemento
                                            }
                                        </strong>

                                    </InfoItem>

                                )}


                                <InfoItem>

                                    <span>
                                        Bairro
                                    </span>

                                    <strong>
                                        {
                                            order.entrega.bairro
                                        }
                                    </strong>

                                </InfoItem>


                                <InfoItem>

                                    <span>
                                        Cidade
                                    </span>

                                    <strong>

                                        {
                                            order.entrega.cidade
                                        } -{" "}

                                        {
                                            order.entrega.estado
                                        }

                                    </strong>

                                </InfoItem>


                                <InfoItem>

                                    <span>
                                        CEP
                                    </span>

                                    <strong>
                                        {
                                            order.entrega.cep
                                        }
                                    </strong>

                                </InfoItem>


                                {/* MODALIDADE DE ENVIO */}

                                {order.envio?.service && (

                                    <InfoItem>

                                        <span>
                                            Forma de entrega
                                        </span>

                                        <strong>
                                            {
                                                formatarNomeServico(
                                                    order.envio.service
                                                )
                                            }
                                        </strong>

                                    </InfoItem>

                                )}


                                {order.envio?.deliveryTimeDays !==
                                    null &&
                                    order.envio?.deliveryTimeDays !==
                                    undefined && (

                                    <InfoItem>

                                        <span>
                                            Prazo estimado
                                        </span>

                                        <strong>
                                            Até{" "}
                                            {
                                                order.envio
                                                    .deliveryTimeDays
                                            }{" "}
                                            dias úteis
                                        </strong>

                                    </InfoItem>

                                )}


                                {order.frete !== undefined && (

                                    <InfoItem>

                                        <span>
                                            Valor do frete
                                        </span>

                                        <strong>

                                            {
                                                order.frete === 0
                                                    ? "Grátis"
                                                    : formatarDinheiro(
                                                        order.frete
                                                    )
                                            }

                                        </strong>

                                    </InfoItem>

                                )}

                            </InfoCard>


                            {/* PAGAMENTO */}

                            <InfoCard>

                                <h3>
                                    Pagamento
                                </h3>


                                <InfoItem>

                                    <span>
                                        Método
                                    </span>

                                    <strong>

                                        {
                                            order.pagamento.metodo ===
                                            "PIX"
                                                ? "PIX"
                                                : "Cartão de crédito"
                                        }

                                    </strong>

                                </InfoItem>


                                <InfoItem>

                                    <span>
                                        Status
                                    </span>

                                    <StatusBadge
                                        $status={
                                            order.pagamento.status
                                        }
                                    >
                                        {
                                            order.pagamento.status
                                        }
                                    </StatusBadge>

                                </InfoItem>

                            </InfoCard>

                        </InfoGrid>


                        {/* ITENS */}

                        <ItemsContainer>

                            <h2>
                                Itens do pedido
                            </h2>


                            {order.itens.map(
                                (item) => {

                                    const atributos =
                                        Object.entries(
                                            item.atributos ??
                                            {}
                                        );

                                    const imagem =
                                        item.imagemUrl
                                            ? `http://localhost:4000${item.imagemUrl}`
                                            : "";


                                    return (

                                        <OrderItem
                                            key={
                                                item.id
                                            }
                                        >

                                            <OrderItemImage>

                                                {imagem ? (

                                                    <img
                                                        src={
                                                            imagem
                                                        }
                                                        alt={
                                                            item.nomeProduto
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
                                                        {
                                                            item.nomeProduto
                                                        }
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

                                                                        {
                                                                            formatarNomeAtributo(
                                                                                atributo
                                                                            )
                                                                        }

                                                                        :{" "}

                                                                        {
                                                                            valor
                                                                        }

                                                                        {
                                                                            index <
                                                                            atributos.length -
                                                                            1 &&
                                                                            " • "
                                                                        }

                                                                    </span>

                                                                )
                                                            )}

                                                        </OrderItemVariation>

                                                    )}


                                                    <span>
                                                        Quantidade:{" "}
                                                        {
                                                            item.quantidade
                                                        }
                                                    </span>

                                                </OrderItemInfo>


                                                <OrderItemPrice>

                                                    {
                                                        formatarDinheiro(
                                                            item.precoTotal
                                                        )
                                                    }

                                                </OrderItemPrice>

                                            </OrderItemContent>

                                        </OrderItem>

                                    );

                                }
                            )}

                        </ItemsContainer>

                    </div>


                    {/* RESUMO */}

                    <Summary>

                        <h2>
                            Resumo
                        </h2>


                        <SummaryLine>

                            <span>
                                Subtotal
                            </span>

                            <strong>

                                {
                                    formatarDinheiro(
                                        order.subtotal
                                    )
                                }

                            </strong>

                        </SummaryLine>


                        <SummaryLine>

                            <span>
                                Frete
                            </span>

                            <strong>

                                {
                                    order.frete === 0
                                        ? "Grátis"
                                        : formatarDinheiro(
                                            order.frete
                                        )
                                }

                            </strong>

                        </SummaryLine>


                        <SummaryTotal>

                            <span>
                                Total
                            </span>

                            <strong>

                                {
                                    formatarDinheiro(
                                        order.total
                                    )
                                }

                            </strong>

                        </SummaryTotal>


                        <Actions>

                            {order.pagamento.metodo ===
                                "PIX" &&
                                order.pagamento.status ===
                                "PENDENTE" && (

                                    <PrimaryButton
                                        type="button"
                                    >
                                        Gerar pagamento PIX
                                    </PrimaryButton>

                                )}


                            <SecondaryButton
                                type="button"
                                onClick={
                                    voltarParaLoja
                                }
                            >
                                Continuar comprando
                            </SecondaryButton>

                        </Actions>

                    </Summary>

                </Content>

            </Container>

            <Footer />

        </Page>

    );

}