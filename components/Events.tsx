"use client"

import React, { useState } from 'react'
import Image from 'next/image'

type EventCardType = {
  title: string;
  description: string;
  image: string;
  icon: string;
  group: string;
  price: string;
  highlights: string[];
  button: string;
};

const eventCards: EventCardType[] = [
  {
    title: 'Wedding & Event Venue',
    description: 'Create magical moments with our rustic lakeside deck as the perfect backdrop for weddings and special celebrations.',
    image: 'https://readdy.ai/api/search-image?query=Romantic%20wedding%20ceremony%20setup%20on%20wooden%20deck%20over%20mangrove%20lake%20with%20elegant%20white%20decorations%2C%20tropical%20flowers%2C%20sunset%20lighting%2C%20Kenya%20coastal%20wedding%20venue%2C%20intimate%20outdoor%20celebration&amp;width=600&amp;height=400&amp;seq=wedding1&amp;orientation=landscape',
    icon: 'ri-heart-line',
    group: 'Up to 80 guests',
    price: 'From KSh 150,000',
    highlights: [
      'Venue rental (8 hours)',
      'Basic decoration',
      'Sound system',
    ],
    button: 'Get Quote',
  },
  {
    title: 'Corporate Team Building',
    description: 'Unique team-building packages combining kayaking races, cooking contests, and conservation education for Nairobi and Mombasa companies.',
    image: 'https://readdy.ai/api/search-image?query=Corporate%20team%20building%20activity%20with%20business%20professionals%20participating%20in%20kayaking%20challenge%20on%20mangrove%20lake%2C%20teamwork%20and%20leadership%20development%2C%20Kenya%20coastal%20corporate%20retreat%20experience&amp;width=600&amp;height=400&amp;seq=corporate1&amp;orientation=landscape',
    icon: 'ri-team-line',
    group: '15-50 participants',
    price: 'From KSh 8,500/person',
    highlights: [
      'Full day program',
      'Team challenges',
      'Lunch & refreshments',
    ],
    button: 'Get Quote',
  },
  {
    title: 'Yoga & Wellness Retreats',
    description: 'Serene morning and evening yoga sessions on the lake deck, perfect for wellness retreats and meditation programs.',
    image: 'https://readdy.ai/api/search-image?query=Peaceful%20yoga%20session%20on%20wooden%20deck%20over%20calm%20lake%20waters%20during%20golden%20sunrise%2C%20group%20of%20people%20in%20yoga%20poses%2C%20wellness%20retreat%20atmosphere%2C%20Kenya%20coastal%20meditation%20experience%2C%20tranquil%20natural%20setting&amp;width=600&amp;height=400&amp;seq=yoga1&amp;orientation=landscape',
    icon: 'ri-leaf-line',
    group: '10-25 participants',
    price: 'From KSh 3,500/person',
    highlights: [
      '2-hour session',
      'Professional instructor',
      'Yoga mats provided',
    ],
    button: 'Get Quote',
  },
];

