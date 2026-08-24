import {
  useEffect
} from "react";

import {
  useCartDrawer
} from "../../contexts/cartDrawerContext";

import {
  useNavigate
} from "react-router-dom";

import {
  Actions,
  CloseButton,
  EmptyCart,
  EmptyCartIcon,
  EmptyCartTitle,
  EmptyCartText,
  ContinueShoppingButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Overlay,
  Summary
} from "./cartDrawerStyles";

import {
  useCart
} from "../../contexts/shoppingCartContext";

import {
  CartItem
} from "../CartItem/cartItem";

function formatarDinheiro(
  valor: number
): string {
  return new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  ).format(valor);
}

export default function CartDrawer() {
  const {
    items,
    total,
    totalItems
  } = useCart();

  const {
    isOpen,
    closeDrawer
  } = useCartDrawer();

  const handleContinueShopping = () => {
    closeDrawer();
  };

  const navigate =
    useNavigate();

  function irParaCheckout() {
    closeDrawer();

    navigate(
      "/checkout"
    );
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      onClick={closeDrawer}
    >
      <Drawer
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <DrawerHeader>
          <DrawerTitle>
            Carrinho
          </DrawerTitle>

          <CloseButton
            type="button"
            onClick={closeDrawer}
          >
            ✕
          </CloseButton>
        </DrawerHeader>

        <DrawerBody>
          {items.length === 0 ? (
            <EmptyCart>
              <EmptyCartIcon>
                🛒
              </EmptyCartIcon>

              <EmptyCartTitle>
                Seu carrinho está vazio
              </EmptyCartTitle>

              <EmptyCartText>
                Você ainda não adicionou nenhum produto.
                Explore nosso catálogo e encontre a joia ideal para você.
              </EmptyCartText>

              <ContinueShoppingButton
                onClick={handleContinueShopping}
              >
                Continuar comprando
              </ContinueShoppingButton>
            </EmptyCart>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))
          )}
        </DrawerBody>

        <DrawerFooter>
          <Summary>
            <span>
              Quantidade de produtos:
            </span>

            <strong>
              {totalItems}
            </strong>

            <br />

            <span>
              Subtotal:
            </span>

            <strong>
              {formatarDinheiro(total)}
            </strong>
          </Summary>

          {items.length > 0 && (
            <Actions>
              <button
                type="button"
                onClick={
                  irParaCheckout
                }
              >
                Finalizar compra
              </button>
            </Actions>
          )}
        </DrawerFooter>
      </Drawer>
    </Overlay>
  );
}