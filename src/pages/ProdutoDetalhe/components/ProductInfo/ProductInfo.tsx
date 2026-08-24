import type {
    Dispatch,
    SetStateAction
} from "react";

import {
    Container,
    Breadcrumb,
    ProductTitle,
    Rating,
    PriceSection,
    SizeSection,
    QuantitySection,
    BuySection,
    FavoriteButton,
    CurrentPrice,
    PixPrice,
    Installments,
    SectionTitle,
    QuantitySelector,
    QuantityButton,
    QuantityValue,
    BuyNowButton,
    AddToCartButton,
    ProductMeta,
    ProductHeader
} from "./ProductInfoStyles";

import type {
    ProdutoDetalheApi,
    ProdutoVariacaoApi
} from "../../../../types/ProdutoDetalheApi";

import VariationSelector
    from "../../../../components/VariationSelector/VariationSelector";

interface ProductInfoProps {
    produto: ProdutoDetalheApi;

    variacaoSelecionada:
    ProdutoVariacaoApi | null;

    setVariacaoSelecionada:
    Dispatch<
        SetStateAction<
            ProdutoVariacaoApi | null
        >
    >;

    quantidade: number;

    setQuantidade:
    Dispatch<
        SetStateAction<number>
    >;

    adicionarAoCarrinho:
    () => void;
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

function obterPrecoTotal(
    variacao:
        ProdutoVariacaoApi | null,
    quantidade: number
): number | null {
    if (!variacao) {
        return null;
    }

    if (quantidade <= 3) {
        const preco =
            variacao.precos.find(
                (item) =>
                    item.quantidade ===
                    quantidade
            );

        return preco
            ? preco.precoTotal
            : null;
    }

    const precoTres =
        variacao.precos.find(
            (item) =>
                item.quantidade === 3
        );

    if (!precoTres) {
        return null;
    }

    const precoUnitario =
        precoTres.precoTotal / 3;

    return (
        precoTres.precoTotal +
        precoUnitario *
        (quantidade - 3)
    );
}

export default function ProductInfo({
    produto,
    variacaoSelecionada,
    setVariacaoSelecionada,
    quantidade,
    setQuantidade,
    adicionarAoCarrinho
}: ProductInfoProps) {
    const precoTotal =
        obterPrecoTotal(
            variacaoSelecionada,
            quantidade
        );

    return (
        <Container>
            <ProductHeader>
                <Breadcrumb>
                    Home / {produto.categoria.nome} /{" "}
                    {produto.nome}
                </Breadcrumb>

                <ProductTitle>
                    {produto.nome}
                </ProductTitle>

                <ProductMeta>
                    <Rating>
                        ★★★★★
                    </Rating>
                </ProductMeta>
            </ProductHeader>

            <PriceSection>
                <CurrentPrice>
                    {precoTotal !== null
                        ? formatarDinheiro(
                            precoTotal
                        )
                        : "Preço indisponível"}
                </CurrentPrice>

                <PixPrice>
                    Preço total para{" "}
                    <strong>
                        {quantidade}{" "}
                        {quantidade === 1
                            ? "unidade"
                            : "unidades"}
                    </strong>
                </PixPrice>

                <Installments>
                    Os descontos são aplicados
                    automaticamente conforme a
                    quantidade.
                </Installments>
            </PriceSection>

            <SizeSection>
                <SectionTitle>
                    Escolha a variação
                </SectionTitle>

                <VariationSelector
                    variacoes={
                        produto.variacoes.map(
                            (variacao) => ({
                                id: variacao.id,

                                sku: variacao.sku,

                                atributos:
                                    variacao.atributos,

                                preco:
                                    variacao.precos.find(
                                        (preco) =>
                                            preco.quantidade === 1
                                    )?.precoTotal ?? null,

                                precos:
                                    variacao.precos.map(
                                        (preco) => ({
                                            quantidade:
                                                Number(
                                                    preco.quantidade
                                                ),

                                            precoTotal:
                                                Number(
                                                    preco.precoTotal
                                                )
                                        })
                                    )
                            })
                        )
                    }

                    variacaoSelecionadaId={
                        variacaoSelecionada?.id ?? null
                    }

                    onSelect={(variacaoId) => {
                        const variacao =
                            produto.variacoes.find(
                                (item) =>
                                    item.id ===
                                    variacaoId
                            );

                        if (variacao) {
                            setVariacaoSelecionada(
                                variacao
                            );
                        }
                    }}
                />
            </SizeSection>

            <QuantitySection>
                <SectionTitle>
                    Quantidade
                </SectionTitle>

                <QuantitySelector>
                    <QuantityButton
                        type="button"
                        onClick={() =>
                            setQuantidade(
                                (atual) =>
                                    Math.max(
                                        1,
                                        atual - 1
                                    )
                            )
                        }
                    >
                        −
                    </QuantityButton>

                    <QuantityValue>
                        {quantidade}
                    </QuantityValue>

                    <QuantityButton
                        type="button"
                        onClick={() =>
                            setQuantidade(
                                (atual) =>
                                    atual + 1
                            )
                        }
                    >
                        +
                    </QuantityButton>
                </QuantitySelector>
            </QuantitySection>

            <BuySection>
                <BuyNowButton
                    type="button"
                    disabled={
                        !variacaoSelecionada
                    }
                >
                    Comprar agora
                </BuyNowButton>

                <AddToCartButton
                    type="button"
                    disabled={
                        !variacaoSelecionada
                    }
                    onClick={
                        adicionarAoCarrinho
                    }
                >
                    Adicionar ao carrinho
                </AddToCartButton>
            </BuySection>

            <FavoriteButton
                type="button"
            >
                🤍 Adicionar aos favoritos
            </FavoriteButton>
        </Container>
    );
}