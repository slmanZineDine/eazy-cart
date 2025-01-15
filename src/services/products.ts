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
