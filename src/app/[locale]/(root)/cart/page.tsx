// Next
import { Metadata } from "next";
// My-Components
import CartView from "./_components/CartView";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Data
import { Locale } from "@/i18n.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const { cart } = await getDictionary(locale);

  return { title: cart.cartTitle };
}

const CartPage = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { cart } = await getDictionary(locale);

  return (
    <>
      <CartView translations={cart} />
    </>
  );
};

export default CartPage;
