import { dbapi } from "@/utils/api/dbinstance";
import { ProductDB } from "../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { queryClient } from "@/utils/api/query-client";

export const deleteProduct = async (product: ProductDB): Promise<void> => {
  const updatedProduct = { ...product, status: "Deleted" };
  await dbapi.put(`product`, updatedProduct);
};

export const useDeleteProduct = (
  userId: number,
  options?: UseMutationOptions<void, Error, ProductDB>
) => {
  return useMutation<void, Error, ProductDB>({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", userId] });
    },
    ...options,
  });
};
