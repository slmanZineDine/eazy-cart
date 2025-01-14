// My-Components
import SpecialProduct from "./SpecialProduct";
import SectionTitle from "@/components/common/sectionTitle";
// Types
import type { TProduct } from "@/types/product";

type TTrendingProductsProps = {
  trendingProducts: TProduct[];
};

const TrendingProducts = ({ trendingProducts }: TTrendingProductsProps) => {
  return (
    <div>
      <SectionTitle title="Trending" mainWord="Products" />
      <div className="space-y-4">
        {trendingProducts.map((product) => (
          <SpecialProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
