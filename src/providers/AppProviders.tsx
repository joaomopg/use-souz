import type { ReactNode } from "react";
import { CartDrawerProvider } from "../contexts/cartDrawerContext";
import { CartProvider } from "../contexts/shoppingCartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ToastProvider } from "../contexts/ToastContext";

export function AppProviders({ children }: {children: ReactNode}) {

    return (
         <ThemeProvider theme={theme}>

            <GlobalStyle />

            <ToastProvider>

                <CartProvider>

                    <CartDrawerProvider>

                        {children}

                    </CartDrawerProvider>

                </CartProvider>
                
            </ToastProvider>


         </ThemeProvider>

    );

}