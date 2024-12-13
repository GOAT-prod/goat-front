import { getFilters } from "@/utils/api/requests/products/filters";
import { useQuery } from "@tanstack/react-query";

export const useGetFiltersQuery = () =>
  useQuery({
    queryKey: ["getFilters"],
    queryFn: () => getFilters(),
  });
