// =================== BASE URL ===================
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

// =================== ROOTS ===================
const ROOTS = {
  // =================== Products ===================
  PRODUCTS: `products`,
};

// =================== ENDPOINTS ===================
export const endpoints = {
  // =================== Products ===================
  products: {
    root: ROOTS.PRODUCTS,
    byCategory: `${ROOTS.PRODUCTS}/category`,
  },
};
