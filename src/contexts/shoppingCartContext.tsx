import { createContext, useState, useEffect, type ReactNode, useContext } from 'react';
import { useToast } from "./ToastContext";

export interface CartItem {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
  tamanho: string
}

interface CartContextData {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, tamanho: string) => void;
  updateQuantity: (id: string, quantidade: number, tamanho: string) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {

  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('@use-souz:cart');
    return stored ? JSON.parse(stored) : [];
  });

  const { showToast } = useToast();

  useEffect(() => {
    localStorage.setItem('@use-souz:cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.tamanho === item.tamanho); //verifica se o item adicionado ao carrinho já existia no carrinho antes
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.tamanho === item.tamanho? { ...i, quantidade: i.quantidade + item.quantidade } : i
        );
      }
      return [...prev, item];
    });
    showToast("Produto adicionado ao carrinho.");
  };

  const removeItem = (id: string, tamanho: string) => setItems((prev) => prev.filter((i) => i.id !== id || i.tamanho !== tamanho));

  const updateQuantity = (id: string, quantidade: number, tamanho: string) =>
    setItems((prev) => prev.map((i) => (i.id === id && i.tamanho === tamanho? { ...i, quantidade } : i)));

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  const totalItems = items.reduce((acumulador, i)=> acumulador + i.quantidade, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}