// React
import { Suspense } from "react";
// My-Components
import Products from "./Products";
import Categories from "./Categories";
import SectionTitle from "@/components/common/sectionTitle";
import SkeletonCard from "@/components/common/loading/SkeletonCard";

const ShopByCategory = () => {
  return (
    <section className="section-padding">
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
          <Products />
        </Suspense>
      </div>
    </section>
  );
};

export default ShopByCategory;
