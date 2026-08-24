import { api } from "./api";

import type {
  ProdutoApi,
  ProdutosApiResponse
} from "../types/ProdutoApi";

import type {
  ProdutoDetalheApi
} from "../types/ProdutoDetalheApi";

interface GetProdutosParams {
  category?: string | undefined;
  search?: string | undefined;
}

export async function getProdutos(
  params: GetProdutosParams = {}
): Promise<ProdutoApi[]> {
  const primeiraResposta =
    await api.get<ProdutosApiResponse>(
      "/products",
      {
        params: {
          category: params.category,
          search: params.search,
          page: 1,
          limit: 100
        }
      }
    );

  const {
    data,
    pagination
  } = primeiraResposta.data;

  if (pagination.totalPages <= 1) {
    return data;
  }

  const requisicoes =
    Array.from(
      {
        length:
          pagination.totalPages - 1
      },
      (_, index) =>
        api.get<ProdutosApiResponse>(
          "/products",
          {
            params: {
              category:
                params.category,

              search:
                params.search,

              page: index + 2,
              limit: 100
            }
          }
        )
    );

  const respostas =
    await Promise.all(
      requisicoes
    );

  return [
    ...data,

    ...respostas.flatMap(
      (resposta) =>
        resposta.data.data
    )
  ];
}

export async function getProdutoPorSlug(
  slug: string
): Promise<ProdutoDetalheApi> {
  const response =
    await api.get<ProdutoDetalheApi>(
      `/products/${slug}`
    );

  return response.data;
}