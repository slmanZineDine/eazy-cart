// React
import { Suspense } from "react";
// My-Components
import Products from "./Products";
import Categories from "./Categories";
import SectionTitle from "@/components/common/section-title";
import SkeletonCard from "@/components/common/loading/SkeletonCard";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import getDictionary from "@/utils/translation";

const ShopByCategory = async ({
  category,
  // page,
}: {
  category: string;
  // page: number;
}) => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { home } = await getDictionary(locale);

  return (
    <section id="shop" className="section-padding min700:scroll-m-headerHeight">
      <div className="container">
        <SectionTitle
          title={home.category.title}
          mainWord={home.category.titleHighlighted}
        />
        <Categories translations={home.category} />
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
