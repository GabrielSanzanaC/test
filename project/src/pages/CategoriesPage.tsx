import React from 'react';
import { categories } from '../data/sampleData';

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-8">Categorías</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-200 mb-2">{category.description}</p>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                {category.productCount} productos
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}