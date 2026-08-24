export interface ProdutoPrecoApi {
  quantidade: number;
  precoTotal: number;
}

export interface ProdutoVariacaoApi {
  id: number;
  sku: string;
  estoque: number;

  atributos: Record<
    string,
    string
  >;

  precos: ProdutoPrecoApi[];
}

export interface ProdutoImagemApi {
  id: number;
  url: string;
  textoAlternativo: string | null;
  principal: boolean;
  ordem: number;
  produtoVariacaoId: number | null;
}

export interface ProdutoDetalheApi {
  id: number;
  nome: string;
  slug: string;
  descricao: string | null;
  tipoProduto: "SIMPLES" | "KIT";

  categoria: {
    id: number;
    nome: string;
    slug: string;
  };

  imagens: ProdutoImagemApi[];
  variacoes: ProdutoVariacaoApi[];
}