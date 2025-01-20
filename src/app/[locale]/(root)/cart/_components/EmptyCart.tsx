import CustomLink from "@/components/common/custom-link";
import { buttonVariants } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import { MoveLeft } from "lucide-react";
import Image from "next/image";

const EmptyCart = () => {
  return (
    <section className="section-padding">
      <div className="flex-center container flex-col text-center">
        <div>
          <Image
            height={350}
            width={350}
            src="/assets/svg/emptyCart.svg"
            alt="Empty-cart"
          />
        </div>
        <p className="text-4xl font-bold text-secondary">
          Shopping Cart Is <span className="text-primary">Empty</span>
        </p>
        <p className="mb-6 mt-2 text-muted-foreground">
          Go to shop and add to cart products you&apos;d like to buy.
        </p>
        <CustomLink
          className={`${buttonVariants({
            size: "default",
            variant: "default",
          })} ms-2`}
          href={`/${paths.shop}`}
          prefetch={false}
        >
          <MoveLeft />
          Return To Shop
        </CustomLink>
      </div>
    </section>
  );
};

export default EmptyCart;
