import { dbapi } from "@/utils/api/dbinstance";
import { queryClient } from "@/utils/api/query-client";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const deleteCart = async (userId: number) => {
  await dbapi.delete(`cart/clear/${userId}`);
};

export const useDeleteCart = (
  userId: number,
  options?: UseMutationOptions<void, Error, number>
) => {
  return useMutation<void, Error, number>({
    mutationFn: deleteCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
    ...options,
  });
};
