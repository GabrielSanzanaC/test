import React from 'react';
import { Heart, Trash2, Bell } from 'lucide-react';
import { sampleProducts } from '../data/sampleData';

export default function WishlistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-8">Mi Lista de Deseos</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-48 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Bell size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Trash2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                  <span className="ml-2 text-sm text-gray-500">en 3 tiendas</span>
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  <Heart size={20} />
                  <span>Guardar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}