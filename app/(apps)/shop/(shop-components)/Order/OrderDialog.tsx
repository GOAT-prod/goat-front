import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { cn } from "@/utils/helpers/cn";

interface OrderDialogProps {
  className?: string;
}

export const OrderDialog = ({ className }: OrderDialogProps) => {
  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger>
          <Button>Оформить заказ</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
