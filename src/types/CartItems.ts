export interface CartItemPrice {
  quantidade: number;
  precoTotal: number;
}

export interface CartItem {
  id: string;

  produtoId: number;
  produtoVariacaoId: number;

  sku: string;

  nome: string;
  imagem: string;

  /**
   * Preço unitário da faixa de 1 unidade.
   * Mantemos para compatibilidade.
   */
  preco: number;

  precos: CartItemPrice[];

  quantidade: number;

  atributos: Record<
    string,
    string
  >;
}