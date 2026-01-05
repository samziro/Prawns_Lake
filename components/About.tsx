'use client'

import React from 'react'


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
                    <img src="https://readdy.ai/api/search-image?query=Beautiful%20mangrove%20swamp%20ecosystem%20with%20lush%20green%20mangrove%20trees%20reflected%20in%20calm%20creek%20waters%2C%20tropical%20Kenya%20coastal%20environment%2C%20pristine%20natural%20habitat%2C%20serene%20mudflats%20visible%2C%20UNESCO%20biosphere%20reserve%20setting%2C%20peaceful%20wildlife%20sanctuary&amp;width=400&amp;height=500&amp;seq=about1&amp;orientation=portrait" alt="Mangrove ecosystem" className="w-full h-48 object-cover object-top rounded-lg shadow-lg" />
                  <img src="https://readdy.ai/api/search-image?query=Traditional%20wooden%20boardwalk%20pathway%20through%20dense%20mangrove%20forest%20leading%20to%20water%2C%20rustic%20eco-tourism%20infrastructure%2C%20natural%20wood%20construction%20blending%20with%20environment%2C%20Kenya%20coastal%20mangrove%20conservation%20area%2C%20peaceful%20nature%20trail&amp;width=400&amp;height=300&amp;seq=about2&amp;orientation=landscape" alt="Wooden boardwalk" className="w-full h-32 object-cover object-top rounded-lg shadow-lg" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src="https://readdy.ai/api/search-image?query=Diverse%20wildlife%20in%20mangrove%20ecosystem%20including%20colorful%20migratory%20birds%2C%20mud%20crabs%2C%20and%20marine%20life%2C%20Kenya%20coastal%20biodiversity%2C%20natural%20habitat%20preservation%2C%20UNESCO%20biosphere%20wildlife%2C%20peaceful%20creek%20environment&amp;width=400&amp;height=300&amp;seq=about3&amp;orientation=landscape" alt="Wildlife" className="w-full h-32 object-cover object-top rounded-lg shadow-lg" />
                  <img src="https://readdy.ai/api/search-image?query=Stunning%20aerial%20view%20of%20Mida%20Creek%20estuary%20with%20winding%20waterways%20through%20mangrove%20forests%2C%20tidal%20mudflats%2C%20and%20pristine%20coastal%20landscape%2C%20Kenya%20UNESCO%20biosphere%20reserve%2C%20conservation%20paradise%20from%20above&amp;width=400&amp;height=500&amp;seq=about4&amp;orientation=portrait" alt="Aerial view" className="w-full h-48 object-cover object-top rounded-lg shadow-lg" />
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
