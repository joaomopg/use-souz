import type { Produto } from "../types/Produto";
import type { CartItem } from "../types/CartItems";

export function produtoToCartItem(
    produto: Produto,
    tamanho = "",
    quantidade = 1
): CartItem {

    return {

        id: String(produto.id),

        nome: produto.name,

        preco: produto.preco,

        imagem: produto.images[0],

        quantidade,

        tamanho

    };

}