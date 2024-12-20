"use client";
import { UserCard } from "./DBUserCard";
import { UnifiedPanel } from "@/components/UnifiedPannel";
import { useGetUsersQuery } from "../../../(services)/requests/getUsers";
import { RegisterDialog } from "./DBCreateUserDialog";
import { Skeleton } from "@/ui/skeleton";
import { useMemo } from "react";
import { UserStatusDB } from "../../../(services)/types/types";

export const UsersPanel = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  const activeUsers = useMemo(() => {
    return users?.data.filter((user) => user.status !== UserStatusDB.Deleted);
  }, [users]);

  if (isLoading) {
    return (
      <UnifiedPanel
        title="Пользователи сервиса"
        items={Array(6).fill({})}
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <UnifiedPanel
      title="Пользователи сервиса"
      items={activeUsers || []}
      renderItem={(item) => <UserCard item={item} />}
      actionButton={<RegisterDialog />}
    />
  );
};
