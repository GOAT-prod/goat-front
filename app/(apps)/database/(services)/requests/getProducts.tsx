import { dbapi } from "@/utils/api/dbinstance";
import { ProductDB } from "../types/types";
import { useQuery } from "@tanstack/react-query";

export const getProducts = () => dbapi.get<ProductDB[]>(`products`);

export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
