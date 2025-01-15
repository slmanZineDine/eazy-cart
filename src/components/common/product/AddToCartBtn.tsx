"use client";

// Third-Party =====> shadcn-ui
import { Button } from "@/components/ui/button";
// Icons
import { ShoppingCart } from "lucide-react";
// Types
import type { TProduct } from "@/types/product";

type TAddToCartBtnProps = {
  product: TProduct;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddToCartBtn = ({ product }: TAddToCartBtnProps) => {
  return (
    <Button className="group overflow-hidden bg-[#d4eee2] text-primary hover:bg-[#d4eee2]">
      <ShoppingCart className="-translate-x-10 transition-transform duration-300 group-hover:translate-x-0" />{" "}
      Add
    </Button>
  );
};

export default AddToCartBtn;
