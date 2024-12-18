import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { ProductCardItem } from "./DBProductCardItem";
import { Button } from "@/ui/button";
import { Pencil, Trash } from "lucide-react";

interface CatalogCardProps {
  item: any;
}

export const ProductCard = ({ item }: CatalogCardProps) => {
  return (
    <CardWrapper>
      <div className="flex jutstify-between items-center ">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg font-medium flex justify-between items-center">
            <p>Nike Air 25</p>
          </div>
          <div className="flex gap-5 text-sm">
            <InfoRow label="Цена:" value="42 000 ₽" />
          </div>
          <InfoRow
            label="Материалы:"
            value="ткань, кожа, алькантара"
            className="text-sm"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="bg-blue-200 border-blue-500 border-2"
            size="icon"
          >
            <Pencil />
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
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-full ">
          <ProductCardItem item={item} />
          <ProductCardItem item={item} />
          <ProductCardItem item={item} />
        </div>
      </div>
    </CardWrapper>
  );
};
