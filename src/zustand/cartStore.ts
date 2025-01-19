import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TCartProduct = {
  id: number;
  title: string;
  image: string;
  basePrice: number;
  quantity?: number;
};

interface TCart {
  products: TCartProduct[];
  addToCart: (product: TCartProduct) => void;
  removeProduct: (id: number) => void;
  //   removeFormCart: (id: string) => void;
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
          // const newProducts = state.products.map((prod) =>
          //   prod.id === id ? { ...prod, quantity: prod.quantity! - 1 } : prod,
          // );
          // return { products: newProducts };
        }),
    }),
    {
      name: "cartProducts",
    },
  ),
);

export const selectCartItems = (state: TCart) => state.products;
export const addToCartAction = (state: TCart) => state.addToCart;
export const removeProductAction = (state: TCart) => state.removeProduct;
// export const removeFormCart = (state: TCart) => state.removeFormCart;
// export const clearCart = (state: TCart) => state.clearCart;

// removeItem: (id) =>
//    set((state) => {
//      const existedItems = state.items.map((ele) =>
//        ele.id === id && ele.quantity
//          ? { ...ele, quantity: ele.quantity - 1 }
//          : ele,
//      );
//      return { items: existedItems };
//    }),
//  removeFormCart: (id) =>
//    set((state) => ({
//      items: state.items.filter((item) => item.id !== id),
//    })),
//  clearCart: () => set(() => ({ items: [] })),
