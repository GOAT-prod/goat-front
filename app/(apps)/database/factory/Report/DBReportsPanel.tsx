import { UnifiedPanel } from "@/components/UnifiedPannel";
import { useGetReportByFactoryQuery } from "../../(services)/requests/report/getFactoryReports";
import { ReportItem } from "./DBReportItem";
import { useUserStore } from "../../(services)/store/userStore";

export const ReportsPanel = () => {
  const { selectedFactoryUser } = useUserStore();
  const { data: reports, isLoading } = useGetReportByFactoryQuery(
    selectedFactoryUser?.clientId!
  );

  if (isLoading) return <p>Загрузка отчётов...</p>;
  if (!reports || reports.length === 0) return <p>Отчётов не найдено</p>;

  return (
    <UnifiedPanel
      title="Отчёт по продажам товаров"
      items={reports}
      renderItem={(report) => <ReportItem report={report} />}
    />
  );
};
