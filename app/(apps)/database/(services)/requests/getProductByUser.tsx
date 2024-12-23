import { dbapi } from "@/utils/api/dbinstance";
import { ProductDB } from "../types/types";
import { useQuery } from "@tanstack/react-query";

export const getProductByUser = (userId: number) =>
  dbapi.get<ProductDB[]>(`products/${userId}`);

export const useGetProductsQuery = (userId: number) => {
  return useQuery({
    queryKey: ["products", userId],
    queryFn: () => getProductByUser(userId),
  });
};
