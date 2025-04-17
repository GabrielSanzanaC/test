import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductCarousel({ title, products, onProductClick }: ProductCarouselProps) {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('product-carousel');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {title && <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>}
      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        <div
          id="product-carousel"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-72">
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
                onClick={() => onProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
                  <p className="text-sm text-gray-600 mt-1">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}