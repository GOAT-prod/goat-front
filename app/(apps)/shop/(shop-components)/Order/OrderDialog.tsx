import { Button } from "@/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { cn } from "@/utils/helpers/cn";
import { OrderItem } from "./OrderItem";
import { useMemo } from "react";
import { Span } from "next/dist/trace";

interface OrderDialogProps {
  className?: string;
  cart: Cart;
}

export const OrderDialog = ({ className, cart }: OrderDialogProps) => {
  const filterOrderedItems = useMemo(
    () => cart.items.filter((item) => item.isSelected),
    [cart.items]
  );

  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger>
          <Button>Оформить заказ</Button>
        </DialogTrigger>
        <DialogContent className="bg-white p-0 max-w-[800px]">
          <DialogHeader className="px-6 pt-6 ">
            <DialogTitle>Оформление заказа</DialogTitle>
            <DialogDescription className="text-base">
              {filterOrderedItems.length} вариантов товаров выбрано в корзине
            </DialogDescription>
          </DialogHeader>
          <div className="px-3 flex gap-6">
            <div className="flex flex-col gap-2.5 max-h-[435px] overflow-auto scrollbar flex-1">
              {filterOrderedItems.map((item) => (
                <OrderItem item={item} key={item.id} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Ваши данные:</h3>
              <div className="flex flex-col gap-4 min-w-[250px] ">
                <div className="grid w-full max-w-sm items-center gap-2">
                  <Label htmlFor="client-name">Название компании: </Label>
                  <Input
                    type="text"
                    id="client-name"
                    placeholder="Название компании"
                    value={"ОАО Addidas Армавир Екомерс"}
                    readOnly
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                  <Label htmlFor="client-address">Адрес: </Label>
                  <Input
                    type="text"
                    id="client-address"
                    placeholder="Адрес"
                    value={"ул. Синяя, 84, г. Пенза, Россия"}
                    readOnly
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                  <Label htmlFor="client-name">ИНН: </Label>
                  <Input
                    type="text"
                    id="client-inn"
                    placeholder="ИНН"
                    value={"772795337563"}
                    readOnly
                  />
                </div>
              </div>
              <Button>Редактировать данные</Button>
            </div>
          </div>
          <DialogFooter className="bg-background p-6 rounded-b-lg border-t border-border ">
            <div className="mr-auto flex gap-2 items-center  text-lg">
              <p className="font-bold">Итоговая цена: </p>
              <p className="font-medium">1270 $</p>
            </div>
            <Button type="submit" className="mr-2">
              Заказать товары
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Отмена
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
