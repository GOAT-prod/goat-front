interface Product {
  id: number;
  Name: string;
  BrandName: string;
  FactoryName: string;
  Description: string;
  Price: number;
  Items: ProductItem[];
  Materials: ProductMaterial[];
  Images: string[];
  Approver: string;
  Status: ProductStatus;
}

enum ProductStatus {
  Unknown = "unknown",
  WaitingApprove = "waiting_approve",
  Approve = "approve",
  Editing = "editing",
  Deleted = "deleted",
}

interface ProductItem {
  id: number;
  StockCount: number;
  Size: number;
  Weight: number;
  Color: string;
}

interface ProductMaterial {
  Id: number;
  Name: string;
}

interface Filters {
  BrandNames: string[];
  Materials: string[];
  Sizes: string[];
  Colors: string[];
  MinPrice: number;
  MaxPrice: number;
}

interface Cart {
  items: CartItem[];
  totalAmount: string;
}

interface CartItem {
  id: number;
  isSelected: boolean;
  name: string;
  price: string;
  color: string;
  size: string;
  StockCount: number;
}

interface Order {
  id: number;
  status: string;
  creationDate: string;
  totalAmount: number;
  totalWeight: number;
  orderItems: CartItem[];
}
