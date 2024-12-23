import { dbapi } from "@/utils/api/dbinstance";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { z } from "zod";
import { registerSchema } from "../../admin/(components)/Users/DBCreateUserDialog";

type RegisterPayload = z.infer<typeof registerSchema>; // Ваш Zod-схема
type RegisterResponse = {
  success: boolean;
  message: string;
};

const registerUser = async (payload: RegisterPayload) => {
  const response = await dbapi.post<RegisterResponse>("user", payload);
  return response.data;
};

export const useRegisterMutation = (
  options?: UseMutationOptions<RegisterResponse, Error, RegisterPayload>
) => {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: registerUser,
    ...options,
  });
};
