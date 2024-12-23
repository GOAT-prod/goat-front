import { dbapi } from "@/utils/api/dbinstance";
import { OrderDB } from "../../types/types";
import { useQuery } from "@tanstack/react-query";

const getOrders = async () => {
  const response = await dbapi.get<OrderDB[]>(`orders`);
  return response.data;
};

export const useGetOrdersQuery = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
};
