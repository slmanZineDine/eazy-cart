// Third-Party =====> motion
import * as motion from "motion/react-client";
// My-Components
import Product from "@/components/common/product";
// API
import { getAllProducts, getProductsByCategroy } from "@/services/products";
// Types
import type { TProduct } from "@/types/product";

const Products = async ({
  category,
  // page,
}: {
  category: string;
  // page: number;
}) => {
  // ################### FETCH DATA ###################
  await new Promise((resolve) => setTimeout(resolve, 3000));

  let products: TProduct[] = [];

  if (category && category !== "All")
    products = await getProductsByCategroy({ category });
  else products = await getAllProducts({ limit: 8 });

  return (
    <div className="grid grid-cols-autoFill250 gap-4">
      {products.map((product) => (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          key={product.id}
          className="h-full"
        >
          <Product product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
