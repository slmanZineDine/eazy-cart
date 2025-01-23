"use client";

// React
import { useEffect, useState } from "react";
// Third-Party =====> shadcn-ui
import { Button } from "@/components/ui/button";
// Third-Party =====> zustand
import {
  useCartStore,
  addToCartAction,
  removeProductAction,
} from "@/zustand/cartStore";
// Icons
import { Minus, Plus, ShoppingCart } from "lucide-react";
// Types
import type { TProduct } from "@/types/product";
import { Languages } from "@/constants/enums";

type TAddToCartBtnProps = {
  product: TProduct;
  className?: string;
  translations: { [key: string]: string };
  locale: string;
};

const AddToCartBtn = ({
  product,
  locale,
  translations,
  className = "",
}: TAddToCartBtnProps) => {
  // ################### ZUSTAND ###################
  const addToCart = useCartStore(addToCartAction);
  const removeProduct = useCartStore(removeProductAction);

  // ################### REACT HOOKS ###################
  const [quantity, setQuantity] = useState(0);

  // ################### HANDLER ###################
  const handleAddToCart = () => {
    const { id, title, image, category, price } = product;

    const data = {
      id,
      title,
      category,
      image,
      basePrice: price,
    };
    addToCart(data);
    setQuantity(quantity + 1);
  };

  // ################### SIDE EFFECT ###################
  useEffect(() => {
    const currentProduct = useCartStore
      .getState()
      .products.find((prod) => prod.id === product.id);

    if (currentProduct) {
      setQuantity(currentProduct.quantity!);
    }
  }, [product.id]);

  if (quantity > 0) {
    return (
      <div
        className={`flex-center border border-muted-foreground bg-background ${className}`}
      >
        <div
          className="flex-center shrink-0 cursor-pointer p-2 hover:bg-muted"
          onClick={() => {
            removeProduct(product.id);
            setQuantity(quantity - 1);
          }}
        >
          <Minus size={20} />
        </div>

        <span className="flex-center h-6 w-12 shrink-0 border-x border-muted-foreground">
          {quantity}
        </span>

        <div
          className="flex-center shrink-0 cursor-pointer p-2 hover:bg-muted"
          onClick={handleAddToCart}
        >
          <Plus size={20} />
        </div>
      </div>
    );
  } else {
    return (
      <Button
        className={`group overflow-hidden bg-[#d4eee2] text-primary hover:bg-[#d4eee2] ${className}`}
        onClick={handleAddToCart}
      >
        <ShoppingCart
          className={`${locale === Languages.ARABIC ? "translate-x-10 -scale-x-100" : "-translate-x-10"} transition-transform duration-300 group-hover:translate-x-0`}
        />
        {translations.add}
      </Button>
    );
  }
};

export default AddToCartBtn;
