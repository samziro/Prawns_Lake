'use client'

import React from "react";
import Image from "next/image";

export default function Tour() {
    return (
        <div id="activities">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Activities &amp; <span className="text-blue-600">Tours</span></h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Immerse yourself in nature-based activities centered around the serene waters of Mida Creek and its rich mangrove ecosystem</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <Image width={1000} height={1000} src="/canoe.webp" alt="Kayaking &amp; Canoeing" className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <i className="ri-sailboat-line text-blue-600 text-xl"></i></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Kayaking &amp; Canoeing</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">Paddle through the calm mangrove-lined lake in our one and two-person kayaks. Perfect for spotting wildlife up close.</p>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        <div className="flex items-center mb-1">
                                            <i className="ri-time-line mr-2"></i><span>1 - 3 hours</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="ri-price-tag-line mr-2">
                                            </i><span className="font-semibold text-blue-600">KSh 500/hour</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <Image height={1000} width={1000} src="/guide.webp" alt="Guided Boat Tours" className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <i className="ri-ship-line text-blue-600 text-xl"></i>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Guided Boat Tours</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">Traditional canoe tours led by local guides offering a unique "prawns in their natural habitat" experience.</p>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        <div className="flex items-center mb-1">
                                            <i className="ri-time-line mr-2"></i><span>2 hours</span>
                                        </div>
                                        <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">KSh 800/person</span></div></div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <Image width={1000} height={1000} src="/nature_walk.webp" alt="Nature Walks" className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-footprint-line text-blue-600 text-xl"></i></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Nature Walks</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">Explore our wooden boardwalk paths through mangroves and mudflats. Best experienced during low tide.</p>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>45 minutes</span></div>
                                        <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">Free with dining</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <Image height={1000} width={1000} loading='lazy' src="/wildlife.webp" alt="Wildlife Viewing" className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-binoculars-line text-blue-600 text-xl"></i></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Wildlife Viewing</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">Spot mangrove birds, mud crabs, and intertidal creatures. Bring binoculars for the best experience.</p>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>All day</span>
                                        </div>
                                        <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">Free</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <Image width={1000} height={1000} loading='lazy' src="/sun.webp" alt="Sunset Viewing" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"/>
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-sun-line text-blue-600 text-xl"></i>
                            </div>
                            </div>
                            <div className="p-6">

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Sunset Viewing</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">Experience unbeatable sunsets over Mida Creek from our wooden terrace. A highlight for many visitors.</p>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i>
                                            <span>6:00-7:30 PM</span></div>
                                        <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i>
                                            <span className="font-semibold text-blue-600">Free</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"><div className="relative overflow-hidden"> <Image width={1000} height={1000} src="/camera.webp" alt="" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-camera-line text-blue-600 text-xl"></i></div></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Photography Tours</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">Capture the beauty of the mangrove ecosystem with guided photography sessions during golden hour.</p>
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>2 hours</span></div>
                                    <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">KSh 1,200/person</span></div>
                                </div><button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">What Makes Our Tours Special</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><i className="ri-user-heart-line text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Expert Guides</h4>
                                    <p className="text-gray-600">Our knowledgeable local guides share decades of experience and intimate knowledge of the ecosystem.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><i className="ri-leaf-line text-emerald-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Experience</h4>
                                    <p className="text-gray-600">All activities are designed to minimize environmental impact while maximizing education and enjoyment.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><i className="ri-group-line text-orange-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Family Friendly</h4>
                                    <p className="text-gray-600">Perfect for families with children and even pet-friendly options for a complete family adventure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image width={1000} height={1000} src="/ages.webp" alt="Family activities" className="w-full h-96 object-cover object-center rounded-xl shadow-lg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl">
                        </div>

                        <div className="absolute bottom-6 left-6 text-white">
                            <h4 className="text-xl font-bold mb-2">Perfect for All Ages</h4>
                            <p className="text-sm opacity-90">Create lasting memories with your loved ones</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

}
