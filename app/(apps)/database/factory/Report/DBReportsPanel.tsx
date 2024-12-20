import { UnifiedPanel } from "@/components/UnifiedPannel";
import { UserDB } from "../../(services)/types/types";

export const ReportsPanel = ({ user }: { user: UserDB }) => {
  return (
    <UnifiedPanel
      title="Отчёт по продажам товаров"
      items={Array(6).fill({})}
      renderItem={() => <div />}
    />
  );
};
