import { useQuery } from "@tanstack/react-query";
import { UserDB } from "../types/types";
import { dbapi } from "@/utils/api/dbinstance";

export const getUsers = () => dbapi.get<UserDB[]>("users");

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
