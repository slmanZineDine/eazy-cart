// My-Components
import SpecialProduct from "./SpecialProduct";
import SectionTitle from "@/components/common/section-title";
// Types
import type { TProduct } from "@/types/product";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

type TTrendingProductsProps = {
  trendingProducts: TProduct[];
};

const TrendingProducts = async ({
  trendingProducts,
}: TTrendingProductsProps) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const {
    home: { features },
  } = await getDictionary(locale);

  return (
    <div className="w-full">
      <SectionTitle
        title={features.trending}
        mainWord={features.trendingHighlighted}
      />
      <div className="space-y-4">
        {trendingProducts.map((product) => (
          <SpecialProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
