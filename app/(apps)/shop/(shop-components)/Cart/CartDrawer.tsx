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

export function CartDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="small">Корзина</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col pr-4">
        <SheetHeader>
          <SheetTitle className="text-2xl">Корзина</SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto scrollbar pr-1">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <SheetFooter>
          <div className="flex justify-between items-center w-full">
            <p className="font-medium text-xl">44 950 ₽</p>
            <OrderDialog />
            <SheetClose asChild>
              <Button variant="secondary">Закрыть</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
