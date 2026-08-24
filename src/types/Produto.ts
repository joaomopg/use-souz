export interface ProdutoPreco {
  quantidade: number;
  precoTotal: number;
}

export interface ProdutoVariacao {
  id: number;
  sku: string;

  atributos: Record<
    string,
    string
  >;

  preco: number | null;

  precos: ProdutoPreco[];
}

export interface Produto {
  id: number;
  slug: string;

  images: string[];

  name: string;

  preco: number | null;

  oldPrice: string;
  currentPrice: string;
  pixPrice: string;
  installments: string;

  discount: string;
  freeShipping: boolean;

  sizes: string[];

  description: string;

  categoria: {
    id: number;
    nome: string;
    slug: string;
  };

  quantidadeVariacoes: number;

  variacoes:
    ProdutoVariacao[];
}