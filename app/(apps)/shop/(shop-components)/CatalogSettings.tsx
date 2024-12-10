import { Button } from "@/ui/button";
import { Combobox } from "@/ui/ComboBox";
import { LayoutGrid, List } from "lucide-react";

export const CatalogSettings = () => {
  return (
    <>
      <Combobox />
      <Button size={"icon"} variant={"secondary"}>
        <LayoutGrid className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button size={"icon"} variant={"secondary"}>
        <List className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </>
  );
};
