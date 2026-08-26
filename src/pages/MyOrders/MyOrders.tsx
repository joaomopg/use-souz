import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
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
    Page,
    Container,
    HeaderSection,
    Title,
    Subtitle,
    OrdersGrid,
    OrderCard,
    OrderCardHeader,
    OrderCode,
    StatusBadge,
    OrderInfo,
    InfoRow,
    OrderTotal,
    ViewOrderButton,
    EmptyState,
    EmptyTitle,
    EmptyText,
    LoadingContainer,
    ErrorContainer
} from "./MyOrdersStyles";


function formatarDinheiro(
    valor: number
): string {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(
        valor
    );

}


function formatarMetodoPagamento(
    metodo: string
): string {

    if (
        metodo === "PIX"
    ) {
        return "PIX";
    }

    if (
        metodo === "CARTAO"
    ) {
        return "Cartão";
    }

    return metodo;

}


function formatarServicoEntrega(
    service:
        string |
        null
): string {

    if (!service) {
        return "Não informado";
    }

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


export default function MyOrders() {

    const navigate =
        useNavigate();


    const [
        orders,
        setOrders
    ] = useState<Order[]>(
        []
    );


    const [
        loading,
        setLoading
    ] = useState(
        true
    );


    const [
        error,
        setError
    ] = useState(
        ""
    );


    useEffect(() => {

        void carregarPedidos();

    }, []);


    async function carregarPedidos() {

        try {

            setLoading(
                true
            );

            setError(
                ""
            );


            const response =
                await api.get<Order[]>(
                    "/orders/me"
                );


            setOrders(
                response.data
            );

        } catch (error) {

            console.error(
                "Erro ao carregar pedidos:",
                error
            );

            setError(
                "Não foi possível carregar seus pedidos."
            );

        } finally {

            setLoading(
                false
            );

        }

    }


    function abrirPedido(
        codigo: string
    ) {

        navigate(
            `/pedido/${codigo}/sucesso`
        );

    }


    function continuarComprando() {

        navigate(
            "/produtos"
        );

    }


    return (

        <Page>

            <Header />


            <Container>

                <HeaderSection>

                    <Title>
                        Meus pedidos
                    </Title>

                    <Subtitle>
                        Acompanhe seus pedidos
                        e consulte os detalhes
                        das suas compras.
                    </Subtitle>

                </HeaderSection>


                {loading && (

                    <LoadingContainer>
                        Carregando pedidos...
                    </LoadingContainer>

                )}


                {!loading &&
                    error && (

                    <ErrorContainer>

                        <strong>
                            Não foi possível
                            carregar seus pedidos.
                        </strong>

                        <span>
                            {error}
                        </span>

                    </ErrorContainer>

                )}


                {!loading &&
                    !error &&
                    orders.length ===
                    0 && (

                    <EmptyState>

                        <EmptyTitle>
                            Você ainda não
                            possui pedidos.
                        </EmptyTitle>

                        <EmptyText>
                            Quando você realizar
                            uma compra, ela aparecerá
                            aqui para acompanhamento.
                        </EmptyText>

                        <ViewOrderButton
                            type="button"
                            onClick={
                                continuarComprando
                            }
                        >
                            Explorar produtos
                        </ViewOrderButton>

                    </EmptyState>

                )}


                {!loading &&
                    !error &&
                    orders.length >
                    0 && (

                    <OrdersGrid>

                        {orders.map(
                            (order) => (

                                <OrderCard
                                    key={
                                        order.id
                                    }
                                >

                                    <OrderCardHeader>

                                        <div>

                                            <span>
                                                Pedido
                                            </span>

                                            <OrderCode>
                                                {
                                                    order.codigo
                                                }
                                            </OrderCode>

                                        </div>


                                        <StatusBadge
                                            $status={
                                                order.statusPedido
                                            }
                                        >
                                            {
                                                order.statusPedido
                                            }
                                        </StatusBadge>

                                    </OrderCardHeader>


                                    <OrderInfo>

                                        <InfoRow>

                                            <span>
                                                Produtos
                                            </span>

                                            <strong>
                                                {
                                                    order.itens
                                                        .reduce(
                                                            (
                                                                total,
                                                                item
                                                            ) =>
                                                                total +
                                                                item.quantidade,
                                                            0
                                                        )
                                                }
                                            </strong>

                                        </InfoRow>


                                        <InfoRow>

                                            <span>
                                                Pagamento
                                            </span>

                                            <strong>
                                                {
                                                    formatarMetodoPagamento(
                                                        order.pagamento.metodo
                                                    )
                                                }
                                            </strong>

                                        </InfoRow>


                                        <InfoRow>

                                            <span>
                                                Entrega
                                            </span>

                                            <strong>
                                                {
                                                    formatarServicoEntrega(
                                                        order.envio?.service ??
                                                        null
                                                    )
                                                }
                                            </strong>

                                        </InfoRow>


                                        <InfoRow>

                                            <span>
                                                Status do pagamento
                                            </span>

                                            <strong>
                                                {
                                                    order.pagamento.status
                                                }
                                            </strong>

                                        </InfoRow>

                                    </OrderInfo>


                                    <OrderTotal>

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

                                    </OrderTotal>


                                    <ViewOrderButton
                                        type="button"
                                        onClick={() =>
                                            abrirPedido(
                                                order.codigo
                                            )
                                        }
                                    >
                                        Ver detalhes
                                    </ViewOrderButton>

                                </OrderCard>

                            )
                        )}

                    </OrdersGrid>

                )}

            </Container>


            <Footer />

        </Page>

    );

}