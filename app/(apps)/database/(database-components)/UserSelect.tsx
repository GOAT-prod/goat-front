import { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useGetUsersQuery } from "../(services)/requests/getUsers";
import { Loader } from "@/ui/loader";
import { useUserStore } from "../(services)/store/userStore";

export const UserSelect = ({ status }: { status: string }) => {
  const { data: users, isLoading } = useGetUsersQuery();
  const selectUser = useUserStore((state) => state.selectUser);

  const filterUsers = useMemo(() => {
    return users?.data
      .filter((user) => user.role === status)
      .filter((user) => user.status !== "Deleted");
  }, [users, status]);

  const handleUserSelect = (userId: string) => {
    const selectedUser = users?.data.find((user) => user.id === Number(userId));

    if (selectedUser) {
      selectUser(selectedUser); // Сохраняем выбранного пользователя в Zustand
    }
  };

  if (isLoading) {
    return <Loader className="w-6 h-6" />;
  }

  if (status === "admin") {
    return null;
  }

  return (
    <Select onValueChange={handleUserSelect}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Выберите пользователя" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Пользователи</SelectLabel>
          {filterUsers?.map((user) => (
            <SelectItem key={user.id} value={String(user.id)}>
              {user.name} ({user.role})
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
