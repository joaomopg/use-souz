export interface ProdutoApi {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  categoria: string;
  espessura_mm: string | null;
  tamanho_cm: number | null;
  estoque: number;
  url_imagem: string;
  data_criacao: string;
  ativo: number;
  destaque: number;
  vendido: number;
  marca: string | null;
}