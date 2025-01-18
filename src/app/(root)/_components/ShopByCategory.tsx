// React
import { Suspense } from "react";
// My-Components
import Products from "./Products";
import Categories from "./Categories";
import SectionTitle from "@/components/common/sectionTitle";
import SkeletonCard from "@/components/common/loading/SkeletonCard";

const ShopByCategory = ({
  category,
  // page,
}: {
  category: string;
  // page: number;
}) => {
  return (
    <section id="shop" className="section-padding min700:scroll-m-headerHeight">
      <div className="container">
        <SectionTitle title="Shop By" mainWord="Category" />
        <Categories />
        <Suspense
          key={crypto.randomUUID()}
          fallback={
            <div className="grid grid-cols-autoFill250 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          }
        >
          <Products
            category={category}
            // page={page}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default ShopByCategory;
