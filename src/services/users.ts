// API
import { fetchData } from "./api";
// Data
import { endpoints } from "@/constants/endpoints";
// Types

import type { TUser } from "@/types/user";

// =================== Users ===================
export async function getAllUsers() {
  const URL = endpoints.users.root;

  const products = await fetchData<TUser[]>(URL);

  return products;
}
