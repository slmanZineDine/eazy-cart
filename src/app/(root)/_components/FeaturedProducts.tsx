// My-Components
import TopSelling from "./TopSelling";
import TrendingProducts from "./TrendingProducts";
// API
import { getAllProducts } from "@/services/products";

const FeaturedProducts = async () => {
  // ################### FETCH DATA ###################
  const products = await getAllProducts();

  // ################### DATA ###################
  const topSelling = products.filter((e) => e.rating.count > 400);
  const trendingProducts = products.filter((e) => e.rating.rate > 4);
  topSelling.length = 3;
  trendingProducts.length = 3;

  return (
    <section className="section-padding">
      <div className="flex-between container flex-col gap-10 lg:flex-row">
        <TopSelling topSelling={topSelling} />
        <TrendingProducts trendingProducts={trendingProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
