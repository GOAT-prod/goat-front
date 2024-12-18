import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { Button } from "@/ui/button";
import { Check, Trash } from "lucide-react";

interface UserCardProps {
  item: any;
}

export const UserCard = ({ item }: UserCardProps) => {
  return (
    <CardWrapper>
      <div className="text-lg font-medium">
        <p>joshdoal@gmail.com</p>
      </div>
      <InfoRow label="Роль:" value="Клиент-потребитель" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 text-sm">
          <InfoRow label="Название организации:" value="Nike Shop" />
          <InfoRow label="Адрес:" value="Penza dom 4/3 bla bla bla" />
          <InfoRow label="ИНН:" value="123456789" />
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="bg-[#dcf3e6] border-[#14AE5C] border-2"
            size="icon"
          >
            <Check />
          </Button>
          <Button
            variant="ghost"
            className="bg-[#FDE3DE] border-[#F24822] border-2"
            size="icon"
          >
            <Trash />
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};
