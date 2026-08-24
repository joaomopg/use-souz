import type {
  ProdutoDetalheApi,
  ProdutoVariacaoApi
} from "../types/ProdutoDetalheApi";

import type {
  CartItem
} from "../types/CartItems";

interface ProdutoToCartItemParams {
  produto: ProdutoDetalheApi;

  variacao:
    ProdutoVariacaoApi;

  quantidade: number;

  imagem: string;

  precoUnitario: number;
}

export function produtoToCartItem({
  produto,
  variacao,
  quantidade,
  imagem,
  precoUnitario
}: ProdutoToCartItemParams): CartItem {
  return {
    id:
      `produto-${produto.id}` +
      `-variacao-${variacao.id}`,

    produtoId:
      produto.id,

    produtoVariacaoId:
      variacao.id,

    sku:
      variacao.sku,

    nome:
      produto.nome,

    imagem,

    preco:
      precoUnitario,

    precos:
      variacao.precos,

    quantidade,

    atributos:
      variacao.atributos
  };
}