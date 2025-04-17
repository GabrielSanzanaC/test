import { Product, Category, Deal } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro M2',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Laptops',
    description: 'El último MacBook Pro con chip M2 ofrece un rendimiento excepcional y una duración de batería increíble.',
    priceHistory: [
      { date: '2024-01-01', price: 1399.99, seller: 'Apple Store' },
      { date: '2024-02-01', price: 1349.99, seller: 'Amazon' },
      { date: '2024-03-01', price: 1299.99, seller: 'Best Buy' }
    ]
  },
  // ... (rest of sample products)
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Laptops',
    description: 'Encuentra las mejores computadoras portátiles',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    productCount: 156
  },
  // ... (more categories)
];

export const deals: Deal[] = [
  {
    id: '1',
    product: sampleProducts[0],
    discountPercentage: 20,
    originalPrice: 1499.99,
    validUntil: '2024-04-01'
  },
  // ... (more deals)
];