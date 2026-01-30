import React from 'react'

import Image from 'next/image'

const Conservation = () => {
  return (
    <div id="conservation">
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Conservation &amp; <span className="text-emerald-600">Community Impact</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Every visit supports local livelihoods and environmental protection through our community-based conservation initiatives</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Conservation Mission</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>Prawns Lake is operated by the Prawns Lake Conservation Group, a dedicated community-based organization committed to protecting the delicate mangrove ecosystem of Mida Creek while providing sustainable livelihoods for local families.</p>
                <p>All proceeds from dining and activities are reinvested directly into the local community and coastal conservation efforts. By visiting us, you become part of a larger movement to preserve one of Kenya's most important coastal ecosystems.</p>
                <p>Our partnership with regional conservation organizations like COBEC and SeaTrees has enabled us to employ hundreds of locals in mangrove restoration projects, creating a model for community-driven conservation across the East African coast.</p>
              </div>
              <div className="mt-8 p-6 bg-emerald-100 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-800 mb-3">How Your Visit Helps</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-center"><i className="ri-check-line text-emerald-600 mr-3"></i><span>Funds mangrove restoration projects</span></li>
                  <li className="flex items-center"><i className="ri-check-line text-emerald-600 mr-3"></i><span>Creates employment for local villagers</span></li>
                  <li className="flex items-center"><i className="ri-check-line text-emerald-600 mr-3"></i><span>Supports environmental education programs</span></li>
                  <li className="flex items-center"><i className="ri-check-line text-emerald-600 mr-3"></i><span>Protects critical wildlife habitats</span></li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <Image width={1000} height={1000} loading='lazy' src="/plant1.webp" alt="Community conservation work" className="w-full h-64 object-cover object-center rounded-xl shadow-lg" />
              <div className="grid grid-cols-2 gap-4">
                <Image width={1000} height={1000} loading='lazy' src="/beach.webp" alt="Mangrove nursery" className="w-full h-32 object-cover object-center rounded-lg shadow-lg" />
                <Image width={1000} height={1000} loading='lazy' src="/plant.webp" alt="Environmental education" className="w-full h-32 object-cover object-top rounded-lg shadow-lg" />
              </div>
              <Image width={1000} height={1000} loading='lazy' src="/nursery.webp" alt="Community conservation work" className="w-full h-64 object-cover object-center rounded-xl shadow-lg" />
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact in Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="ri-user-3-line text-emerald-600 text-2xl"></i></div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Local Jobs Created</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="ri-leaf-line text-emerald-600 text-2xl"></i></div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Hectares Protected</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="ri-plant-line text-emerald-600 text-2xl"></i></div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
                <div className="text-gray-600 text-sm">Mangroves Planted</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="ri-time-line text-emerald-600 text-2xl"></i></div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Years of Conservation</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Conservation Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">COBEC</h4>
                <p className="text-gray-600 text-sm">Coastal &amp; Ocean Basin Environment Consortium</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">SeaTrees</h4>
                <p className="text-gray-600 text-sm">Blue Carbon Conservation Program</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">UNESCO</h4>
                <p className="text-gray-600 text-sm">Malindi-Watamu Biosphere Reserve</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Community</h4>
                <p className="text-gray-600 text-sm">Prawns Lake Conservation Group</p>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Conservation Efforts</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Become part of our mission to protect and restore the precious mangrove ecosystems of Mida Creek for future generations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Volunteer With Us</button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">Make a Donation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Conservation
