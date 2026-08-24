import {
  useEffect,
  useMemo,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import Header from "../../components/header/header";

import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import WarrantyCard from "./components/WarrantyCard/WarrantyCard";
import ShippingCard from "./components/ShippingCard/ShippingCard";
import Description from "./components/Description/Description";

import {
  Container,
  TopSection,
  LeftColumn,
  RightColumn,
  BottomSection
} from "./produtoDetalheStyles";

import {
  getProdutoPorSlug
} from "../../services/produto.service";

import {
  montarUrlImagem
} from "../../services/api";

import type {
  ProdutoDetalheApi,
  ProdutoVariacaoApi
} from "../../types/ProdutoDetalheApi";

import {
  useCart
} from "../../contexts/shoppingCartContext";

import {
  produtoToCartItem
} from "../../utils/cartMapper";

export default function ProdutoDetalhe() {
  const [
    produto,
    setProduto
  ] =
    useState<ProdutoDetalheApi | null>(
      null
    );

  const [
    variacaoSelecionada,
    setVariacaoSelecionada
  ] =
    useState<ProdutoVariacaoApi | null>(
      null
    );

  const [
    quantidade,
    setQuantidade
  ] = useState(1);

  const [
    loading,
    setLoading
  ] = useState(true);

  const [
    error,
    setError
  ] =
    useState<string | null>(null);

  const { slug } =
    useParams<{
      slug: string;
    }>();

  const { addItem } =
    useCart();

  useEffect(() => {
    if (!slug) {
      setError(
        "Produto inválido."
      );

      setLoading(false);
      return;
    }

    void buscarProduto(
      slug
    );
  }, [slug]);

  async function buscarProduto(
    productSlug: string
  ) {
    try {
      setLoading(true);
      setError(null);

      const response =
        await getProdutoPorSlug(
          productSlug
        );

      setProduto(response);

      setVariacaoSelecionada(
        response.variacoes[0] ??
          null
      );
    } catch (requestError) {
      console.error(
        requestError
      );

      setError(
        "Não foi possível carregar o produto."
      );
    } finally {
      setLoading(false);
    }
  }

  const imagens =
    useMemo(() => {
      if (!produto) {
        return [];
      }

      return produto.imagens
        .map((imagem) =>
          montarUrlImagem(
            imagem.url
          )
        )
        .filter(Boolean);
    }, [produto]);

  const imagemDaVariacao =
    useMemo(() => {
      if (
        !produto ||
        !variacaoSelecionada
      ) {
        return undefined;
      }

      const imagem =
        produto.imagens.find(
          (currentImage) =>
            currentImage
              .produtoVariacaoId ===
            variacaoSelecionada.id
        );

      return imagem
        ? montarUrlImagem(
            imagem.url
          )
        : undefined;
    }, [
      produto,
      variacaoSelecionada
    ]);

  function obterPrecoUnitario():
  number | null {
    if (!variacaoSelecionada) {
      return null;
    }

    if (quantidade <= 3) {
      const preco =
        variacaoSelecionada
          .precos.find(
            (currentPrice) =>
              currentPrice
                .quantidade ===
              quantidade
          );

      return preco
        ? preco.precoTotal /
            quantidade
        : null;
    }

    const precoTres =
      variacaoSelecionada
        .precos.find(
          (currentPrice) =>
            currentPrice
              .quantidade === 3
        );

    return precoTres
      ? precoTres.precoTotal / 3
      : null;
  }

  function adicionarAoCarrinho() {
    if (
      !produto ||
      !variacaoSelecionada
    ) {
      return;
    }

    const precoUnitario =
      obterPrecoUnitario();

    if (precoUnitario === null) {
      return;
    }

    addItem(
      produtoToCartItem({
        produto,
        variacao:
          variacaoSelecionada,

        quantidade,

        imagem:
          imagemDaVariacao ??
          imagens[0] ??
          "",

        precoUnitario
      })
    );
  }

  if (loading) {
    return (
      <div>
        Carregando...
      </div>
    );
  }

  if (
    error ||
    !produto
  ) {
    return (
      <div>
        {error ??
          "Produto não encontrado."}
      </div>
    );
  }

  return (
    <>
      <Header />

      <Container>
        <TopSection>
          <LeftColumn>
            <ProductGallery
              imagens={imagens}

              imagemAtiva={
                imagemDaVariacao
              }
            />

            <WarrantyCard />
          </LeftColumn>

          <RightColumn>
            <ProductInfo
              produto={produto}

              variacaoSelecionada={
                variacaoSelecionada
              }

              setVariacaoSelecionada={
                setVariacaoSelecionada
              }

              quantidade={
                quantidade
              }

              setQuantidade={
                setQuantidade
              }

              adicionarAoCarrinho={
                adicionarAoCarrinho
              }
            />
          </RightColumn>
        </TopSection>

        <BottomSection>
          <ShippingCard />

          <Description
            descricao={
              produto.descricao ??
              "Joia masculina banhada a ouro 18k, desenvolvida com acabamento de alta qualidade."
            }
          />
        </BottomSection>
      </Container>
    </>
  );
}