import {
  CartContainer,
  CartBadge,
  CartIcon
} from './shoppingCartStyles';

type ShoppingCartProps = {
  quantity: number;
  openDrawer: () => void;
};

function ShoppingCart({ quantity, openDrawer }: ShoppingCartProps) {
  return (
    <CartContainer onClick={openDrawer}>
      <CartIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14H16.55C17.3 14 17.96 13.59 18.3 12.97L21.88 6.48C22.25 5.81 21.77 5 21 5H5.21L4.27 3H1V5H3L6.6 12.59L5.25 15.04C4.52 16.37 5.48 18 7 18H19V16H7L7.17 14Z" />
      </CartIcon>

      {quantity > 0 && (
        <CartBadge>
          {quantity > 99 ? "99+" : quantity}
        </CartBadge>
      )}
    </CartContainer>
  );
}

export default ShoppingCart;