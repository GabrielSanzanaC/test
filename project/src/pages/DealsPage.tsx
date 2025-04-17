import React from 'react';
import { deals } from '../data/sampleData';
import { Clock } from 'lucide-react';

export default function DealsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-8">Ofertas del Día</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={deal.product.image}
                alt={deal.product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                -{deal.discountPercentage}%
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{deal.product.name}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  ${deal.product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${deal.originalPrice}
                </span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Clock size={20} className="mr-2" />
                <span>Válido hasta {deal.validUntil}</span>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}