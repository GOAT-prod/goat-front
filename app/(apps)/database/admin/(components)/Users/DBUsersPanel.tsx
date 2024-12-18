import { Button } from "@/ui/button";
import { UserCard } from "./DBUserCard";
import { UnifiedPanel } from "@/components/UnifiedPannel";

export const UsersPanel = () => {
  return (
    <UnifiedPanel
      title="Пользователи сервиса"
      items={Array(6).fill({})}
      renderItem={(item) => <UserCard item={item} />}
      actionButton={<Button size="small">Добавить пользователя</Button>}
    />
  );
};
