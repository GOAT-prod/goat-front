import { api, headers } from "@/utils/api/instance";

export const getFilters = () => api.get<Filters>(`filters`, { headers });
