import React, { useState } from 'react';
import { Sparkles, Truck, Shield, Clock } from 'lucide-react';
import ProductCarousel from '../components/ProductCarousel';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';
import { sampleProducts } from '../data/sampleData';

function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white mt-8 overflow-hidden">
        {/* ... (rest of the existing HomePage content) ... */}
      </section>

      {/* Features Section */}
      <section className="py-16">
        {/* ... (existing features section) ... */}
      </section>

      {/* Featured Products */}
      <section className="py-12">
        {/* ... (existing featured products section) ... */}
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        {/* ... (existing categories section) ... */}
      </section>

      {/* Latest Products */}
      <section className="py-12">
        {/* ... (existing latest products section) ... */}
      </section>

      {/* Newsletter Section */}
      <section className="py-12 mb-12">
        {/* ... (existing newsletter section) ... */}
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}

export default HomePage;