import { dbapi } from "@/utils/api/dbinstance";
import { ReportDB } from "../../types/types";
import { useQuery } from "@tanstack/react-query";

const getShopReports = async (userId: number) => {
  const response = await dbapi.get<ReportDB[]>(`report/user/${userId}`);
  return response.data;
};

export const useGetReportByUserQuery = (userId: number) => {
  return useQuery({
    queryKey: ["shopReports", userId],
    queryFn: () => getShopReports(userId),
  });
};
