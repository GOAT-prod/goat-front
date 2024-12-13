import { api, headers } from "@/utils/api/instance";

export const getProduct = (id: number) =>
  api.get<Product>(`products/${id}`, { headers });
