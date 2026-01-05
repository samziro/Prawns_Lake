'use client';

import Image from 'next/image';
import React from 'react';

type Product = {
  title: string;
  description: string;
  image: string;
  price: string;
  category: 'Handicrafts' | 'Eco';
};

const handicrafts: Product[] = [
  {
    title: 'Prawns Lake Branded T-Shirt',
    description: 'Comfortable cotton t-shirt featuring our conservation logo',
    image:
      'https://readdy.ai/api/search-image?query=High%20quality%20cotton%20t-shirt%20with%20Prawns%20Lake%20conservation%20project%20logo%2C%20mangrove%20tree%20design%2C%20eco-friendly%20merchandise%2C%20Kenya%20coastal%20souvenir%20apparel%2C%20branded%20conservation%20clothing&amp;width=300&amp;height=300&amp;seq=tshirt1&amp;orientation=squarish',
    price: 'KSh 1,200',
    category: 'Handicrafts',
  },
  {
    title: 'Mangrove Wood Carving',
    description: 'Hand-carved mangrove wildlife sculptures by local artisans',
    image:
      'https://readdy.ai/api/search-image?query=Beautiful%20hand-carved%20wooden%20sculpture%20of%20coastal%20birds%20and%20mangrove%20trees%2C%20traditional%20Kenyan%20wood%20carving%20craftsmanship%2C%20local%20artisan%20handicraft%2C%20conservation-themed%20art%20piece&amp;width=300&amp;height=300&amp;seq=carving1&amp;orientation=squarish',
    price: 'KSh 2,500',
    category: 'Handicrafts',
  },
  {
    title: 'Beadwork Jewelry Set',
    description: 'Traditional coastal beadwork necklace and bracelet set',
    image:
      'https://readdy.ai/api/search-image?query=Colorful%20traditional%20Kenyan%20coastal%20beadwork%20jewelry%20set%20with%20necklace%20and%20bracelets%2C%20authentic%20handmade%20accessories%2C%20cultural%20heritage%20crafts%2C%20local%20artisan%20beadwork&amp;width=300&amp;height=300&amp;seq=beads1&amp;orientation=squarish',
    price: 'KSh 1,800',
    category: 'Handicrafts',
  },
];

const ecoProducts: Product[] = [
  {
    title: 'Reusable Water Bottle',
    description: 'Stainless steel bottle with Prawns Lake branding',
    image:
      'https://readdy.ai/api/search-image?query=Premium%20stainless%20steel%20reusable%20water%20bottle%20with%20Prawns%20Lake%20logo%20and%20mangrove%20conservation%20messaging%2C%20eco-friendly%20sustainable%20product%2C%20branded%20merchandise&amp;width=300&amp;height=300&amp;seq=bottle1&amp;orientation=squarish',
    price: 'KSh 1,500',
    category: 'Eco',
  },
  {
    title: 'Organic Mangrove Soap',
    description: 'Natural soap infused with mangrove extracts and coastal scents',
    image:
      'https://readdy.ai/api/search-image?query=Natural%20organic%20soap%20bars%20with%20mangrove%20and%20coastal%20plant%20extracts%2C%20eco-friendly%20packaging%2C%20sustainable%20skincare%20products%2C%20Kenya%20coastal%20aromatherapy%20soap&amp;width=300&amp;height=300&amp;seq=soap1&amp;orientation=squarish',
    price: 'KSh 800',
    category: 'Eco',
  },
  {
    title: 'Eco Shopping Bag',
    description: 'Durable canvas bag supporting conservation efforts',
    image:
      'https://readdy.ai/api/search-image?query=Sturdy%20canvas%20shopping%20bag%20with%20Prawns%20Lake%20conservation%20project%20branding%2C%20eco-friendly%20reusable%20bag%2C%20sustainable%20merchandise%2C%20Kenya%20environmental%20awareness%20product&amp;width=300&amp;height=300&amp;seq=bag1&amp;orientation=squarish',
    price: 'KSh 900',
    category: 'Eco',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group" data-product-shop="true">
    <div className="relative overflow-hidden">
      <Image
        width={300}
        height={300}
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold font-outfit">
        Supports Conservation
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold text-gray-900 mb-3 font-baker-signet">{product.title}</h4>
      <p className="text-gray-600 mb-4 leading-relaxed font-outfit">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-teal-600 font-baker-signet">{product.price}</span>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer font-outfit">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const Shop: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-baker-signet">
            Conservation <span className="text-teal-600">Shop</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-outfit">
            Take home meaningful souvenirs while supporting local artisans and conservation efforts. Every purchase helps protect Mida Creek's ecosystem.
          </p>
        </div>
        <div className="space-y-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center font-baker-signet">
              Handicrafts &amp; Souvenirs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {handicrafts.map((product, idx) => (
                <ProductCard product={product} key={idx} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center font-baker-signet">
              Eco Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecoProducts.map((product, idx) => (
                <ProductCard product={product} key={idx} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4 font-baker-signet">Shopping with Purpose</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-outfit">
            Every purchase from our conservation shop directly supports mangrove restoration projects and provides income for local artisan communities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2 font-baker-signet">Support Local Artisans</h4>
              <p className="text-sm opacity-90 font-outfit">Direct partnership with community craftspeople</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2 font-baker-signet">Fund Conservation</h4>
              <p className="text-sm opacity-90 font-outfit">Proceeds support mangrove restoration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-earth-line text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2 font-baker-signet">Eco-Friendly Materials</h4>
              <p className="text-sm opacity-90 font-outfit">Sustainable and biodegradable products</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer font-baker-signet">
              Visit Our Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
