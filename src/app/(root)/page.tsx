// My-Components
import Hero from "./_components/Hero";
import ShopByCategory from "./_components/ShopByCategory";
import FeaturedProducts from "./_components/FeaturedProducts";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const searchParam = await searchParams;
  const category = searchParam?.category || "";

  return (
    <>
      <Hero />
      <ShopByCategory category={category} />
      <FeaturedProducts />
    </>
  );
}
