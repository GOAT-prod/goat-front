export enum UserStatusDB {
  Unknown = "Unknown",
  WaitingApprove = "WaitingApprove",
  Approved = "Approved",
  Deleted = "Deleted",
}

export interface UserDB {
  id: number;
  username: string;
  password: string;
  role: string;
  clientId: number;
  name: string;
  address: string;
  inn: string;
  status: UserStatusDB;
}

export interface OrderDB {
  id: string;
  type: OrderTypeDB;
  status: OrderStatusDB;
  createDate: Date;
  username: string;
  totalWeight: number;
  totalPrice: number;
}

export enum OrderTypeDB {
  Order = "Order",
  Supply = "Supply",
}

export enum OrderStatusDB {
  Pending = "Pending",
  Delivering = "Delivering",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
  Deleted = "Deleted",
}

export interface ProductDB {
  id: number;
  factoryInfo: FactoryDB;
  name: string;
  price: number;
  status: ProductStatus;
  items: ProductItem[];
}

export enum ProductStatusDB {
  Created = "Created",
  Deleted = "Deleted",
}

export interface FactoryDB {
  id: number;
  name: string;
}

export interface ProductItemDB {
  id: number;
  productId: number;
  color: string;
  size: number;
  weight: number;
}

export interface CartDB {
  id: number;
  userId: number;
  cartItems: CartItem[];
}

export interface CartItemDB {
  id: number;
  productId: number;
  productName: string;
  price: number;
  color: string;
  size: number;
  selectCount: number;
  isSelected: boolean;
}

export interface ReportDB {
  date: Date;
  totalPrice: number;
  items: ReportItemDB[];
}

export interface ReportItemDB {
  productName: string;
  color: string;
  size: number;
  totalCount: number;
  totalPrice: number;
}
