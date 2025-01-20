import { create } from "zustand";
import { UserDB } from "../types/types";

interface UserStore {
  selectedShopUser: UserDB | null;
  selectedFactoryUser: UserDB | null;
  selectUser: (user: UserDB) => void;
}

export const useUserStore = create<UserStore>((set) => {
  const isClient = typeof window !== "undefined";

  // const savedShopUser = isClient
  //   ? localStorage.getItem("selectedShopUser")
  //   : null;
  // const savedFactoryUser = isClient
  //   ? localStorage.getItem("selectedFactoryUser")
  //   : null;

  const initialState: UserStore = {
    selectedShopUser: JSON.parse(
      '{"id":21,"username":"shop-user@gmai.com","password":"P@ssw0rd2024!","role":"shop","clientId":23,"name":"Puma Shop Krasnodar","address":" ул. Красная, 75,   г. Краснодар,   Россия","inn":"125125453","status":"Approved"}'
    ),
    selectedFactoryUser: JSON.parse(
      '{"id":11,"username":"johndoe5@gmail.com","password":"P@ssw0rd2024!","role":"factory","clientId":13,"name":"NIKE FACTORY","address":"124","inn":"124","status":"Approved"}'
    ),
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
