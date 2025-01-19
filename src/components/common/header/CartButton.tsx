"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
// My-Components
import CustomLink from "../customLink";
// Icons
import { ShoppingCart } from "lucide-react";
// Data
import { paths } from "@/constants/paths";
import getCartQuanties from "@/utils/cart/getCartQuanties";

const CartButton = () => {
  // ################### ZUSTAND ###################
  const cart = useCartStore(selectCartItems);
  const cartCount = getCartQuanties(cart);

  return (
    <div>
      <CustomLink className="relative" href={paths.cart.root}>
        {cartCount > 0 && (
          <span className="flex-center absolute right-0 top-0 size-6 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 text-sm text-white">
            {cartCount}
          </span>
        )}
        <ShoppingCart className="icon" />
      </CustomLink>
    </div>
  );
};

export default CartButton;
