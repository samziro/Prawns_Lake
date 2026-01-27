'use client'

import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div id="about">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Welcome to Our<span className="text-emerald-600 block">Mangrove Paradise</span></h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>Nestled in the heart of Mida Creek, Prawns Lake is a community-run ecotourism gem located on Turtle Bay Road in Watamu, Kilifi County, Kenya. Our unique location sits within the pristine mangrove-fringed estuary, part of the prestigious Malindi-Watamu UNESCO Biosphere Reserve.</p>
                <p>This serene setting features extensive tidal mudflats and mangrove swamps that provide sanctuary for migratory birds, sea turtles, and diverse wildlife. Our rustic lakeside restaurant serves as both a culinary destination and a beacon for conservation efforts in the region.</p>
                <p>Experience the tranquility of nature while enjoying fresh, locally-sourced seafood in an environment where every visit contributes to the preservation of this precious ecosystem.</p></div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-emerald-50 rounded-lg">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-leaf-line text-emerald-600 text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">UNESCO Biosphere</h3>
                  <p className="text-gray-600 text-sm">Protected ecosystem within Malindi-Watamu Reserve</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-community-line text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community-Run</h3>
                  <p className="text-gray-600 text-sm">Supporting local livelihoods and conservation</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <Image width={1000} height={1000} src="/area.webp" alt="Mangrove ecosystem" className="w-full h-48 object-cover object-center rounded-lg shadow-lg" />
                  <Image width={1000} height={1000} src="/path.webp" alt="Wooden boardwalk" className="w-full h-32 object-cover object-center rounded-lg shadow-lg" />
                </div>
                <div className="space-y-4 mt-8">
                  <Image width={1000} height={1000} src="/aerial.webp" alt="Wildlife" className="w-full h-32 object-cover object-center rounded-lg shadow-lg" />
                  <Image width={1000} height={1000} src="/sunset.webp" alt="Aerial view" className="w-full h-48 object-cover object-center rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
