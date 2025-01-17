import { dbapi } from "@/utils/api/dbinstance";
import { productSchema } from "@/utils/constants/productSchema";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { z } from "zod";

type AddProductPayload = z.infer<typeof productSchema>;
type ProductResponse = {
  success: boolean;
  message: string;
};

const registerUser = async (payload: AddProductPayload) => {
  const response = await dbapi.post<ProductResponse>("product", payload);
  return response.data;
};

export const useCreateProduct = (
  options?: UseMutationOptions<ProductResponse, Error, AddProductPayload>
) => {
  return useMutation<ProductResponse, Error, AddProductPayload>({
    mutationFn: registerUser,
    ...options,
  });
};
