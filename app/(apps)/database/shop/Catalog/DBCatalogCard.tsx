import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { CatalogCardItem } from "./DBCatalogCardItem";

interface CatalogCardProps {
  item: any;
}

export const CatalogCard = ({ item }: CatalogCardProps) => {
  return (
    <CardWrapper>
      <div className="text-lg font-medium">
        <p>Nike Air 25</p>
      </div>
      <div className="flex gap-5 text-sm">
        <InfoRow label="Завод:" value="Nike Factory" />
        <InfoRow label="Цена:" value="42 000 ₽" />
      </div>
      <InfoRow
        label="Материалы:"
        value="ткань, кожа, алькантара"
        className="text-sm"
      />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-full ">
          <CatalogCardItem item={item} />
          <CatalogCardItem item={item} />
          <CatalogCardItem item={item} />
        </div>
      </div>
    </CardWrapper>
  );
};
