import { useUserStore } from "../../(services)/store/userStore";
import { ProductDB } from "../../(services)/types/types";
import { useGetCartQuery } from "../../(services)/requests/getCart";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../../../@/src/components/ui/drawer";
import { Button } from "@/ui/button";
import { ProductLeftSide } from "../../../shop/[id]/(shop-items-components)/ProductLeftSide";
import { ProductRightSide } from "../../../shop/[id]/(shop-items-components)/ProductRightSide";
import { useState } from "react";

interface CatalogCardProps {
  item: ProductDB;
}

export const CatalogCardDrawer = ({ item }: CatalogCardProps) => {
  // Локальное состояние для управления Drawer
  const [isOpen, setIsOpen] = useState(false);

  // Функция для закрытия Drawer
  const handleClose = () => setIsOpen(false);
  const { selectedShopUser } = useUserStore();
  const { data: cart, isLoading } = useGetCartQuery(selectedShopUser!.id);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>Заказать</DrawerTrigger>
      <DrawerContent>
        <div className="px-6 flex justify-between gap-6 ">
          <ProductLeftSide product={item} isLoading={isLoading} />
          <ProductRightSide
            product={item}
            isLoading={isLoading}
            onClose={handleClose}
          />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Вернуться назад</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
