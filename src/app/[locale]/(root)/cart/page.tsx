// My-Components

import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import CartView from "./_components/CartView";

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
