import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { api } from "@/utils/api/instance";

interface LoginCredentials {
  email: string;
  password: string;
}

const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    {
      ...credentials,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.status >= 400) {
    throw new Error("Ошибка авторизации");
  }

  return response.data;
};

export const useLogin = () => {
  return useMutation<AuthResponse, AxiosError, LoginCredentials>({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Ошибка при входе в систему:", error);
    },
  });
};
