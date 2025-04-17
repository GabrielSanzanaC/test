import React from 'react';
import { Check, X } from 'lucide-react';
import { sampleProducts } from '../data/sampleData';

export default function ComparePage() {
  const products = sampleProducts.slice(0, 3); // Tomamos 3 productos para comparar

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-8">Comparar Productos</h1>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50">Características</th>
              {products.map((product) => (
                <th key={product.id} className="p-4 text-center min-w-[250px]">
                  <div className="space-y-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-4 font-medium">Categoría</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">{product.category}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Descripción</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">{product.description}</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Envío Gratis</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {Math.random() > 0.5 ? (
                    <Check className="mx-auto text-green-500" />
                  ) : (
                    <X className="mx-auto text-red-500" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Garantía</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">12 meses</td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Stock</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">Disponible</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}