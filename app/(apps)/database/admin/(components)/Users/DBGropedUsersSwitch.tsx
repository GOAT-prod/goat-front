import { Label } from "@/ui/label";
import { Switch } from "@/ui/switch";

export function GroupedUsersSwitch({
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
        id="grouped-users"
        disabled={isLoading}
      />
      <Label htmlFor="grouped-users">Группировка пользователей</Label>
    </div>
  );
}
