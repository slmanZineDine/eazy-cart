// Types
import type { TCartProduct } from "@/types/product";

export default function getCartQuanties(cart: TCartProduct[]) {
  return cart.reduce((total, product) => (total += product.quantity!), 0);
}
