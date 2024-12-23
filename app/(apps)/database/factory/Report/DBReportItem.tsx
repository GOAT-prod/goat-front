import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { ReportDB } from "../../(services)/types/types";

export const ReportItem = ({ report }: { report: ReportDB }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">
          Дата: {new Date(report.date).toLocaleDateString()}
        </h3>
        <p className="text-md text-gray-700">
          Прибыль за день: {report.totalPrice || ""} ₽
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Товар</TableHead>
            <TableHead>Цвет</TableHead>
            <TableHead>Размер</TableHead>
            <TableHead>Количество</TableHead>
            <TableHead className="text-right">Сумма</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {report.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.color}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>{item.totalCount}</TableCell>
              <TableCell className="text-right">
                {item.totalPrice || ""} ₽
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
