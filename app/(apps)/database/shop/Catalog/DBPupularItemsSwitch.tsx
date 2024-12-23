import { Label } from "@/ui/label";
import { Switch } from "@/ui/switch";

export function PopularItemsSwitch({
  switcher,
  state,
  isLoading,
}: {
  switcher: () => void;
  state: boolean;
  isLoading?: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={state}
        onCheckedChange={switcher}
        id="popular-ones-first"
        disabled={isLoading}
      />
      <Label htmlFor="popular-ones-first">Сначала популярные</Label>
    </div>
  );
}
