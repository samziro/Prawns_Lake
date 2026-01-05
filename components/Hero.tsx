'use client'

import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="relative h-screen overflow-hidden" id="hero">
    <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
      <img
        src="https://readdy.ai/api/search-image?query=Spectacular%20sunset%20over%20mangrove%20creek%20with%20golden%20sky%20reflecting%20in%20calm%20waters%2C%20restaurant%20on%20stilts%20silhouetted%20against%20evening%20light%2C%20Kenya%20coastal%20paradise%2C%20romantic%20dining%20atmosphere%2C%20peaceful%20conservation%20site&amp;width=1200&amp;height=600&amp;seq=hero1&amp;orientation=landscape"
        alt="Prawns Lake 1"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
      <img
        src="https://readdy.ai/api/search-image?query=Rustic%20wooden%20restaurant%20built%20on%20stilts%20over%20pristine%20mangrove%20waters%20with%20lush%20green%20mangrove%20forest%20surrounding%2C%20Kenya%20eco-tourism%20destination%2C%20authentic%20coastal%20architecture%2C%20serene%20natural%20setting&amp;width=1200&amp;height=600&amp;seq=hero2&amp;orientation=landscape"
        alt="Prawns Lake 2"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="absolute inset-0 transition-opacity duration-1000 opacity-0">
      <img
        src="https://readdy.ai/api/search-image?query=Traditional%20wooden%20canoe%20gliding%20through%20narrow%20mangrove%20channels%20with%20crystal%20clear%20reflections%2C%20Kenya%20coastal%20eco-tourism%2C%20peaceful%20water%20activities%2C%20pristine%20natural%20environment%2C%20conservation%20paradise&amp;width=1200&amp;height=600&amp;seq=hero3&amp;orientation=landscape"
        alt="Prawns Lake 3"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 h-full flex items-center pt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-baker-signet">
            <span className="font-baker-signet text-emerald-400 block text-3xl md:text-4xl mb-4">
              Prawns Lake
            </span>
            Conservation Project
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-outfit">
            Experience authentic eco-tourism in Kenya's pristine mangrove
            paradise. Fresh seafood, nature adventures, and conservation that
            makes a difference.
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90 font-outfit">
            Turtle Bay Road, Watamu • Malindi-Watamu UNESCO Biosphere Reserve
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button>Explore Our Menu</Button>
            <Button variant="secondary">Book Activities</Button>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer bg-white/50"></button>
      <button className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer bg-white"></button>
      <button className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer bg-white/50"></button>
    </div>
    <div className="absolute bottom-8 right-8">
      <button className="animate-bounce bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer">
        <i className="ri-arrow-down-line text-2xl"></i>
      </button>
    </div>
  </section>
);

export default Hero;
