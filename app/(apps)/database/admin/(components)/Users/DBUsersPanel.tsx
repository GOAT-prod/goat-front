"use client";
import { UserCard } from "./DBUserCard";
import { UnifiedPanel } from "@/components/UnifiedPannel";
import {
  useGetGroupedUsersQuery,
  useGetUsersQuery,
} from "../../../(services)/requests/getUsers";
import { RegisterDialog } from "./DBCreateUserDialog";
import { Skeleton } from "@/ui/skeleton";
import { useMemo, useState } from "react";
import { UserStatusDB } from "../../../(services)/types/types";
import { GroupedUsersSwitch } from "./DBGropedUsersSwitch";
import { Title } from "@/ui/title";
import React from "react";

export const UsersPanel = () => {
  const [isGrouped, setIsGrouped] = useState(false);

  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();
  const { data: groupedUsers, isLoading: isLoadingGrouped } =
    useGetGroupedUsersQuery();

  const handleToggleGrouped = () => {
    setIsGrouped((state) => !state);
  };

  const activeUsers = useMemo(() => {
    return users?.data.filter((user) => user.status !== UserStatusDB.Deleted);
  }, [users]);

  const sortedGroupedUsers = useMemo(() => {
    if (groupedUsers?.data) {
      return groupedUsers.data.sort((a, b) => (a.role === "factory" ? -1 : 1));
    }
    return [];
  }, [groupedUsers]);

  if (isLoadingUsers || isLoadingGrouped) {
    return (
      <UnifiedPanel
        title="Пользователи сервиса"
        items={Array(6).fill({})}
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <section className="py-4 px-6 border-r border-border w-[50%] max-h-full">
      <header className="flex items-center justify-between mb-2">
        <Title
          text="Пользователи сервиса"
          size="lg"
          className="font-semibold"
          tag="h2"
        />
        <div className="flex flex-col items-center gap-2">
          <GroupedUsersSwitch
            switcher={handleToggleGrouped}
            state={isGrouped}
          />
          <RegisterDialog />
        </div>
      </header>

      <div className="flex flex-col gap-3 px-2 pb-2 overflow-auto max-h-[calc(100%-64px)] scrollbar">
        {isGrouped
          ? sortedGroupedUsers.map((group, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="font-semibold mb-2">
                  {group.role === "factory" ? "Заводы" : "Магазины"} (
                  {group.count})
                </h3>
                {group.users.map((user) => (
                  <UserCard key={user.id} item={user} />
                ))}
              </div>
            ))
          : activeUsers?.map((item, index) => (
              <React.Fragment key={index}>
                <UserCard item={item} />
              </React.Fragment>
            ))}
      </div>
    </section>
  );
};
