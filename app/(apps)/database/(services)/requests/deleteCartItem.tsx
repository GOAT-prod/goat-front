import { dbapi } from "@/utils/api/dbinstance";
import { queryClient } from "@/utils/api/query-client";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const deleteCartItem = async (cartItemId: number) => {
  await dbapi.delete(`cart/item/${cartItemId}`);
};

export const useDeleteCartItem = (
  userId: number,
  options?: UseMutationOptions<void, Error, number>
) => {
  return useMutation<void, Error, number>({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
    ...options,
  });
};
