import { UnifiedPanel } from "@/components/UnifiedPannel";

export const ReportsPanel = () => {
  return (
    <UnifiedPanel
      title="Отчёт по продажам товаров"
      items={Array(6).fill({})}
      renderItem={() => <div />}
    />
  );
};
