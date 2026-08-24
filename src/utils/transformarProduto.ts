import type {
  Produto
} from "../types/Produto";

import type {
  ProdutoApi
} from "../types/ProdutoApi";

import {
  montarUrlImagem
} from "../services/api";

export function transformarProduto(
  produto: ProdutoApi
): Produto {
  const imagem =
    montarUrlImagem(
      produto.imagemPrincipal?.url
    );

  const precoInicial =
    produto.precoInicial === null
      ? null
      : Number(
          produto.precoInicial
        );

  return {
    id:
      produto.id,

    slug:
      produto.slug,

    images:
      imagem
        ? [imagem]
        : [],

    name:
      produto.nome,

    preco:
      precoInicial,

    oldPrice: "",

    currentPrice:
      precoInicial === null
        ? "Preço indisponível"
        : new Intl.NumberFormat(
            "pt-BR",
            {
              style: "currency",
              currency: "BRL"
            }
          ).format(
            precoInicial
          ),

    pixPrice: "",

    installments:
      "Consulte os preços por quantidade",

    discount: "",

    freeShipping:
      false,

    sizes: [],

    description: "",

    categoria:
      produto.categoria,

    quantidadeVariacoes:
      produto.quantidadeVariacoes,

    variacoes:
      produto.variacoes.map(
        (variacao) => ({
          id:
            variacao.id,

          sku:
            variacao.sku,

          atributos:
            variacao.atributos,

          preco:
            variacao.preco === null
              ? null
              : Number(
                  variacao.preco
                ),

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
  };
}