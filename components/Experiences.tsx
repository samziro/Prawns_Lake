'use client';

import React from 'react';
import Image from 'next/image';

type Experience = {
  title: string;
  description: string;
  image: string;
  icon: string;
  duration: string;
  price: string;
  highlights: string[];
  badge?: string;
};

const experiences: Experience[] = [
  {
    title: 'Night Canoe & Firefly Tours',
    description:
      "Experience the magical nocturnal side of Mida Creek with guided evening kayak tours featuring lanterns and firefly watching.",
    image:
      '/ages.webp',
    icon: 'ri-moon-line',
    duration: '2 hours',
    price: 'KSh 1,500/person',
    highlights: [
      'Professional guide',
      'Waterproof lanterns',
      'Safety equipment',
    ],
    badge: 'Premium',
  },
  {
    title: 'Guided Bird-Watching Tours',
    description:
      'Join trained naturalists for comprehensive bird-watching experiences through diverse mangrove habitats.',
    image:
      '/birds.webp',
    icon: 'ri-binoculars-line',
    duration: '1.5 hours',
    price: 'KSh 800/person',
    highlights: [
      'Expert naturalist guide',
      'Binocular rental included',
      'Bird identification booklet',
    ],
  },
  {
    title: 'Catch & Release Prawn Experience',
    description:
      'Family-friendly conservation-minded mini fishing experience perfect for children and beginners.',
    image:
      '/view.webp',
    icon: 'ri-fish-line',
    duration: '1 hour',
    price: 'KSh 600/person',
    highlights: [
      'All equipment provided',
      'Expert guide instruction',
      'Conservation education',
    ],
  },
];

const BookButton: React.FC = () => (
  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer font-outfit">
    Book Experience
  </button>
);

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <Image
        width={600}
        height={400}
        loading='lazy'
        src={exp.image}
        alt={exp.title}
        className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
        <i className={`${exp.icon} text-indigo-600 text-xl`}></i>
      </div>
      {exp.badge && (
        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold font-outfit">
          {exp.badge}
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-baker-signet">
        {exp.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed font-outfit">
        {exp.description}
      </p>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500">
            <div className="flex items-center mb-1">
              <i className="ri-time-line mr-2"></i>
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center">
              <i className="ri-price-tag-line mr-2"></i>
              <span className="font-semibold text-indigo-600">
                {exp.price}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          {exp.highlights.map((h, i) => (
            <div key={i} className="flex items-center text-sm text-gray-600">
              <i className="ri-check-line text-green-600 mr-2"></i>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
      <BookButton />
    </div>
  </div>
);

const Experiences: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-baker-signet">
            Premium <span className="text-indigo-600">Experiences</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-outfit">
            Discover exclusive eco-tourism adventures designed to create unforgettable memories while supporting conservation efforts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, idx) => (
            <ExperienceCard exp={exp} key={idx} />
          ))}
        </div>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4 font-baker-signet">
            Create Unforgettable Memories
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto font-outfit">
            Each premium experience is carefully crafted to provide authentic encounters with nature while contributing directly to mangrove conservation
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <i className="ri-shield-check-line text-indigo-200 mr-2"></i>
              <span>Expert Local Guides</span>
            </div>
            <div className="flex items-center">
              <i className="ri-leaf-line text-indigo-200 mr-2"></i>
              <span>Conservation Focus</span>
            </div>
            <div className="flex items-center">
              <i className="ri-star-line text-indigo-200 mr-2"></i>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center">
              <i className="ri-camera-line text-indigo-200 mr-2"></i>
              <span>Photography Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;