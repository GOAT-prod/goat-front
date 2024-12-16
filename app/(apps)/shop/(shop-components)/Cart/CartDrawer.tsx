"use client";
import { Button } from "@/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { CartItem } from "./CartItem";
import { OrderDialog } from "../Order/OrderDialog";
import { useGetCartQuery } from "@/hooks/query/useGetCartQuery";

export function CartDrawer() {
  const { data: cart, isLoading } = useGetCartQuery();

  console.log(cart?.data);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button isLoading={isLoading} size="small">
          Корзина
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col pr-4">
        <SheetHeader>
          <SheetTitle className="text-2xl">Корзина</SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto scrollbar pr-1">
          {cart?.data.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <SheetFooter>
          <div className="flex justify-between items-center w-full">
            <p className="font-medium text-xl">{cart?.data.totalAmount} $</p>
            {cart && cart?.data.items.length > 0 && (
              <OrderDialog cart={cart.data} />
            )}
            <SheetClose asChild>
              <Button variant="secondary">Закрыть</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
