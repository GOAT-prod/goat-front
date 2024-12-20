import { dbapi } from "@/utils/api/dbinstance";
import { CartItemDB } from "../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const updateCartItem = async (cartItem: CartItemDB) => {
  await dbapi.put(`cart/item`, cartItem);
};

// Хук для обновления товара
export const useUpdateCartItem = (
  options?: UseMutationOptions<void, Error, CartItemDB>
) => {
  return useMutation<void, Error, CartItemDB>({
    mutationFn: updateCartItem,
    ...options,
  });
};
