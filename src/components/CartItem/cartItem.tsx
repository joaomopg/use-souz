import {
    useCart
} from "../../contexts/shoppingCartContext";

import type {
    CartItem as CartItemType
} from "../../types/CartItems";

import TrashIcon from "../Icons/TrashIcon";

import {
    Container,
    ImageContainer,
    Content,
    ProductActions,
    ProductName,
    ProductInfo,
    ProductSize,
    ProductPrice,
    QuantityContainer,
    QuantityButton,
    Quantity,
    RemoveButton
} from "./cartItemStyles";

import {
    calcularPrecoCarrinho
} from "../../utils/calcularPrecoCarrinho";

interface CartItemProps {
    item: CartItemType;
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

export function CartItem({
    item
}: CartItemProps) {
    const {
        updateQuantity,
        removeItem
    } = useCart();

    function aumentarQuantidade() {
        updateQuantity(
            item.id,
            item.quantidade + 1
        );
    }

    function diminuirQuantidade() {
        if (item.quantidade === 1) {
            return;
        }

        updateQuantity(
            item.id,
            item.quantidade - 1
        );
    }

    function removerProduto() {
        removeItem(item.id);
    }

    const atributos =
        Object.entries(
            item.atributos ?? {}
        );

    const precoTotal =
        calcularPrecoCarrinho(
            item.precos,
            item.quantidade
        );

    return (
        <Container>
            <ImageContainer>
                {item.imagem ? (
                    <img
                        src={item.imagem}
                        alt={item.nome}
                    />
                ) : (
                    <span>
                        Sem imagem
                    </span>
                )}
            </ImageContainer>

            <Content>
                <ProductInfo>
                    <ProductName>
                        {item.nome}
                    </ProductName>

                    {atributos.length > 0 && (
                        <ProductSize>
                            {atributos.map(
                                (
                                    [
                                        nomeAtributo,
                                        valor
                                    ],
                                    index
                                ) => (
                                    <span
                                        key={
                                            nomeAtributo
                                        }
                                    >
                                        {formatarNomeAtributo(
                                            nomeAtributo
                                        )}
                                        : {valor}

                                        {index <
                                            atributos.length -
                                            1 && (
                                                <>
                                                    {" • "}
                                                </>
                                            )}
                                    </span>
                                )
                            )}
                        </ProductSize>
                    )}

                    <ProductPrice>
                        {formatarDinheiro(
                            precoTotal
                        )}
                    </ProductPrice>
                </ProductInfo>

                <ProductActions>
                    <QuantityContainer>
                        <QuantityButton
                            type="button"
                            onClick={
                                diminuirQuantidade
                            }
                            $disabled={
                                item.quantidade === 1
                            }
                            disabled={
                                item.quantidade === 1
                            }
                        >
                            −
                        </QuantityButton>

                        <Quantity>
                            {item.quantidade}
                        </Quantity>

                        <QuantityButton
                            type="button"
                            onClick={
                                aumentarQuantidade
                            }
                        >
                            +
                        </QuantityButton>
                    </QuantityContainer>

                    <RemoveButton
                        type="button"
                        onClick={
                            removerProduto
                        }
                        aria-label={`Remover ${item.nome} do carrinho`}
                    >
                        <TrashIcon />
                    </RemoveButton>
                </ProductActions>
            </Content>
        </Container>
    );
}