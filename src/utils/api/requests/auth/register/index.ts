import { useTokenStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import { api } from "@/utils/api/instance";
import * as decode from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface RegisterCredentials {
  address: string;
  inn: string;
  name: string;
  password: string;
  role: string;
  username: string;
}

const register = async (
  credentials: RegisterCredentials
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "auth/register",
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

export const useRegister = () => {
  const { setAccessToken } = useTokenStore();
  const { setUserInfo } = useUserStore();

  return useMutation<AuthResponse, AxiosError, RegisterCredentials>({
    mutationFn: register,
    onSuccess: (data) => {
      console.log("reg-data", data);
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
