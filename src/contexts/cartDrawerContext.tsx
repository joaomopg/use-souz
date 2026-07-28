import { createContext, useContext, useState, type ReactNode } from "react";

interface CartDrawerData {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
}
export const CartDrawerContext = createContext<CartDrawerData>({} as CartDrawerData);

export function CartDrawerProvider({ children }: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = ()=> {
        setIsOpen(true)
    }

    const closeDrawer = ()=> {
        setIsOpen(false)
    }

    const toggleDrawer = ()=> {
        setIsOpen(prev => !prev)
    }

    return (
        <CartDrawerContext.Provider value={{isOpen, openDrawer, closeDrawer, toggleDrawer}}>
            {children}
        </CartDrawerContext.Provider>
    )
}

export function useCartDrawer() {
    return useContext(CartDrawerContext)
}