import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/ui/button";
import {
  CircleCheck,
  CircleX,
  Copy,
  Package,
  PackageCheck,
  Trash,
  Truck,
} from "lucide-react";
import {
  OrderDB,
  OrderStatusDB,
  OrderTypeDB,
} from "../../../(services)/types/types";
import { format } from "date-fns";
import { useUpdateOrderStatus } from "../../../(services)/requests/order/updateOrderStatus";

interface OrderCardProps {
  item: OrderDB;
  isAdmin?: boolean;
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

const TYPE_STYLE: Record<OrderTypeDB, StatusStyle> = {
  [OrderTypeDB.Order]: {
    label: "Заказ",
    styles: "bg-[#f5f2ff] border-[#aa99ec]",
    Icon: PackageCheck,
  },
  [OrderTypeDB.Supply]: {
    label: "Поставка",
    styles: "bg-[#ffd3a4] border-[#ffba1a]",
    Icon: Truck,
  },
};

export const OrderCard = ({ item, isAdmin }: OrderCardProps) => {
  const { id, createDate, totalWeight, totalPrice, status, type } = item;
  const formattedDate = format(new Date(createDate), "dd MMMM yyyy");
  const statusData = STATUS_STYLES[status];
  const typeData = TYPE_STYLE[type];

  const { mutate } = useUpdateOrderStatus();

  const handleDeleteOrder = () => {
    mutate({ orderId: id, status: OrderStatusDB.Deleted });
  };

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

      {isAdmin && (
        <div className="flex gap-2 flex-col">
          <InfoRow label="Username пользователя:" value={item.username} />
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col text-sm">
          <InfoRow label="Вес:" value={`${totalWeight} кг`} />
          {type === OrderTypeDB.Order && (
            <InfoRow label="Цена:" value={`${totalPrice} $`} />
          )}
        </div>

        <div className="flex gap-2">
          {isAdmin && (
            <StatusBadge
              label={typeData.label}
              Icon={typeData.Icon}
              className={typeData.styles}
            />
          )}
          <StatusBadge
            label={statusData.label}
            Icon={statusData.Icon}
            className={statusData.styles}
          />
          {isAdmin && (
            <Button
              variant="ghost"
              className="bg-[#FDE3DE] border-[#F24822] border-2"
              size="icon"
              onClick={handleDeleteOrder}
            >
              <Trash />
            </Button>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};
