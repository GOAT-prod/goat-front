import { useQuery } from "@tanstack/react-query";
import { GroupedUsersDB, UserDB } from "../types/types";
import { dbapi } from "@/utils/api/dbinstance";

export const getUsers = () => {
  return dbapi.get<UserDB[]>(`users`);
};

export const getGroupedUsers = () => {
  return dbapi.get<GroupedUsersDB[]>(`users/groups`);
};

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useGetGroupedUsersQuery = () => {
  return useQuery({
    queryKey: ["users", "grouped"],
    queryFn: getGroupedUsers,
  });
};
