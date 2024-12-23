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
import { cn } from "@/utils/helpers/cn";
import { Button } from "@/ui/button";
import { CreateProductForm } from "./DBCreateProductForm";
import { useState } from "react";

export const DBCreateProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn("")}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="text-sm rounded-md border border-border h-8 px-1.5 font-medium shadow-sm hover:bg-secondary-hover ">
          Создать товар
        </DialogTrigger>
        <DialogContent className="bg-white p-0 min-w-[1300px]">
          <DialogHeader className="px-6 pt-6 ">
            <DialogTitle>Создание товара</DialogTitle>
            <DialogDescription className="text-base">
              Введите нужные параметры товара в форму создания
            </DialogDescription>
          </DialogHeader>
          <CreateProductForm onClose={handleClose} />
          <DialogFooter className="bg-background p-6 rounded-b-lg border-t border-border max-w-[1298px]">
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
