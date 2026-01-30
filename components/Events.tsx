'use client';

import React from 'react';
import Image from 'next/image';

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events &amp; <span className="text-purple-600">Celebrations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transform special moments into unforgettable memories at our unique
            lakeside venue with professional event services
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {/* Wedding Venue */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image width={1000} height={1000}
                src="/wed.webp"
                alt="Wedding & Event Venue"
                className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                <i className="ri-heart-line text-purple-600 text-xl"></i>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wedding &amp; Event Venue
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Create magical moments with our rustic lakeside deck as the
                perfect backdrop for weddings and special celebrations.
              </p>

              <div className="text-sm text-gray-500 mb-4">
                <div className="flex items-center mb-1">
                  <i className="ri-group-line mr-2"></i>
                  <span>Up to 80 guests</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-price-tag-line mr-2"></i>
                  <span className="font-semibold text-purple-600">
                    From KSh 150,000
                  </span>
                </div>
              </div>

              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Venue rental (8 hours)
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Basic decoration
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Sound system
                </li>
              </ul>
              <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 font-semibold transition-colors duration-300 rounded-md">
              Get Quote
            </button>
            </div>

            
          </div>

          {/* Corporate Team Building */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image width={1000} height={1000}
                loading='lazy'
                src="/teaching.webp"
                alt="Corporate Team Building"
                className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                <i className="ri-team-line text-purple-600 text-xl"></i>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Corporate Team Building
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Team-building packages combining kayaking races, cooking contests,
                and conservation education.
              </p>

              <div className="text-sm text-gray-500 mb-4">
                <div className="flex items-center mb-1">
                  <i className="ri-group-line mr-2"></i>
                  15–50 participants
                </div>
                <div className="flex items-center">
                  <i className="ri-price-tag-line mr-2"></i>
                  <span className="font-semibold text-purple-600">
                    From KSh 8,500/person
                  </span>
                </div>
              </div>

              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Full day program
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Team challenges
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Lunch & refreshments
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 mt-3 text-white px-4 py-3 font-semibold transition-colors duration-300 rounded-md">
              Get Quote
            </button>
            </div>

            
          </div>

          {/* Yoga & Wellness */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image width={1000} height={1000}
                loading='lazy'
                src="/yoga.webp"
                alt="Yoga & Wellness Retreats"
                className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-purple-600 text-xl"></i>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Yoga &amp; Wellness Retreats
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Serene yoga sessions on the lake deck, ideal for wellness and
                meditation retreats.
              </p>

              <div className="text-sm text-gray-500 mb-4">
                <div className="flex items-center mb-1">
                  <i className="ri-group-line mr-2"></i>
                  10-25 participants
                </div>
                <div className="flex items-center">
                  <i className="ri-price-tag-line mr-2"></i>
                  <span className="font-semibold text-purple-600">
                    From KSh 3,500/person
                  </span>
                </div>
              </div>

              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  2-hour session
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Professional instructor
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Yoga mats provided
                </li>
              </ul>
              <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 font-semibold transition-colors duration-300 rounded-md">
              Get Quote
            </button>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
