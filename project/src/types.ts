export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  priceHistory?: PricePoint[];
  specifications?: Record<string, string>;
  reviews?: Review[];
  rating?: number;
}

export interface PricePoint {
  date: string;
  price: number;
  seller: string;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  userName: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  favoriteCategories: string[];
  notificationSettings: {
    priceAlerts: boolean;
    newsletters: boolean;
    deals: boolean;
  };
}

export interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Deal {
  id: string;
  product: Product;
  discountPercentage: number;
  originalPrice: number;
  validUntil: string;
}