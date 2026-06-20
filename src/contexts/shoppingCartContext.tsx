import { createContext, useState, useEffect, type ReactNode } from 'react';

interface CartItem {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
}

interface CartContextData {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantidade: number) => void;
  clearCart: () => void;
  total: number;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('@use-souz:cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('@use-souz:cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + item.quantidade } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQuantity = (id: string, quantidade: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantidade } : i)));
  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}