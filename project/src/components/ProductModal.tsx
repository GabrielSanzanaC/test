import React from 'react';
import { X, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { ProductModalProps } from '../types';

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Comparar Precios
              </button>
              <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">(128 reviews)</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-4xl font-bold text-indigo-600">${product.price}</span>
                <span className="text-lg text-gray-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="text-green-600 font-semibold">20% OFF</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {product.priceHistory && (
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold mb-4">Historial de Precios</h3>
                <div className="space-y-3">
                  {product.priceHistory.map((point, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{point.seller}</p>
                        <p className="text-sm text-gray-500">{point.date}</p>
                      </div>
                      <span className="font-bold text-indigo-600">${point.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}