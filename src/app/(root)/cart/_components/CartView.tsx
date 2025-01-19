"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
import CartTitle from "./CartTitle";
import EmptyCart from "./EmptyCart";

const CartView = () => {
  // ################### ZUSTAND ###################
  const cartCount = useCartStore(selectCartItems)?.length;
  console.log(cartCount);
  if (cartCount > 0) {
    return (
      <>
        <CartTitle />
      </>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartView;
