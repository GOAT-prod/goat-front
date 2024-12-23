import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { ReportDB } from "../../(services)/types/types";

interface ReportItemProps {
  report: ReportDB;
  type?: "user" | "factory";
}

export const ReportItem = ({ report, type = "factory" }: ReportItemProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Дата: {new Date(report.date).toLocaleDateString()}
      </h3>
      <p className="text-sm">
        {type === "factory" && "Прибыль за день: "}
        {type === "user" && "Потрачено за день: "}
        {report.totalPrice || ""} ₽
      </p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Товар</TableHead>
            <TableHead>Цвет</TableHead>
            <TableHead>Размер</TableHead>
            <TableHead>Кол-во</TableHead>
            <TableHead className="text-right">Цена</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {report.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.color}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>{item.totalCount}</TableCell>
              <TableCell className="text-right w-24">
                {item.totalPrice || ""} ₽
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
