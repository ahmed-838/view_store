export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  category: string;
  images: string[];
  inventory: number;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  name: string | null;
  wishlist: string[];
  created_at: string;
}

export interface CartItem {
  product_id: string;
  quantity: number;
}

export interface Cart {
  id: string;
  user_id: string;
  items: CartItem[];
  total: number;
  created_at: string;
  updated_at: string;
}