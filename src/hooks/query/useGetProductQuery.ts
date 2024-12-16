import { getProduct } from "@/utils/api/requests/products/[id]";
import { useQuery } from "@tanstack/react-query";

export const useGetProductQuery = (id: number) =>
  useQuery({
    queryKey: ["getProduct", `product/${id}`],
    queryFn: () => getProduct(id),
  });
