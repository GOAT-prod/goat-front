import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

interface SortProductItemProps {
  className?: string;
  onChange: (value: string) => void;
}

export const SortProductItem = ({ onChange }: SortProductItemProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">По умолчанию</SelectItem>
        <SelectItem value="color">По цвету</SelectItem>
        <SelectItem value="size">По размеру</SelectItem>
        <SelectItem value="weight">По весу</SelectItem>
      </SelectContent>
    </Select>
  );
};
