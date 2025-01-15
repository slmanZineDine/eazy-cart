// React
import { Suspense } from "react";
// My-Components
import Products from "./Products";
import Categories from "./Categories";
import SectionTitle from "@/components/common/sectionTitle";
import SkeletonCard from "@/components/common/loading/SkeletonCard";

const ShopByCategory = ({ category }: { category: string }) => {
  console.log(category);

  return (
    <section id="shop" className="section-padding min700:scroll-m-headerHeight">
      <div className="container">
        <SectionTitle title="Shop By" mainWord="Category" />
        <Categories />
        <Suspense
          fallback={
            <div className="grid grid-cols-autoFill250 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          }
        >
          <Products category={category} />
        </Suspense>
      </div>
    </section>
  );
};

export default ShopByCategory;
