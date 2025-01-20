"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
import CartTitle from "./CartTitle";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";
import Invoice from "./Invoice";

const CartView = ({ cart }: { cart: { [key: string]: string } }) => {
  // ################### ZUSTAND ###################
  const cartCount = useCartStore(selectCartItems)?.length;
  console.log(cart);
  if (cartCount > 0) {
    return (
      <>
        <CartTitle />
        <section>
          <div className="container flex flex-col items-center gap-8 lg:flex-row">
            <CartTable />
            <Invoice />
          </div>
        </section>
      </>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartView;
