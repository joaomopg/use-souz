import { useEffect } from "react";
import { useCartDrawer } from "../../contexts/cartDrawerContext";
import { Actions, CloseButton, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerTitle, Overlay, Summary } from "./cartDrawerStyles";
import { useCart } from "../../contexts/shoppingCartContext";
import { CartItem } from "../CartItem/cartItem";


export default function CartDrawer() {

    const { items, total, totalItems } = useCart();
    const { isOpen, closeDrawer } = useCartDrawer();

    useEffect(()=> {
        if (isOpen && items.length === 0) {
            closeDrawer();
        }
    }, [items])

    useEffect(() => {

        if (isOpen) {

            document.body.style.overflow = 'hidden'

        } else {

            document.body.style.overflow = 'auto'

        }

        return () => {
            document.body.style.overflow = 'auto'
        }

    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Overlay onClick={closeDrawer}>

            <Drawer onClick={(e) => e.stopPropagation()}>

                <DrawerHeader>

                    <DrawerTitle>Carrinho</DrawerTitle>

                    <CloseButton onClick={closeDrawer}>

                        ✕

                    </CloseButton>

                </DrawerHeader>

                <DrawerBody>
                    {items.length === 0 ? 

                    <div>Seu carrinho está vazio</div>

                    : 

                    items.map((item) => (
                        <CartItem
                        key={`${item.id}-${item.tamanho}`}
                        item={item}
                        />
                    ))}

                </DrawerBody>

                <DrawerFooter>

                    <Summary>
        
                        <span>Quantidade de produtos: </span>
                        
                        <strong>
                            {totalItems}
                        </strong>
                        <br></br>
                        <span>Subtotal: </span>
                        
                        <strong>
                            R$ {total.toFixed(2)}
                        </strong>

                    </Summary>

                    <Actions>

                        Botões

                    </Actions>

                </DrawerFooter>

            </Drawer>

        </Overlay>
    );

}