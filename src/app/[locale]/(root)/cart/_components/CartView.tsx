"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
import CartTitle from "./CartTitle";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";
import Invoice from "./Invoice";

const CartView = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  // ################### ZUSTAND ###################
  const cartCount = useCartStore(selectCartItems)?.length;

  if (cartCount > 0) {
    return (
      <>
        <CartTitle translations={translations} />
        <section>
          <div className="container flex flex-col items-center gap-8 lg:flex-row">
            <CartTable translations={translations} />
            <Invoice translations={translations} />
          </div>
        </section>
      </>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartView;
