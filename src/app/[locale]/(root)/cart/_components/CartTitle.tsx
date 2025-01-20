"use client";

// Third-Party =====> zustand
import { selectCartItems, useCartStore } from "@/zustand/cartStore";
// My-Components
import SectionTitle from "@/components/common/sectionTitle";

const CartTitle = () => {
  // ################### ZUSTAND ###################
  const cartCount = useCartStore(selectCartItems)?.length;

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title="Shopping"
          mainWord="Cart"
          //   className="!mb-10 text-center"
        />
        <p className="text-muted-foreground">
          There are{" "}
          <span className="font-bold text-primary">{cartCount} products</span>{" "}
          in your cart
        </p>
      </div>
    </section>
  );
};

export default CartTitle;
