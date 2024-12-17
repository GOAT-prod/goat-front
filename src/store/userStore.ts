import { create } from "zustand";

interface UserState {
  userInfo: DecodedToken;
  setUserInfo: (user: DecodedToken) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: {
    exp: 0,
    role: "",
    user_id: 0,
    username: "",
  },
  setUserInfo: (user: DecodedToken) => set({ userInfo: user }),
}));
