export interface Produto {
  id: number;
  images: string[];
  name: string;
  preco: number;
  oldPrice: string;
  currentPrice: string;
  pixPrice: string;
  installments: string;
  discount: string;
  freeShipping: boolean;
  sizes: string[];
  description: string;
  price: number;
}