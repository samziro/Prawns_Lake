'use client';

import React from 'react';
import Image from 'next/image';

type Villa = {
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
  features: { icon: string; color: string; label: string }[];
  button: string;
};

const villas: Villa[] = [
  {
    title: '3-Bedroom Lake Villa',
    description:
      'Spacious family villa with stunning lake views, featuring three comfortable bedrooms, a fully equipped kitchen, and your own private swimming pool. Perfect for families or small groups seeking an authentic eco-luxury experience.',
    image:
      'https://readdy.ai/api/search-image?query=Luxurious%203-bedroom%20beachfront%20villa%20with%20private%20swimming%20pool%20overlooking%20pristine%20lake%20waters%2C%20modern%20coastal%20architecture%20with%20large%20windows%2C%20wooden%20deck%20extending%20over%20water%2C%20Kenya%20eco-luxury%20accommodation%2C%20sunset%20lighting&amp;width=600&amp;height=400&amp;seq=villa3br&amp;orientation=landscape',
    badge: 'Premium Villa',
    badgeColor: 'bg-blue-600',
    features: [
      { icon: 'ri-hotel-bed-line', color: 'text-blue-600', label: '3 Bedrooms' },
      { icon: 'ri-swimming-pool-line', color: 'text-blue-600', label: 'Private Pool' },
      { icon: 'ri-wifi-line', color: 'text-blue-600', label: 'Free Wi-Fi' },
      { icon: 'ri-temp-cold-line', color: 'text-blue-600', label: 'Air Conditioning' },
      { icon: 'ri-restaurant-line', color: 'text-blue-600', label: 'Full Kitchen' },
      { icon: 'ri-landscape-line', color: 'text-blue-600', label: 'Lake Views' },
    ],
    button: 'Check Availability',
  },
  {
    title: '4-Bedroom Executive Villa',
    description:
      'Our largest villa offering ultimate comfort and space for extended families or groups. Features four beautifully appointed bedrooms, expansive living areas, and premium amenities with breathtaking panoramic lake views.',
    image:
      'https://readdy.ai/api/search-image?query=Spacious%204-bedroom%20luxury%20beachfront%20villa%20with%20expansive%20private%20swimming%20pool%2C%20panoramic%20lake%20views%20through%20floor-to-ceiling%20windows%2C%20elegant%20coastal%20design%2C%20perfect%20for%20large%20families%2C%20Kenya%20eco-resort%20accommodation&amp;width=600&amp;height=400&amp;seq=villa4br&amp;orientation=landscape',
    badge: 'Deluxe Villa',
    badgeColor: 'bg-emerald-600',
    features: [
      { icon: 'ri-hotel-bed-line', color: 'text-emerald-600', label: '4 Bedrooms' },
      { icon: 'ri-swimming-pool-line', color: 'text-emerald-600', label: 'Large Pool' },
      { icon: 'ri-wifi-line', color: 'text-emerald-600', label: 'Free Wi-Fi' },
      { icon: 'ri-temp-cold-line', color: 'text-emerald-600', label: 'Premium A/C' },
      { icon: 'ri-restaurant-line', color: 'text-emerald-600', label: 'Gourmet Kitchen' },
      { icon: 'ri-sun-line', color: 'text-emerald-600', label: 'Sunset Deck' },
    ],
    button: 'Check Availability',
  },
];

const highlights = [
  {
    icon: 'ri-eye-line',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    title: 'Exclusive Lake Views',
    desc: 'Wake up to stunning sunrise views over Prawns Lake and enjoy spectacular sunsets from your private deck.',
  },
  {
    icon: 'ri-leaf-line',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    title: 'Eco-Luxury Design',
    desc: 'Sustainable architecture that harmonizes with the natural environment while providing modern comfort.',
  },
  {
    icon: 'ri-compass-3-line',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    title: 'Conservation Access',
    desc: 'Direct access to mangrove boardwalks and priority booking for guided conservation tours and activities.',
  },
];

const perks = [
  '24/7 Concierge Service',
  'Daily Housekeeping',
  'Complimentary Welcome Dinner',
  'Free Airport Transfer',
];

const VillaCard: React.FC<{ villa: Villa }> = ({ villa }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="relative h-64">
      <Image
        width={600}
        height={400}
        src={villa.image}
        alt={villa.title}
        className="w-full h-full object-cover object-top"
      />
      <div className={`absolute top-4 left-4 ${villa.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold font-outfit`}>
        {villa.badge}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 font-baker-signet">{villa.title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed font-outfit">{villa.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {villa.features.map((f, i) => (
          <div className="flex items-center" key={i}>
            <div className={`w-8 h-8 bg-opacity-20 rounded-full flex items-center justify-center mr-3 ${f.color.replace('text-', 'bg-')}`}>
              <i className={`${f.icon} ${f.color}`}></i>
            </div>
            <span className="text-gray-700 font-outfit">{f.label}</span>
          </div>
        ))}
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer font-outfit">
        {villa.button}
      </button>
    </div>
  </div>
);

const Stay: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-baker-signet">
            Lakeside <span className="text-blue-600">Accommodation</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-outfit">
            Extend your conservation experience with an overnight stay at our exclusive beachfront villas, where comfort meets sustainability in perfect harmony.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {villas.map((villa, idx) => (
            <VillaCard villa={villa} key={idx} />
          ))}
        </div>
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-baker-signet">
            Villa Experience Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div className="text-center" key={i}>
                <div className={`w-16 h-16 ${h.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${h.icon} ${h.color} text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-baker-signet">{h.title}</h4>
                <p className="text-gray-600 font-outfit">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4 font-outfit">
              All proceeds from villa stays directly support local conservation efforts and community development in Mida Creek.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              {perks.map((perk, i) => (
                <span className="flex items-center font-outfit" key={i}>
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
