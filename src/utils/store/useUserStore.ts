import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "../api/requests/user";

interface UserState {
  userInfo: IUser | null;
  setUserInfo: (user: IUser) => void;
  clearUserInfo: () => void;
}

// Zustand Store
export const useUserStore = create<UserState>()(
  devtools((set) => ({
    userInfo: null,
    setUserInfo: (user) => set({ userInfo: user }),
    clearUserInfo: () => set({ userInfo: null }),
  }))
);
