"use client";

// Next
import { useParams } from "next/navigation";
// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
// My-Components
import CustomLink from "../custom-link";
// Icons
import { ShoppingCart } from "lucide-react";
// Data
import { paths } from "@/constants/paths";
import getCartQuanties from "@/utils/cart";
import { Languages } from "@/constants/enums";

const CartButton = () => {
  // ################### NEXT ###################
  const { locale } = useParams();

  // ################### ZUSTAND ###################
  const cart = useCartStore(selectCartItems);
  const cartCount = getCartQuanties(cart);

  return (
    <div>
      <CustomLink className="relative" href={paths.cart.root}>
        {cartCount > 0 && (
          <span
            className={`flex-center absolute end-0 top-0 z-10 size-6 -translate-y-1/2 ${locale === Languages.ARABIC ? "-translate-x-1/2" : "translate-x-1/2"} rounded-full bg-red-500 text-sm text-white`}
          >
            {cartCount}
          </span>
        )}
        <ShoppingCart
          className={`icon ${locale === Languages.ARABIC ? "-scale-x-100" : ""} `}
        />
      </CustomLink>
    </div>
  );
};

export default CartButton;
