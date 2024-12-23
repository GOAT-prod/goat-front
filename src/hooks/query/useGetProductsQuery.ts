import { getProducts } from "@/utils/api/requests";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(),
  });
