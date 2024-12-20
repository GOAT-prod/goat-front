import { dbapi } from "@/utils/api/dbinstance";
import { OrderDB } from "../../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { queryClient } from "@/utils/api/query-client";

const createOrder = async (userId: number, order: Partial<OrderDB>) => {
  const response = await dbapi.post<OrderDB>(`orders/${userId}`, order);
  return response.data;
};

export const useCreateOrder = (
  userId: number,
  options?: UseMutationOptions<OrderDB, Error, Partial<OrderDB>>
) => {
  return useMutation<OrderDB, Error, Partial<OrderDB>>({
    mutationFn: (order) => createOrder(userId, order),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders", userId] });
    },
    ...options,
  });
};
