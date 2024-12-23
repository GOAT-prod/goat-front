import { dbapi } from "@/utils/api/dbinstance";
import { OrderDB } from "../../types/types";
import { useQuery } from "@tanstack/react-query";

const getOrdersByUser = async (userId: number) => {
  const response = await dbapi.get<OrderDB[]>(`orders/${userId}`);
  return response.data;
};

export const useGetOrdersByUserQuery = (userId: number) => {
  return useQuery({
    queryKey: ["orders", userId],
    queryFn: () => getOrdersByUser(userId),
  });
};
