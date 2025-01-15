// Next
import Image from "next/image";
// Third-Party =====> shadcn-ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// My-Components
import StarsRating from "@/components/common/rating/StarsRating";
// Data
import { CURRENCY } from "@/constants";
// Types
import type { TProduct } from "@/types/product";

type TSpecialProductProps = {
  product: TProduct;
};

const SpecialProduct = ({ product }: TSpecialProductProps) => {
  return (
    <Card className="flex -skew-y-2 flex-row">
      <CardHeader>
        <div className="relative mx-auto mb-2 h-32 w-20 rotate-2 xs:h-40 xs:w-28">
          <Image
            fill
            src={product.image}
            alt={product.title}
            className="bg-slate-300"
          />
        </div>
      </CardHeader>
      <CardContent className="flex rotate-2 flex-col justify-center">
        <CardTitle className="text-base font-bold leading-tight text-secondary xs:text-lg">
          {product.title}
        </CardTitle>
        <div className="mt-4 flex items-center gap-4">
          <StarsRating rating={product.rating.rate} />
          <span className="text-secondary">({product.rating.rate})</span>
        </div>
        <span className="mt-4 text-xl font-bold text-secondary">
          {CURRENCY}
          {product.price}
        </span>
      </CardContent>
    </Card>
  );
};

export default SpecialProduct;
