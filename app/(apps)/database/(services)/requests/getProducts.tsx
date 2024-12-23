import { dbapi } from "@/utils/api/dbinstance";
import { ProductDB } from "../types/types";
import { useQuery } from "@tanstack/react-query";

export const getProducts = (isPopular: boolean) => {
  const url = isPopular ? "products?byTopSell=true" : "products";
  return dbapi.get<ProductDB[]>(url);
};

export const useGetProductsQuery = (isPopular: boolean) => {
  return useQuery({
    queryKey: ["products", isPopular],
    queryFn: () => getProducts(isPopular),
  });
};
