import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TCartProduct } from "@/types/product";

interface TCart {
  products: TCartProduct[];
  addToCart: (product: TCartProduct) => void;
  removeProduct: (id: number) => void;
  removeFormCart: (id: number) => void;
  //   clearCart: () => void;
}

export const useCartStore = create<TCart>()(
  persist(
    (set) => ({
      products: [],
      addToCart: (product) =>
        set(({ products }) => {
          const existProduct = products.find((prod) => prod.id === product.id);
          product.quantity = (existProduct?.quantity ?? 0) + 1;

          const newProducts = existProduct
            ? products.map((prod) => (prod.id === product.id ? product : prod))
            : [...products, product];
          return { products: newProducts };
        }),
      removeProduct: (id) =>
        set((state) => {
          const updatedProducts = state.products.reduce((newArr, prod) => {
            if (prod.id === id) {
              return prod.quantity === 1
                ? [...newArr]
                : [...newArr, { ...prod, quantity: prod.quantity! - 1 }];
            } else {
              return [...newArr, prod];
            }
          }, [] as TCartProduct[]);

          return { products: updatedProducts };
        }),
      removeFormCart: (id) =>
        set((state) => ({
          products: state.products.filter((prod) => prod.id !== id),
        })),
    }),
    {
      name: "cartProducts",
    },
  ),
);

export const selectCartItems = (state: TCart) => state.products;
export const addToCartAction = (state: TCart) => state.addToCart;
export const removeProductAction = (state: TCart) => state.removeProduct;
export const removeFormCartAction = (state: TCart) => state.removeFormCart;
// export const clearCart = (state: TCart) => state.clearCart;

//  clearCart: () => set(() => ({ items: [] })),
