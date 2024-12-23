import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { api } from "@/utils/api/instance";
import { useTokenStore } from "@/store/authStore";
import * as decode from "jwt-decode";
import { useUserStore } from "@/store/userStore";

interface LoginCredentials {
  username: string;
  password: string;
}

const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "auth/login",
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
  const { setAccessToken } = useTokenStore();
  const { setUserInfo } = useUserStore();

  return useMutation<AuthResponse, AxiosError, LoginCredentials>({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("data", data);
      localStorage.clear();
      setAccessToken(data.access_token);
      try {
        const decoded: DecodedToken = decode.jwtDecode(data.access_token);
        localStorage.setItem("user", JSON.stringify(decoded));
        setUserInfo(decoded);
      } catch (error) {
        console.error("Ошибка декодирования JWT:", error);
      }
    },
    onError: (error) => {
      console.error("Ошибка при входе в систему:", error);
    },
  });
};
