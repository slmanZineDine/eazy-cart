// Next
import Image from "next/image";
// Third-Party =====> shadcn-ui
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// My-Components
import AddToCartBtn from "./AddToCartBtn";
import StarsRating from "../rating/StarsRating";
// Data
import { CURRENCY } from "@/constants";
// Types
import type { TProduct } from "@/types/product";
import CustomLink from "../custom-link";
import { paths } from "@/constants/paths";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

type TProdcutProps = {
  product: TProduct;
};

const Product = async ({ product }: TProdcutProps) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { common } = await getDictionary(locale);

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CustomLink
          href={`${paths.products.root}/${product.id}`}
          className="relative mx-auto mb-2 h-52 w-40"
        >
          <Image
            fill
            src={product.image}
            alt={product.title}
            className="bg-slate-300 transition-transform duration-300 hover:scale-105"
          />
        </CustomLink>
      </CardHeader>
      <CardContent>
        <CustomLink href={`${paths.products.root}/${product.id}`}>
          <CardTitle className="leading-tight text-secondary transition-colors duration-300 hover:text-primary">
            {product.title}
          </CardTitle>
        </CustomLink>
        <div className="mt-4 flex items-center gap-4">
          <StarsRating rating={product.rating.rate} />
          <span className="text-secondary underline">
            {product.rating.count} REVIEWS
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex-between mt-auto font-bold text-secondary">
        <span>
          {CURRENCY}
          {product.price}
        </span>
        <AddToCartBtn locale={locale} translations={common} product={product} />
      </CardFooter>
    </Card>
  );
};

export default Product;
