import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleProducts } from '../data/sampleData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-xl text-indigo-600 font-semibold">${product.price}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {product.priceHistory && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Historial de Precios</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={product.priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#4f46e5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}