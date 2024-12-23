import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/utils/api/requests/cart";

export const useGetCartQuery = () =>
  useQuery({
    queryKey: ["getCart"],
    queryFn: () => getCart(),
  });
