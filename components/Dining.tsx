'use client'

import React from 'react'
import Image from 'next/image'

type Dish = {
  title: string
  description: string
  image: string
  price: string
  popular?: boolean
}

type Drink = {
  name: string
  price: string
}

const dishes: Dish[] = [
  {
    title: 'Signature Prawn Samosas',
    description: 'Deep-fried triangle samosas filled with fresh local prawns, served with spicy tamarind chutney',
    image: '/samosa.webp',
    price: 'KSh 350',
    popular: true,
  },
  {
    title: 'Mixed Seafood Platter',
    description: 'Assorted fresh prawns and fish caught in the lake, grilled to perfection with coastal spices',
    image: '/sea_food.webp',
    price: 'KSh 1,200',
    popular: true,
  },
  {
    title: 'Fresh Fish of the Day',
    description: 'Daily catch prepared with local herbs and spices, served with coconut rice',
    image: '/grilled_fish.webp',
    price: 'KSh 850',
  },
  {
    title: 'Coconut Prawn Curry',
    description: 'Fresh prawns simmered in rich coconut curry with traditional Swahili spices',
    image: '/smoked_prawns.webp',
    price: 'KSh 950',
  },
]

const drinks: Drink[] = [
  { name: 'Tusker Beer', price: 'KSh 200' },
  { name: 'House Wine', price: 'KSh 300' },
  { name: 'Sunset Cocktail', price: 'KSh 450' },
  { name: 'Fresh Coconut Water', price: 'KSh 150' },
]

const diningHighlights = [
  'Built on stilts over mangroves',
  'Famous sunset views',
  'Family & pet friendly',
  'Laid-back atmosphere',
  'Very affordable prices',
]

const Dining: React.FC = () => {
  return (
    <div id="dining">
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dining &amp; <span className="text-emerald-600">Cuisine</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-outfit">
              Our open-air restaurant built on stilts over the mangroves serves the freshest seafood with stunning sunset views over Mida Creek
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Signature Dishes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dishes.map((dish, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <Image width={400} height={300} loading='lazy' src={dish.image} alt={dish.title} className="w-full h-48 object-cover object-center" />
                      {dish.popular && (
                        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold font-outfit">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{dish.title}</h4>
                        <span className="text-lg font-bold text-emerald-600 ">{dish.price}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-outfit">{dish.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-baker-signet">Drinks &amp; Beverages</h3>
                <div className="space-y-4">
                  {drinks.map((drink, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-outfit">{drink.name}</span>
                      <span className="font-semibold text-emerald-600">{drink.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="ri-sun-line text-amber-600 text-xl mr-2"></i>
                    <span className="font-semibold text-amber-800 font-baker-signet">Happy Hour Special</span>
                  </div>
                  <p className="text-amber-700 text-sm font-outfit">
                    30% off cocktails during sunset hours (5:30-7:00 PM)
                  </p>
                </div>
              </div>
              <div className="bg-emerald-600 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 font-baker-signet">Dining Experience</h3>
                <ul className="space-y-3">
                  {diningHighlights.map((h, idx) => (
                    <li key={idx} className="flex items-center font-outfit">
                      <i className="ri-check-line text-emerald-200 mr-3"></i>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4 font-baker-signet">Sunset Dining Experience</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto font-outfit">
              Join us for an unforgettable evening as you enjoy fresh seafood on our wooden terrace while watching the sun set over Mida Creek
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer font-baker-signet">
                Reserve Your Table
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dining
