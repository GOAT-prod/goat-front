import { dbapi } from "@/utils/api/dbinstance";
import { OrderDB } from "../../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { queryClient } from "@/utils/api/query-client";

const createOrder = async (userId: number) => {
  await dbapi.post<OrderDB>(`order/${userId}`);
};

export const useCreateOrder = (
  userId: number,
  options?: UseMutationOptions<void, Error, number>
) => {
  return useMutation<void, Error, number>({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
      queryClient.invalidateQueries({ queryKey: ["orders", userId] });
    },
    ...options,
  });
};
