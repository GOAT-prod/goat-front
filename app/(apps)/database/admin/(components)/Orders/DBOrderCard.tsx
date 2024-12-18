import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/ui/button";
import {
  CircleCheck,
  CircleX,
  Copy,
  Package,
  Trash,
  Truck,
} from "lucide-react";
import { useMemo } from "react";

export const OrderCard = () => {
  const statuses = [
    {
      label: "Собирается",
      styles: "bg-[#F5FBFF] border-[#BDE3FF]",
      Icon: Package,
    },
    {
      label: "В пути",
      styles: "bg-[#FFF8F0] border-[#FCD19C]",
      Icon: Truck,
    },
    {
      label: "Отменен",
      styles: "bg-[#FDE3DE] border-[#F24822]",
      Icon: CircleX,
    },
    {
      label: "Доставлен",
      styles: "bg-[#DCF3E6] border-[#14AE5C]",
      Icon: CircleCheck,
    },
  ];

  const selectedStatus = useMemo(() => {
    return statuses[Math.floor(Math.random() * statuses.length)];
  }, []);

  return (
    <CardWrapper>
      <div className="flex flex-col gap-3 justify-center flex-1">
        <div className="text-base text-[#8F8F8F] flex gap-2 items-center">
          <p>От {"28 ноября 2023"}</p>•<p>112512151</p>
          <Button variant={"ghost"} size="icon">
            <Copy size={18} />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col text-sm">
          <InfoRow label="Вес:" value="15.5 кг" />
          <InfoRow label="Цена:" value="1270 $" />
        </div>
        <div className="flex gap-2">
          <StatusBadge
            label={selectedStatus.label}
            Icon={selectedStatus.Icon}
            className={selectedStatus.styles}
          />
        </div>
      </div>
    </CardWrapper>
  );
};
