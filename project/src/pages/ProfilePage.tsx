import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, Bell, Heart, Clock } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow p-6 space-y-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center">
                <User size={64} className="text-indigo-600" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Juan Pérez</h2>
              <p className="text-gray-600">juan@example.com</p>
            </div>
            
            <div className="space-y-2">
              <Link
                to="/profile/edit"
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50"
              >
                <Settings size={20} />
                <span>Editar Perfil</span>
              </Link>
              <Link
                to="/price-alerts"
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50"
              >
                <Bell size={20} />
                <span>Alertas de Precio</span>
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50"
              >
                <Heart size={20} />
                <span>Lista de Deseos</span>
              </Link>
              <Link
                to="/history"
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50"
              >
                <Clock size={20} />
                <span>Historial</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Resumen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <h4 className="text-indigo-600 font-semibold">Alertas Activas</h4>
                <p className="text-3xl font-bold">5</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <h4 className="text-purple-600 font-semibold">Productos Guardados</h4>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl">
                <h4 className="text-pink-600 font-semibold">Dinero Ahorrado</h4>
                <p className="text-3xl font-bold">$150</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Alertas Recientes</h3>
            <div className="space-y-4">
              {/* Aquí irían las alertas recientes */}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Productos Guardados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Aquí irían los productos guardados */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}