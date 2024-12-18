import { Button } from "@/ui/button";
import { Palette, Ruler, ShoppingCart, Weight } from "lucide-react";

interface CatalogCardItemProps {
  item: any;
}

export const CatalogCardItem = ({ item }: CatalogCardItemProps) => {
  return (
    <div className="flex items-center justify-between bg-background border border-border hover:border-border-hover shadow rounded-lg p-3">
      <div className="flex gap-1 text-sm flex-1 items-center">
        <Palette size={16} />
        <p>Black</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 text-sm items-center">
          <Ruler size={16} />
          <p>42</p>
        </div>
        <div className="flex gap-1 text-sm min-w-[70px] items-center">
          <Weight size={16} />
          <p>0.98 кг</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="bg-[#dcf3e6] border-[#14AE5C] border-2"
            size="icon"
          >
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};
