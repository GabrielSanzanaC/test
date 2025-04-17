import React, { useState } from 'react';
import { Search, User, LogIn, UserPlus, Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-indigo-600">TechCompare</h1>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center px-6">
            <div className="w-full max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full bg-gray-100 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                />
                <button
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  onClick={() => handleSearch(searchQuery)}
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/deals" className="text-gray-600 hover:text-indigo-600">
              <ShoppingBag size={20} />
            </Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-indigo-600">
              <Heart size={20} />
            </Link>
            <Link to="/price-alerts" className="text-gray-600 hover:text-indigo-600">
              <Bell size={20} />
            </Link>
            
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
              >
                <User size={20} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                >
                  <LogIn size={20} />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  <UserPlus size={20} />
                  <span>Registrarse</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}