// My-Components
import Product from "@/components/common/product";
// API
import { getAllProducts, getProductsByCategroy } from "@/services/products";

const Products = async ({
  category,
  // page,
}: {
  category: string;
  // page: number;
}) => {
  // ################### FETCH DATA ###################
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  let products = [];
  if (category && category !== "All")
    products = await getProductsByCategroy({ category });
  else products = await getAllProducts({ limit: 8 });

  return (
    <div className="grid grid-cols-autoFill250 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
