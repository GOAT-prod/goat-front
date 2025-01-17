import { dbapi } from "@/utils/api/dbinstance";
import { CartDB } from "../types/types";
import { useQuery } from "@tanstack/react-query";

export const getCart = (userId: number) => dbapi.get<CartDB>(`cart/${userId}`);

export const useGetCartQuery = (userId: number) => {
  return useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getCart(userId),
  });
};
