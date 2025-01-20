// My-Components
import SpecialProduct from "./SpecialProduct";
import SectionTitle from "@/components/common/section-title";
// Types
import type { TProduct } from "@/types/product";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

type TTopSellingProps = {
  topSelling: TProduct[];
};

const TopSelling = async ({ topSelling }: TTopSellingProps) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const {
    home: { features },
  } = await getDictionary(locale);

  return (
    <div className="w-full">
      <SectionTitle title={features.top} mainWord={features.topHighlighted} />
      <div className="space-y-4">
        {topSelling.map((product) => (
          <SpecialProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
