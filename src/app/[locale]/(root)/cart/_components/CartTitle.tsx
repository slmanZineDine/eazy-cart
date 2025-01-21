"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
// My-Components
import SectionTitle from "@/components/common/section-title";

const CartTitle = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  // ################### ZUSTAND ###################
  const cartCount = useCartStore(selectCartItems)?.length;

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title={translations.cartTitle}
          mainWord={translations.cartTitleHighlight}
        />
        <p className="text-muted-foreground">
          {translations.cartCountStart}&nbsp;
          <span className="font-bold text-primary">
            {cartCount} {translations.products}
          </span>{" "}
          {translations.cartCountEnd}
        </p>
      </div>
    </section>
  );
};

export default CartTitle;
