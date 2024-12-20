import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { ProductCardItem } from "./DBProductCardItem";
import { Button } from "@/ui/button";
import { Pencil, Trash } from "lucide-react";
import { ProductDB } from "../../(services)/types/types";
import { DBEditDialog } from "./EditProduct/DBEditDialog";
import { useDeleteProduct } from "../../(services)/requests/deleteProduct";

interface ProductCardProps {
  item: ProductDB;
}

export const ProductCard = ({ item }: ProductCardProps) => {
  const { mutate: deleteProduct } = useDeleteProduct(item.factoryId);

  return (
    <CardWrapper>
      <div className="flex jutstify-between items-center ">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-lg font-medium flex justify-between items-center">
            <p>{item.name}</p>
          </div>
          <div className="flex gap-5 text-sm">
            <InfoRow label="Цена:" value={`${item.price} ₽`} />
          </div>
          <InfoRow
            label="Материалы:"
            value={item.materials.map((material) => material.name).join(", ")}
            className="text-sm"
          />
        </div>
        <div className="flex gap-2">
          <DBEditDialog item={item} />

          <Button
            variant="ghost"
            className="bg-[#FDE3DE] border-[#F24822] border-2"
            size="icon"
            onClick={() => deleteProduct(item)}
          >
            <Trash />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-full ">
          {item.items.map((item) => (
            <ProductCardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};
