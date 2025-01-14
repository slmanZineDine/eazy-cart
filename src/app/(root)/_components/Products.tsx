// My-Components
import Product from "@/components/common/product";
// API
import { getAllProducts } from "@/services/products";

const Products = async () => {
  // ################### FETCH DATA ###################
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const products = await getAllProducts({ limit: 4 });

  return (
    <div className="grid grid-cols-autoFill250 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
