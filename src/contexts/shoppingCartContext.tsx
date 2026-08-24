import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";

import {
  useToast
} from "./ToastContext";

import type {
  CartItem
} from "../types/CartItems";

import {
  calcularPrecoCarrinho
} from "../utils/calcularPrecoCarrinho";

interface CartContextData {
  items: CartItem[];

  addItem: (
    item: CartItem
  ) => void;

  removeItem: (
    id: string
  ) => void;

  updateQuantity: (
    id: string,
    quantidade: number
  ) => void;

  clearCart: () => void;

  total: number;
  totalItems: number;
}

export const CartContext =
  createContext<CartContextData>(
    {} as CartContextData
  );

export function CartProvider({
  children
}: {
  children: ReactNode;
}) {
  const [items, setItems] =
  useState<CartItem[]>(() => {
    const stored =
      localStorage.getItem(
        "@use-souz:cart"
      );

    if (!stored) {
      return [];
    }

    try {
      const parsed =
        JSON.parse(stored) as CartItem[];

      return parsed.filter(
        (item) =>
          typeof item.id === "string" &&
          typeof item.produtoId === "number" &&
          typeof item.produtoVariacaoId === "number" &&
          typeof item.sku === "string" &&
          typeof item.nome === "string" &&
          typeof item.preco === "number" &&
          typeof item.quantidade === "number" &&
          item.atributos !== null &&
          typeof item.atributos === "object"
      );
    } catch {
      localStorage.removeItem(
        "@use-souz:cart"
      );

      return [];
    }
  });

  const { showToast } =
    useToast();

  useEffect(() => {
    localStorage.setItem(
      "@use-souz:cart",
      JSON.stringify(items)
    );
  }, [items]);

  function addItem(
    item: CartItem
  ) {
    setItems((previousItems) => {
      const existingItem =
        previousItems.find(
          (currentItem) =>
            currentItem.id === item.id
        );

      if (existingItem) {
        return previousItems.map(
          (currentItem) =>
            currentItem.id === item.id
              ? {
                  ...currentItem,

                  quantidade:
                    currentItem
                      .quantidade +
                    item.quantidade
                }
              : currentItem
        );
      }

      return [
        ...previousItems,
        item
      ];
    });

    showToast(
      "Produto adicionado ao carrinho."
    );
  }

  function removeItem(
    id: string
  ) {
    setItems(
      (previousItems) =>
        previousItems.filter(
          (item) =>
            item.id !== id
        )
    );
  }

  function updateQuantity(
    id: string,
    quantidade: number
  ) {
    if (quantidade <= 0) {
      removeItem(id);
      return;
    }

    setItems(
      (previousItems) =>
        previousItems.map(
          (item) =>
            item.id === id
              ? {
                  ...item,
                  quantidade
                }
              : item
        )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const total =
  items.reduce(
    (sum, item) =>
      sum +
      calcularPrecoCarrinho(
        item.precos,
        item.quantidade
      ),
    0
  );

  const totalItems =
    items.reduce(
      (sum, item) =>
        sum +
        item.quantidade,
      0
    );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(
    CartContext
  );
}