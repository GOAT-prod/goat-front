import { queryClient } from "@/utils/api/query-client";
import { useDeleteCart } from "../../../(services)/requests/clearCart";
import { useUpdateUserStatus } from "../../../(services)/requests/updateUsers";
import { UserDB, UserStatusDB } from "../../../(services)/types/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui/alert-dialog";
import { Button } from "@/ui/button";
import { Trash } from "lucide-react";

export function AlertUser({ user }: { user: UserDB }) {
  const { mutate } = useUpdateUserStatus({
    onSuccess: () => {
      console.log("Статус пользователя успешно обновлен");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Ошибка обновления статуса пользователя:", error.message);
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="bg-[#FDE3DE] border-[#F24822] border-2"
          size="icon"
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы точно хотите удалить пользователя?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Результат действия нельзя вернуть
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() =>
              mutate({ userId: user.id, statusId: UserStatusDB.Deleted })
            }
          >
            Потдвердить
          </AlertDialogAction>
          <AlertDialogCancel>Удалить</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
