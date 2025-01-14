// My-Components
import SpecialProduct from "./SpecialProduct";
import SectionTitle from "@/components/common/sectionTitle";
// Types
import type { TProduct } from "@/types/product";

type TTopSellingProps = {
  topSelling: TProduct[];
};

const TopSelling = ({ topSelling }: TTopSellingProps) => {
  return (
    <div>
      <SectionTitle title="Top" mainWord="Selling" />
      <div className="space-y-4">
        {topSelling.map((product) => (
          <SpecialProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
