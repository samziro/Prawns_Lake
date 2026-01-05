'use client'

import React from 'react'
import Image from 'next/image'

type CulinaryExperience = {
  title: string;
  description: string;
  image: string;
  icon: string;
  duration: string;
  price: string;
  highlights: string[];
};

const experiences: CulinaryExperience[] = [
  {
    title: 'Seafood & Swahili Cooking Classes',
    description: 'Learn to prepare authentic coastal dishes including prawn samosas and coconut-based specialties with our expert chefs.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20chef%20teaching%20tourists%20how%20to%20prepare%20traditional%20Swahili%20prawn%20samosas%20in%20outdoor%20kitchen%20setting%2C%20hands-on%20cooking%20class%20experience%2C%20coastal%20Kenya%20culinary%20tourism%2C%20authentic%20ingredients%20and%20spices&amp;width=600&amp;height=400&amp;seq=cooking1&amp;orientation=landscape',
    icon: 'ri-restaurant-line',
    duration: '3 hours',
    price: 'KSh 2,500/person',
    highlights: [
      '3-course cooking session',
      'Recipe booklet',
      'Full meal included',
    ],
  },
  {
    title: 'Floating Sundowner Bar',
    description: 'Exclusive cocktail experience on our floating deck bar, perfect for sunset viewing with premium drinks and appetizers.',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20floating%20deck%20bar%20over%20mangrove%20waters%20during%20golden%20sunset%2C%20guests%20enjoying%20cocktails%20with%20spectacular%20lake%20views%2C%20premium%20outdoor%20bar%20experience%2C%20Kenya%20coastal%20luxury%20hospitality&amp;width=600&amp;height=400&amp;seq=sundowner1&amp;orientation=landscape',
    icon: 'ri-goblet-line',
    duration: '2 hours',
    price: 'KSh 1,800/person',
    highlights: [
      'Premium cocktails',
      'Gourmet appetizers',
      'Sunset viewing',
    ],
  },
  {
    title: 'Themed Dinner Nights',
    description: 'Weekly special dining events featuring seafood nights, traditional Swahili cuisine, and lakeside BBQ experiences.',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20themed%20dinner%20setup%20on%20wooden%20deck%20over%20water%20with%20beautifully%20arranged%20seafood%20dishes%2C%20candlelit%20ambiance%2C%20mangrove%20backdrop%2C%20luxury%20outdoor%20dining%20experience%2C%20Kenya%20coastal%20fine%20dining&amp;width=600&amp;height=400&amp;seq=themed1&amp;orientation=landscape',
    icon: 'ri-cake-3-line',
    duration: 'Full evening',
    price: 'KSh 3,200/person',
    highlights: [
      'Multi-course tasting menu',
      'Wine pairings',
      'Live entertainment',
    ],
  },
];

const CulinaryCard: React.FC<{ exp: CulinaryExperience }> = ({ exp }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <Image
        width={600}
        height={400}
        src={exp.image}
        alt={exp.title}
        className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
        <i className={`${exp.icon} text-orange-600 text-xl`}></i>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-baker-signet">{exp.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed font-outfit">{exp.description}</p>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500">
            <div className="flex items-center mb-1">
              <i className="ri-time-line mr-2"></i>
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center">
              <i className="ri-price-tag-line mr-2"></i>
              <span className="font-semibold text-orange-600">{exp.price}</span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          {exp.highlights.map((h, i) => (
            <div className="flex items-center text-sm text-gray-600" key={i}>
              <i className="ri-check-line text-green-600 mr-2"></i>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer font-outfit">
        Book Experience
      </button>
    </div>
  </div>
);

const CullinaryClass: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-baker-signet">
            Culinary <span className="text-orange-600">Experiences</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-outfit">
            Immerse yourself in authentic coastal cuisine with hands-on cooking classes and exclusive dining experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, idx) => (
            <CulinaryCard exp={exp} key={idx} />
          ))}
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4 font-baker-signet">Taste the Authentic Flavors</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto font-outfit">
            Our culinary experiences showcase the rich heritage of Swahili coastal cuisine while supporting local fishing communities
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <i className="ri-chef-hat-line text-orange-200 mr-2"></i>
              <span>Expert Local Chefs</span>
            </div>
            <div className="flex items-center">
              <i className="ri-fish-line text-orange-200 mr-2"></i>
              <span>Fresh Daily Catch</span>
            </div>
            <div className="flex items-center">
              <i className="ri-leaf-line text-orange-200 mr-2"></i>
              <span>Organic Ingredients</span>
            </div>
            <div className="flex items-center">
              <i className="ri-book-line text-orange-200 mr-2"></i>
              <span>Recipe Collection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CullinaryClass
