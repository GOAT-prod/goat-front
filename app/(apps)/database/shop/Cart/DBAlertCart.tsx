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
import { UserDB } from "../../(services)/types/types";
import { useDeleteCart } from "../../(services)/requests/clearCart";

export function AlertCart({ user }: { user: UserDB }) {
  const { mutate: deleteCart } = useDeleteCart(user.id);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"}>
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы точно хотите очистить корзину?</AlertDialogTitle>
          <AlertDialogDescription>
            Результат действия нельзя вернуть
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => deleteCart(user.id)}>
            Потдвердить
          </AlertDialogAction>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
