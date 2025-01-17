import { dbapi } from "@/utils/api/dbinstance";
import { ProductDB } from "../types/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const updateProduct = async (product: ProductDB): Promise<void> => {
  await dbapi.put(`product`, product);
};

export const useUpdateProduct = (
  options?: UseMutationOptions<void, Error, ProductDB>
) => {
  return useMutation<void, Error, ProductDB>({
    mutationFn: updateProduct,
    ...options,
  });
};
