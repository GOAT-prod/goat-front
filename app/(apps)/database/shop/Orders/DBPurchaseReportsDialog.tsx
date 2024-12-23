// components/PurchaseReportsDialog.tsx

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { useGetReportByUserQuery } from "../../(services)/requests/report/getProductsReports";
import { ReportItem } from "./DBOrderReports";

interface PurchaseReportsDialogProps {
  userId: number;
}

export const PurchaseReportsDialog = ({
  userId,
}: PurchaseReportsDialogProps) => {
  const { data: reports, isLoading, error } = useGetReportByUserQuery(userId);

  return (
    <Dialog>
      <DialogTrigger className="text-sm rounded-md border border-border h-8 px-1.5 font-medium shadow-sm hover:bg-secondary-hover w-full">
        Открыть отчеты по покупкам
      </DialogTrigger>
      <DialogContent className="max-h-[800px] w-[800px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Отчеты по покупкам</DialogTitle>
          <DialogDescription>
            Здесь отображаются все покупки пользователя за определенный период.
          </DialogDescription>
        </DialogHeader>

        {isLoading && <p>Загрузка...</p>}
        {error && <p className="text-red-500">Ошибка загрузки отчетов</p>}
        {reports && reports.length > 0 ? (
          reports.map((report, index) => (
            <ReportItem key={index} report={report} type="user" />
          ))
        ) : (
          <p>Отчеты отсутствуют</p>
        )}
      </DialogContent>
    </Dialog>
  );
};
