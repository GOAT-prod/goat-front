import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/ui/button";
import { CircleCheck, CircleX, Copy, Package, Truck } from "lucide-react";
import { OrderDB, OrderStatusDB } from "../../../(services)/types/types";
import { format } from "date-fns";

interface OrderCardProps {
  item: OrderDB;
}
type StatusStyle = {
  label: string;
  styles: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const STATUS_STYLES: Record<OrderStatusDB, StatusStyle> = {
  [OrderStatusDB.Pending]: {
    label: "Собирается",
    styles: "bg-[#F5FBFF] border-[#BDE3FF]",
    Icon: Package,
  },
  [OrderStatusDB.Delivering]: {
    label: "В пути",
    styles: "bg-[#FFF8F0] border-[#FCD19C]",
    Icon: Truck,
  },
  [OrderStatusDB.Cancelled]: {
    label: "Отменен",
    styles: "bg-[#FDE3DE] border-[#F24822]",
    Icon: CircleX,
  },
  [OrderStatusDB.Delivered]: {
    label: "Доставлен",
    styles: "bg-[#DCF3E6] border-[#14AE5C]",
    Icon: CircleCheck,
  },
  // Если нужно учесть статус Deleted
  [OrderStatusDB.Deleted]: {
    label: "Удален",
    styles: "bg-gray-200 border-gray-400",
    Icon: CircleX,
  },
};

export const OrderCard = ({ item }: OrderCardProps) => {
  const { id, createDate, totalWeight, totalPrice, status } = item;
  const formattedDate = format(new Date(createDate), "dd MMMM yyyy");
  const statusData = STATUS_STYLES[status];

  return (
    <CardWrapper>
      <div className="flex flex-col gap-3 flex-1">
        <div className="text-base text-[#8F8F8F] flex gap-2 items-center">
          <p>От {formattedDate}</p>•<p>{id}</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigator.clipboard.writeText(id)}
          >
            <Copy size={18} />
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col text-sm">
          <InfoRow label="Вес:" value={`${totalWeight} кг`} />
          <InfoRow label="Цена:" value={`${totalPrice} $`} />
        </div>

        <StatusBadge
          label={statusData.label}
          Icon={statusData.Icon}
          className={statusData.styles}
        />
      </div>
    </CardWrapper>
  );
};
