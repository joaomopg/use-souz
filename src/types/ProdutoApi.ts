export interface ProdutoCategoriaApi {
  id: number;
  nome: string;
  slug: string;
}

export interface ProdutoImagemPrincipalApi {
  url: string;
  textoAlternativo: string | null;
}

export interface ProdutoPrecoListaApi {
  quantidade: number;
  precoTotal: number;
}

export interface ProdutoVariacaoListaApi {
  id: number;
  sku: string;

  atributos: Record<
    string,
    string
  >;

  preco: number | null;

  precos:
    ProdutoPrecoListaApi[];
}

export interface ProdutoApi {
  id: number;
  nome: string;
  slug: string;

  categoria: ProdutoCategoriaApi;

  precoInicial: number | null;

  quantidadeVariacoes: number;

  imagemPrincipal:
    | ProdutoImagemPrincipalApi
    | null;

  variacoes:
    ProdutoVariacaoListaApi[];
}

export interface ProdutosApiResponse {
  data: ProdutoApi[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}