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
import { cn } from "@/utils/helpers/cn";
import { Label } from "@/ui/label";
import { CreateProductForm } from "./Form/CreateProductForm";

interface CreateProductDialogProps {
  className?: string;
}

export const CreateProductDialog = ({
  className,
}: CreateProductDialogProps) => {
  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger className="text-sm rounded-md border border-border h-8 px-1.5 font-medium shadow-sm hover:bg-secondary-hover">
          Создать товар
        </DialogTrigger>
        <DialogContent className="bg-white p-0 max-w-[800px]">
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
