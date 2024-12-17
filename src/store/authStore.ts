import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TokenState {
  access_token?: string | null;
  userInfo: DecodedToken | null;
  setAccessToken: (token: string | null) => void;
  clearAccessToken: () => void;
}

export const useTokenStore = create<TokenState>((set) => ({
  access_token: null,
  userInfo: null,
  setAccessToken: (token) => {
    set({ access_token: token });

    if (token) {
      localStorage.setItem("access_token", token);
    }

    //   if (token) {
    //     try {
    //       const decoded: DecodedToken = jwtDecode(token);
    //       set({ userInfo: decoded });
    //     } catch (error) {
    //       console.error("Ошибка декодирования JWT:", error);
    //     }
    //   } else {
    //     set({ userInfo: null });
    //   }
  },
  clearAccessToken: () => {
    set({ access_token: null, userInfo: null });
  },
}));
