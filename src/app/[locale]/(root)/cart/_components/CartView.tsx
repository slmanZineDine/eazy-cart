"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
import CartTitle from "./CartTitle";
import EmptyCart from "./EmptyCart";

const CartView = ({ cart }: { cart: { [key: string]: string } }) => {
  // ################### ZUSTAND ###################
  const cartCount = useCartStore(selectCartItems)?.length;
  console.log(cart);
  if (cartCount > 0) {
    return (
      <>
        <CartTitle />
        <section className="section-padding">
          <div className="container"></div>
        </section>
      </>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartView;
