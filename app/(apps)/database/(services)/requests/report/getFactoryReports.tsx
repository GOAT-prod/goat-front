import { dbapi } from "@/utils/api/dbinstance";
import { ReportDB } from "../../types/types";
import { useQuery } from "@tanstack/react-query";

const getReportByFactory = async (userId: number) => {
  const response = await dbapi.get<ReportDB[]>(`report/factory/${userId}`);
  return response.data;
};

export const useGetReportByFactoryQuery = (userId: number) => {
  return useQuery({
    queryKey: ["factoryReports", userId],
    queryFn: () => getReportByFactory(userId),
  });
};
