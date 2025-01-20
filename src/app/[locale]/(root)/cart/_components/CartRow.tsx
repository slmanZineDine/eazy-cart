import CustomLink from "@/components/common/custom-link";
import { Button } from "@/components/ui/button";
import { CURRENCY } from "@/constants";
import { paths } from "@/constants/paths";
import { TCartProduct } from "@/types/product";
import { useCartStore, removeFormCartAction } from "@/zustand/cartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

type TCartRowProps = TCartProduct;

const CartRow = (props: TCartRowProps) => {
  // ################### NEXT ###################
  const { locale } = useParams();

  // ################### ZUSTAND ###################
  const removeFormCart = useCartStore(removeFormCartAction);

  return (
    <tr className="odd:border-y odd:border-y-secondary even:bg-muted">
      <td className="p-4">
        <div className="flex items-start gap-2">
          <div className="relative size-24 shrink-0 border border-secondary p-2">
            <Image
              width={100}
              height={100}
              className="size-full"
              src={props.image}
              alt={props.title}
            />
          </div>
          <div>
            <h3 className="text-start text-sm font-bold text-secondary">
              {props.title}
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-secondary">Categroy:</span>
              <CustomLink
                href={`/${locale}/?category=${props.category}${paths.shop}`}
                className="text-muted-foreground underline transition-colors duration-300 hover:text-primary"
              >
                {props.category}
              </CustomLink>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap p-4">
        {CURRENCY} {props.basePrice}
      </td>
      <td className="p-4">{props.quantity}</td>
      <td className="whitespace-nowrap p-4">
        {CURRENCY} {props.basePrice * props.quantity!}
      </td>
      <td className="p-4">
        <Button
          variant="outline"
          size="icon"
          className="hover:bg-muted"
          onClick={() => removeFormCart(props.id)}
        >
          <Trash2 color="red" />
        </Button>
      </td>
    </tr>
  );
};

export default CartRow;
