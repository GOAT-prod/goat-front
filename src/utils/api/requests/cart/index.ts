import { api, headers } from "../../instance";

export const getCart = () => api.get<Cart>(`cart`, { headers });
