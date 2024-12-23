import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { Button } from "@/ui/button";
import { UserDB, UserStatusDB } from "../../../(services)/types/types";
import { useUpdateUserStatus } from "../../../(services)/requests/updateUsers";
import { queryClient } from "@/utils/api/query-client";
import { Check, Trash } from "lucide-react";
import { AlertUser } from "./DBAlertUser";

interface UserCardProps {
  item: UserDB;
}

export const UserCard = ({ item }: UserCardProps) => {
  const { mutate } = useUpdateUserStatus({
    onSuccess: () => {
      console.log("Статус пользователя успешно обновлен");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Ошибка обновления статуса пользователя:", error.message);
    },
  });

  const handleUpdateStatus = (userId: number, statusId: string) => {
    mutate({ userId, statusId });
  };

  return (
    <CardWrapper>
      <div className="text-lg font-medium">
        <p>{item.username}</p>
      </div>
      <InfoRow label="Роль:" value={item.role} />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 text-sm">
          <InfoRow label="Название организации:" value={item.name} />
          <InfoRow label="Адрес:" value={item.address} />
          <InfoRow label="ИНН:" value={item.inn} />
        </div>
        <div className="flex gap-2">
          {item.status === UserStatusDB.WaitingApprove && (
            <Button
              variant="ghost"
              className="bg-[#dcf3e6] border-[#14AE5C] border-2"
              size="icon"
              onClick={() => handleUpdateStatus(item.id, UserStatusDB.Approved)}
            >
              <Check />
            </Button>
          )}
          <AlertUser user={item} />
        </div>
      </div>
    </CardWrapper>
  );
};
