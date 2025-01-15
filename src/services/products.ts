// API
import { fetchData } from "./api";
// Utils
import buildURLWithQueryParamsArray from "@/utils/common/buildURLWithQueryParamsArray";
// Data
import { endpoints } from "@/constants/endpoints";
// Types
import type { TProduct } from "@/types/product";

type TParma = {
  limit?: number;
};

// =================== Products ===================
export async function getAllProducts({ limit }: TParma = {}) {
  const URL = endpoints.products.root;

  const queryParameters = [{ key: "limit", value: limit }];
  const fullURL = buildURLWithQueryParamsArray(URL, queryParameters);

  const products = await fetchData<TProduct[]>(fullURL, {
    cache: "force-cache",
    next: {
      revalidate: 3600, // 1 hours
    },
  });

  return products;
}

// =================== Products By Category ===================
export async function getProductsByCategroy({
  category,
}: { category?: string } = {}) {
  const URL = `${endpoints.products.byCategory}/${category?.toLocaleLowerCase()}`;

  const products = await fetchData<TProduct[]>(URL, {
    cache: "force-cache",
    next: {
      revalidate: 3600, // 1 hours
    },
  });

  return products;
}