const EventCard: React.FC<{ event: EventCardType }> = ({ event }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <Image
        width={600}
        height={400}
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
        <i className={`${event.icon} text-purple-600 text-xl`}></i>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-baker-signet">{event.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed font-outfit">{event.description}</p>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500">
            <div className="flex items-center mb-1">
              <i className="ri-group-line mr-2"></i>
              <span>{event.group}</span>
            </div>
            <div className="flex items-center">
              <i className="ri-price-tag-line mr-2"></i>
              <span className="font-semibold text-purple-600">{event.price}</span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          {event.highlights.map((h, i) => (
            <div className="flex items-center text-sm text-gray-600" key={i}>
              <i className="ri-check-line text-green-600 mr-2"></i>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer font-outfit">
        {event.button}
      </button>
    </div>
  </div>
);

const venueHighlights = [
  {
    icon: 'ri-landscape-line',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    title: 'Unique Setting',
    desc: 'Our lakeside deck over pristine mangroves provides an unforgettable backdrop that guests will remember forever.',
  },
  {
    icon: 'ri-service-line',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    title: 'Full Service',
    desc: 'From catering to entertainment, we handle every detail so you can focus on enjoying your special day.',
  },
  {
    icon: 'ri-leaf-line',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    title: 'Eco-Conscious',
    desc: 'Celebrate while supporting conservation - your event contributes to protecting this pristine ecosystem.',
  },
];

const Events: React.FC = () => {
  type ActivitySelection = { title: string; price?: string; duration?: string }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<ActivitySelection>({ title: '', price: '', duration: '' })

  const openModal = (activity: ActivitySelection) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget as HTMLFormElement)
    // For now just log booking data; replace with API call as needed
    // eslint-disable-next-line no-console
    console.log('Booking submitted', Object.fromEntries(form.entries()), { selectedActivity })
    closeModal()
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Activities &amp; <span className="text-blue-600">Tours</span></h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Immerse yourself in nature-based activities centered around the serene waters of Mida Creek and its rich mangrove ecosystem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Peaceful%20kayaking%20through%20narrow%20mangrove%20channels%20with%20lush%20green%20mangrove%20trees%20on%20both%20sides%2C%20calm%20reflective%20water%2C%20Kenya%20coastal%20ecosystem%2C%20eco-tourism%20activity%2C%20serene%20paddling%20experience%2C%20tropical%20paradise&amp;width=600&amp;height=400&amp;seq=activity1&amp;orientation=landscape" alt="Kayaking &amp; Canoeing" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-sailboat-line text-blue-600 text-xl"></i></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kayaking &amp; Canoeing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Paddle through the calm mangrove-lined lake in our one and two-person kayaks. Perfect for spotting wildlife up close.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>1-3 hours</span></div>
                  <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">KSh 500/hour</span></div>
                </div>
                <button onClick={() => openModal({ title: 'Kayaking & Canoeing', price: 'KSh 500/hour', duration: '1-3 hours' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Traditional%20wooden%20canoe%20with%20local%20guide%20navigating%20through%20pristine%20mangrove%20waterways%2C%20authentic%20Kenya%20coastal%20experience%2C%20cultural%20eco-tourism%2C%20peaceful%20creek%20exploration%2C%20mangrove%20conservation%20tour&amp;width=600&amp;height=400&amp;seq=activity2&amp;orientation=landscape" alt="Guided Boat Tours" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-ship-line text-blue-600 text-xl"></i></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guided Boat Tours</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Traditional canoe tours led by local guides offering a unique "prawns in their natural habitat" experience.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>2 hours</span></div>
                  <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">KSh 800/person</span></div>
                </div>
                <button onClick={() => openModal({ title: 'Guided Boat Tours', price: 'KSh 800/person', duration: '2 hours' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Wooden%20boardwalk%20winding%20through%20dense%20mangrove%20forest%20with%20visitors%20walking%20peacefully%2C%20natural%20lighting%20filtering%20through%20leaves%2C%20eco-tourism%20infrastructure%2C%20Kenya%20coastal%20nature%20trail%2C%20conservation%20education&amp;width=600&amp;height=400&amp;seq=activity3&amp;orientation=landscape" alt="Nature Walks" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-footprint-line text-blue-600 text-xl"></i></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nature Walks</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Explore our wooden boardwalk paths through mangroves and mudflats. Best experienced during low tide.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>45 minutes</span></div>
                  <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">Free with dining</span></div>
                </div>
                <button onClick={() => openModal({ title: 'Nature Walks', price: 'Free with dining', duration: '45 minutes' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Diverse%20wildlife%20in%20mangrove%20ecosystem%20including%20colorful%20coastal%20birds%2C%20mud%20crabs%20in%20their%20natural%20habitat%2C%20rich%20biodiversity%2C%20Kenya%20UNESCO%20biosphere%20reserve%20animals%2C%20peaceful%20wildlife%20observation&amp;width=600&amp;height=400&amp;seq=activity4&amp;orientation=landscape" alt="Wildlife Viewing" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-binoculars-line text-blue-600 text-xl"></i></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wildlife Viewing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Spot mangrove birds, mud crabs, and intertidal creatures. Bring binoculars for the best experience.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>All day</span></div>
                  <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">Free</span></div>
                </div>
                <button onClick={() => openModal({ title: 'Wildlife Viewing', price: 'Free', duration: 'All day' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Spectacular%20sunset%20view%20over%20mangrove%20creek%20with%20golden%20sky%20reflecting%20in%20calm%20waters%2C%20silhouettes%20of%20visitors%20on%20wooden%20deck%2C%20romantic%20evening%20atmosphere%2C%20Kenya%20coastal%20sunset%2C%20magical%20golden%20hour%20lighting&amp;width=600&amp;height=400&amp;seq=activity5&amp;orientation=landscape" alt="Sunset Viewing" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-sun-line text-blue-600 text-xl"></i></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sunset Viewing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Experience unbeatable sunsets over Mida Creek from our wooden terrace. A highlight for many visitors.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>6:00-7:30 PM</span></div>
                  <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">Free</span></div>
                </div>
                <button onClick={() => openModal({ title: 'Sunset Viewing', price: 'Free', duration: '6:00-7:30 PM' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Photographer%20capturing%20stunning%20mangrove%20landscape%20during%20golden%20hour%2C%20pristine%20natural%20setting%2C%20Kenya%20coastal%20photography%2C%20eco-tourism%20documentation%2C%20beautiful%20lighting%20through%20mangrove%20trees%2C%20artistic%20nature%20photography&amp;width=600&amp;height=400&amp;seq=activity6&amp;orientation=landscape" alt="Photography Tours" className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"><i className="ri-camera-line text-blue-600 text-xl"></i></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Photography Tours</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Capture the beauty of the mangrove ecosystem with guided photography sessions during golden hour.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-1"><i className="ri-time-line mr-2"></i><span>2 hours</span></div>
                  <div className="flex items-center"><i className="ri-price-tag-line mr-2"></i><span className="font-semibold text-blue-600">KSh 1,200/person</span></div>
                </div>
                <button onClick={() => openModal({ title: 'Photography Tours', price: 'KSh 1,200/person', duration: '2 hours' })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What Makes Our Tours Special</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><i className="ri-user-heart-line text-blue-600 text-xl"></i></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Expert Guides</h4>
                  <p className="text-gray-600">Our knowledgeable local guides share decades of experience and intimate knowledge of the ecosystem.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><i className="ri-leaf-line text-emerald-600 text-xl"></i></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Experience</h4>
                  <p className="text-gray-600">All activities are designed to minimize environmental impact while maximizing education and enjoyment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"><i className="ri-group-line text-orange-600 text-xl"></i></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Family Friendly</h4>
                  <p className="text-gray-600">Perfect for families with children and even pet-friendly options for a complete family adventure.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://readdy.ai/api/search-image?query=Happy%20family%20enjoying%20eco-tourism%20activities%20in%20mangrove%20environment%2C%20parents%20and%20children%20on%20wooden%20boardwalk%2C%20peaceful%20nature%20experience%2C%20Kenya%20coastal%20family%20vacation%2C%20conservation%20education%2C%20multi-generational%20outdoor%20adventure&amp;width=600&amp;height=500&amp;seq=family&amp;orientation=portrait" alt="Family activities" className="w-full h-96 object-cover object-top rounded-xl shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Perfect for All Ages</h4>
              <p className="text-sm opacity-90">Create lasting memories with your loved ones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking modal (controlled) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Book Activity</h2>
                <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"><i className="ri-close-line text-xl text-gray-500"></i></button>
              </div>
              <p className="text-gray-600 mt-2">Reserve your spot for {selectedActivity.title || 'the activity'}</p>
            </div>
            <form onSubmit={handleBookingSubmit} data-readdy-form="true" id="activities-booking" className="p-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{selectedActivity.title}</h3>
                <div className="flex justify-between text-sm text-gray-700"><span>Duration: {selectedActivity.duration}</span><span className="font-semibold text-blue-600">{selectedActivity.price}</span></div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Activity *</label>
                  <input readOnly className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700" type="text" value={selectedActivity.title} name="activity" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" placeholder="Your full name" type="text" name="fullName" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" placeholder="your@email.com" type="email" name="email" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" placeholder="+254 700 123 456" type="tel" name="phone" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                    <input required min="2025-11-12" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" type="date" name="preferredDate" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of People *</label>
                    <select name="numberOfPeople" required className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300">
                      <option value="">Select</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7">7 People</option>
                      <option value="8">8 People</option>
                      <option value="9">9 People</option>
                      <option value="10+">10+ People</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                  <select name="preferredTime" className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300">
                    <option value="">Any time</option>
                    <option value="Morning (8:00-12:00)">Morning (8:00-12:00)</option>
                    <option value="Afternoon (12:00-16:00)">Afternoon (12:00-16:00)</option>
                    <option value="Evening (16:00-18:00)">Evening (16:00-18:00)</option>
                    <option value="Sunset (18:00-19:30)">Sunset (18:00-19:30)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                  <textarea name="specialRequests" rows={3} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none" placeholder="Any special requirements or questions..."></textarea>
                  <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Booking Information</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• All equipment and safety gear included</li>
                  <li>• Professional guide for paid activities</li>
                  <li>• Confirmation within 2 hours of booking</li>
                  <li>• Free cancellation up to 24 hours before</li>
                  <li>• Group discounts available for 8+ people</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button type="button" onClick={closeModal} className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer">Cancel</button>
                <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer disabled:cursor-not-allowed">Book Activity</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Events
