import React from 'react';
import { Bell, Trash2, ExternalLink } from 'lucide-react';
import { sampleProducts } from '../data/sampleData';

export default function PriceAlertPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mis Alertas de Precio</h1>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Bell size={20} />
          <span>Nueva Alerta</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <ExternalLink size={20} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Trash2 size={20} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-sm text-gray-500">Precio Actual</p>
                      <p className="text-xl font-bold text-indigo-600">${product.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Precio Objetivo</p>
                      <p className="text-xl font-bold text-green-600">
                        ${(product.price * 0.9).toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Diferencia</p>
                      <p className="text-xl font-bold text-red-600">
                        ${(product.price * 0.1).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bell size={20} className="text-indigo-600" />
                  <span>Notificar cuando el precio baje de ${(product.price * 0.9).toFixed(2)}</span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Editar Alerta
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}