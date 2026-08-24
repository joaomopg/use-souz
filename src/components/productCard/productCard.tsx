import {
  useEffect,
  useMemo,
  useState,
  type MouseEvent
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  useCart
} from "../../contexts/shoppingCartContext";

import {
  useCartDrawer
} from "../../contexts/cartDrawerContext";

import type {
  ProdutoVariacao
} from "../../types/Produto";

import VariationSelector
  from "../VariationSelector/VariationSelector";

import {
  Card,
  ImageContainer,
  ProductImage,
  BadgeContainer,
  Badge,
  Content,
  ProductName,
  PriceContainer,
  CurrentPrice,
  PixPrice,
  Installments,
  BuyButton,
  AddCartButton,
  Actions
} from "./productCardStyles";

interface ProductCardProps {
  id: number;
  slug: string;

  image: string[];

  name: string;

  precoInicial:
  number | null;

  variacoes:
  ProdutoVariacao[];

  freeShipping?: boolean;
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

export default function ProductCard({
  id,
  slug,
  image,
  name,
  precoInicial,
  variacoes,
  freeShipping = false
}: ProductCardProps) {
  const navigate =
    useNavigate();

  const {
    addItem
  } = useCart();

  const {
    openDrawer
  } = useCartDrawer();

  const [
    variacaoSelecionadaId,
    setVariacaoSelecionadaId
  ] = useState<number | null>(
    variacoes[0]?.id ??
    null
  );

  /*
   * Caso os produtos sejam recarregados
   * por um filtro, garante que a seleção
   * continue apontando para uma variação
   * válida.
   */
  useEffect(() => {
    const selecaoAindaExiste =
      variacoes.some(
        (variacao) =>
          variacao.id ===
          variacaoSelecionadaId
      );

    if (!selecaoAindaExiste) {
      setVariacaoSelecionadaId(
        variacoes[0]?.id ??
        null
      );
    }
  }, [
    variacoes,
    variacaoSelecionadaId
  ]);

  const variacaoSelecionada =
    useMemo(
      () =>
        variacoes.find(
          (variacao) =>
            variacao.id ===
            variacaoSelecionadaId
        ) ??
        variacoes[0] ??
        null,
      [
        variacoes,
        variacaoSelecionadaId
      ]
    );

  function abrirProduto() {
    navigate(
      `/produtos/${slug}`
    );
  }

  function adicionarAoCarrinho(
    event:
      MouseEvent<HTMLButtonElement>
  ) {
    event.stopPropagation();

    if (
      !variacaoSelecionada ||
      variacaoSelecionada.preco ===
      null
    ) {
      return;
    }

    addItem({
      id:
        `produto-${id}` +
        `-variacao-${variacaoSelecionada.id
        }`,

      produtoId: id,

      produtoVariacaoId:
        variacaoSelecionada.id,

      sku:
        variacaoSelecionada.sku,

      nome: name,

      imagem:
        image[0] ?? "",

      preco:
        variacaoSelecionada.preco,

      precos:
        variacaoSelecionada.precos,

      quantidade: 1,

      atributos:
        variacaoSelecionada
          .atributos
    });

    openDrawer();
  }

  const imagemPrincipal =
    image[0];

  const precoExibido =
    variacaoSelecionada
      ?.preco ??
    precoInicial;

  return (
    <Card
      onClick={abrirProduto}
    >
      <ImageContainer>
        {imagemPrincipal ? (
          <ProductImage
            src={imagemPrincipal}
            alt={name}
            loading="lazy"
          />
        ) : (
          <ProductImage
            src="/imagem-indisponivel.webp"
            alt="Imagem indisponível"
            loading="lazy"
          />
        )}

        <BadgeContainer>
          {freeShipping && (
            <Badge>
              FRETE GRÁTIS
            </Badge>
          )}
        </BadgeContainer>
      </ImageContainer>

      <Content>
        <ProductName>
          {name}
        </ProductName>

        <VariationSelector
          variacoes={variacoes}

          variacaoSelecionadaId={
            variacaoSelecionada
              ?.id ??
            null
          }

          onSelect={
            setVariacaoSelecionadaId
          }
        />

        <PriceContainer>
          <PixPrice>
            A partir de
          </PixPrice>

          <CurrentPrice>
            {precoExibido === null
              ? "Preço indisponível"
              : formatarDinheiro(
                precoExibido
              )}
          </CurrentPrice>

          <Installments>
            Consulte os preços por quantidade
          </Installments>
        </PriceContainer>

        <Actions>
          <BuyButton
            type="button"

            onClick={(event) => {
              event.stopPropagation();
              abrirProduto();
            }}
          >
            VER DETALHES
          </BuyButton>

          <AddCartButton
            type="button"

            disabled={
              !variacaoSelecionada ||
              variacaoSelecionada
                .preco === null
            }

            onClick={
              adicionarAoCarrinho
            }
          >
            🛒 ADICIONAR AO CARRINHO
          </AddCartButton>
        </Actions>
      </Content>
    </Card>
  );
}