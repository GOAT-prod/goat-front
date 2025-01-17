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

export interface GroupedUsersDB {
  role: "factory" | "shop";
  count: number;
  users: UserDB[];
}

export interface OrderDB {
  id: string;
  type: OrderTypeDB;
  status: OrderStatusDB;
  createDate: Date;
  deliveryDate: Date;
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
  factoryId: number;
  factoryName: string;
  brand: string;
  name: string;
  price: number;
  images: Image[];
  materials: ProductMaterialDB[];
  status: ProductStatusDB;
  items: ProductItemDB[];
}

interface Image {
  id: number;
  url: string;
  productId: number;
}

export enum ProductStatusDB {
  Created = "Created",
  Deleted = "Deleted",
}

export interface ProductMaterialDB {
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
  cartItems: CartItemDB[];
  totalSelectedPrice: number;
}

export interface CartItemDB {
  id: number;
  cartId: number;
  productItemId: number;
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
