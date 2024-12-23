import { dbapi } from "@/utils/api/dbinstance";
import { OrderStatusDB } from "../../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { queryClient } from "@/utils/api/query-client";

const updateOrderStatus = async (orderId: string, status: OrderStatusDB) => {
  await dbapi.put(`order/${orderId}/status/${status}`);
};

export const useUpdateOrderStatus = (
  options?: UseMutationOptions<
    void,
    Error,
    { orderId: string; status: OrderStatusDB }
  >
) => {
  return useMutation<void, Error, { orderId: string; status: OrderStatusDB }>({
    mutationFn: ({ orderId, status }) => updateOrderStatus(orderId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    ...options,
  });
};
