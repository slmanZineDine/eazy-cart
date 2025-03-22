"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
// My-Components
import Invoice from "./Invoice";
import CartTitle from "./CartTitle";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";
// Utils
import { getSubTotal, getTotal } from "@/utils/cart";
import { useEffect, useState } from "react";

const CartView = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  // ################### ZUSTAND ###################
  const cart = useCartStore(selectCartItems);

  // ################### REACT HOOKS ###################
  const [isLoading, setIsLoading] = useState(true);

  // ################### SIDE EFFECT ###################
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-20 w-20 animate-ping rounded-full bg-primary"></div>
      </div>
    );
  } else if (cart?.length > 0) {
    return (
      <>
        <CartTitle translations={translations} />
        <section>
          <div className="container flex flex-col items-center gap-8 lg:flex-row lg:items-start">
            <CartTable translations={translations} />
            <Invoice
              translations={translations}
              subTotal={getSubTotal(cart)}
              total={getTotal(cart)}
            />
          </div>
        </section>
      </>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartView;
