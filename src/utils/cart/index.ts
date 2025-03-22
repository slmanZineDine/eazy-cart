// Types
import type { TCartProduct } from "@/types/product";

export default function getCartQuanties(cart: TCartProduct[]) {
  return cart.reduce((total, product) => (total += product.quantity!), 0);
}

export const getSubTotal = (cart: TCartProduct[]) => {
  return +cart
    .reduce(
      (total, product) => (total += product.basePrice * product.quantity!),
      0,
    )
    .toFixed(2);
};

export const getTotal = (cart: TCartProduct[]) => {
  return +(getSubTotal(cart) - 12).toFixed(2);
};
