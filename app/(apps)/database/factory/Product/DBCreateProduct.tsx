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
import { CreateProductForm } from "../../../factory/(factory-components)/Form/CreateProductForm";
import { cn } from "@/utils/helpers/cn";
import { Button } from "@/ui/button";

export const DBCreateProduct = () => {
  return (
    <div className={cn("")}>
      <Dialog>
        <DialogTrigger className="text-sm rounded-md border border-border h-8 px-1.5 font-medium shadow-sm hover:bg-secondary-hover">
          Создать товар
        </DialogTrigger>
        <DialogContent className="bg-white p-0 max-w-[1246px]">
          <DialogHeader className="px-6 pt-6 ">
            <DialogTitle>Создание товара</DialogTitle>
            <DialogDescription className="text-base">
              Введите нужные параметры товара в форму создания
            </DialogDescription>
          </DialogHeader>
          <CreateProductForm />
          <DialogFooter className="bg-background p-6 rounded-b-lg border-t border-border ">
            <Button type="submit" className="mr-2">
              Создать товар
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
