import { create } from "zustand";
import { UserDB } from "../types/types";

interface UserStore {
  selectedShopUser: UserDB | null;
  selectedFactoryUser: UserDB | null;
  selectUser: (user: UserDB) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  selectedShopUser: null,
  selectedFactoryUser: null,
  selectUser: (user: UserDB) => {
    set((state) => ({
      selectedShopUser: user.role === "shop" ? user : state.selectedShopUser,
      selectedFactoryUser:
        user.role === "factory" ? user : state.selectedFactoryUser,
    }));
  },
}));
