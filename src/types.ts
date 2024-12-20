export interface Product {
  id: string;
  name: string;
  category: string;
  images: string[];
  features?: string[];
  description: string;
  price: number;
  type: string;
  inventory: number;
  created_at: string;
} 