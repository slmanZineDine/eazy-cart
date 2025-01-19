import type { TCartProduct } from "@/zustand/cartStore";

export default function getCartQuanties(cart: TCartProduct[]) {
  return cart.reduce((total, product) => (total += product.quantity!), 0);
}
