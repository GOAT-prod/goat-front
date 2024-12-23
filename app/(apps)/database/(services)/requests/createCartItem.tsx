import { dbapi } from "@/utils/api/dbinstance";
import { CartItemDB } from "../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { queryClient } from "@/utils/api/query-client";

interface CartRequest {
  id: number;
  cartId: number;
  productItemId: number;
  productName: string;
  price: number;
  color: string;
  size: number;
  selectCount: number;
  isSelected: boolean;
}

const createCartItem = async (payload: CartRequest) => {
  const response = await dbapi.post<CartRequest>("cart/item", payload);
  return response.data;
};

export const useCreateCartItem = (
  userId: number,
  options?: UseMutationOptions<CartRequest, Error, CartItemDB>
) => {
  return useMutation<CartRequest, Error, CartRequest>({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
    mutationFn: createCartItem,
    ...options,
  });
};
