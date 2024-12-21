import { create } from "zustand";
import { UserDB } from "../types/types";

interface UserStore {
  selectedShopUser: UserDB | null;
  selectedFactoryUser: UserDB | null;
  selectUser: (user: UserDB) => void;
}

export const useUserStore = create<UserStore>((set) => {
  const isClient = typeof window !== "undefined";

  const savedShopUser = isClient
    ? localStorage.getItem("selectedShopUser")
    : null;
  const savedFactoryUser = isClient
    ? localStorage.getItem("selectedFactoryUser")
    : null;

  const initialState: UserStore = {
    selectedShopUser: savedShopUser ? JSON.parse(savedShopUser) : null,
    selectedFactoryUser: savedFactoryUser ? JSON.parse(savedFactoryUser) : null,
    selectUser: (user: UserDB) => {
      set((state) => {
        const newState = {
          selectedShopUser:
            user.role === "shop" ? user : state.selectedShopUser,
          selectedFactoryUser:
            user.role === "factory" ? user : state.selectedFactoryUser,
        };

        // Проверка на клиент перед сохранением
        if (isClient) {
          if (user.role === "shop") {
            localStorage.setItem("selectedShopUser", JSON.stringify(user));
          } else if (user.role === "factory") {
            localStorage.setItem("selectedFactoryUser", JSON.stringify(user));
          }
        }

        return newState;
      });
    },
  };

  return initialState;
});
