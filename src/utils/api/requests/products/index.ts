import { api, headers } from "@/utils/api/instance";

export const getProducts = () => api.get<Product[]>("products", { headers });

// export async function getProducts(): Promise<Product[]> {
//   const res = await fetch(`${BASE}/products`, headers);
//   return res.json();
// }

// export async function getProduct(id: number): Promise<Product> {
//   const res = await fetch(`${BASE}/product/${id}`, headers);
//   return res.json();
// }
