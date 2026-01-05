'use client'

import React from 'react'
import Image from "next/image"

const visitInfo = [
	{
		icon: "ri-map-pin-line",
		bg: "bg-emerald-100",
		color: "text-emerald-600",
		title: "Location",
		lines: [
			"Turtle Bay Road, Watamu",
			"Kilifi County, Kenya",
			<span className="text-gray-600 text-sm mt-1" key="desc">Mida Creek, Malindi-Watamu UNESCO Biosphere Reserve</span>
		]
	},
	{
		icon: "ri-time-line",
		bg: "bg-blue-100",
		color: "text-blue-600",
		title: "Opening Hours",
		lines: [
			"Daily: 9:00 AM - 8:00 PM",
			<span className="text-gray-600 text-sm mt-1" key="sunset">Best sunset viewing: 6:00 - 7:30 PM</span>,
			<span className="text-gray-600 text-sm" key="tide">Low tide walks: Check tide times</span>
		]
	},
	{
		icon: "ri-phone-line",
		bg: "bg-orange-100",
		color: "text-orange-600",
		title: "Contact",
		lines: [
			"+254 700 123 456",
			"info@prawnslake.co.ke",
			<span className="text-gray-600 text-sm mt-1" key="reserv">Reservations recommended for sunset dining</span>
		]
	},
	{
		icon: "ri-car-line",
		bg: "bg-purple-100",
		color: "text-purple-600",
		title: "Getting Here",
		lines: [
			"30 minutes from Malindi Airport",
			"15 minutes from Watamu town center",
			<span className="text-gray-600 text-sm mt-1" key="tuktuk">Tuk-tuk and taxi services available</span>
		]
	}
];

const bringList = [
	[
		{ icon: "ri-camera-line", text: "Camera for wildlife" },
		{ icon: "ri-shirt-line", text: "Comfortable clothing" },
		{ icon: "ri-umbrella-line", text: "Sun protection" }
	],
	[
		{ icon: "ri-binoculars-line", text: "Binoculars (optional)" },
		{ icon: "ri-footprint-line", text: "Walking shoes" },
		{ icon: "ri-bug-line", text: "Insect repellent" }
	]
];

const newExperiences = [
	{ icon: "ri-moon-line", text: "Night canoe tours with fireflies" },
	{ icon: "ri-chef-hat-line", text: "Cooking classes & culinary experiences" },
	{ icon: "ri-heart-line", text: "Wedding & event venue services" }
];

const Contact = () => {
	return (
		<div id="contact">
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-baker-signet">
							Plan Your <span className="text-emerald-600">Visit</span>
						</h2>
						<p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-outfit">
							Experience the magic of Prawns Lake Conservation Project. We're here to help you plan the perfect visit to our mangrove paradise.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div>
							<div className="bg-white rounded-xl shadow-lg p-8 mb-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-6 font-baker-signet">Visit Information</h3>
								<div className="space-y-6">
									{visitInfo.map((info, idx) => (
										<div className="flex items-start" key={idx}>
											<div className={`w-12 h-12 ${info.bg} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
												<i className={`${info.icon} ${info.color} text-xl`}></i>
											</div>
											<div>
												<h4 className="text-lg font-semibold text-gray-900 mb-2 font-baker-signet">{info.title}</h4>
												{info.lines.map((line, i) =>
													<p className="text-gray-700 font-outfit" key={i}>{line}</p>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="bg-emerald-600 text-white rounded-xl p-8">
								<h3 className="text-xl font-bold mb-6 font-baker-signet">What to Bring</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
									{bringList.map((col, i) => (
										<div className="space-y-3" key={i}>
											{col.map((item, j) => (
												<div className="flex items-center font-outfit" key={j}>
													<i className={`${item.icon} text-emerald-200 mr-3`}></i>
													<span>{item.text}</span>
												</div>
											))}
										</div>
									))}
								</div>
								<div className="border-t border-emerald-500 pt-4">
									<h4 className="font-semibold mb-3 font-baker-signet">New Experiences Available</h4>
									<div className="space-y-2 text-sm">
										{newExperiences.map((exp, idx) => (
											<div className="flex items-center font-outfit" key={idx}>
												<i className={`${exp.icon} text-emerald-200 mr-2`}></i>
												<span>{exp.text}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<div className="h-64">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.234567890123!2d40.1234567!3d-3.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWatamu%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										title="Prawns Lake Location"
									></iframe>
								</div>
								<div className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6 font-baker-signet">Contact Us</h3>
									<form className="space-y-6">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											<div>
												<label className="block text-sm font-semibold text-gray-700 mb-2 font-outfit">Name</label>
												<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 font-outfit" placeholder="Your name" />
											</div>
											<div>
												<label className="block text-sm font-semibold text-gray-700 mb-2 font-outfit">Phone</label>
												<input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 font-outfit" placeholder="Your phone" />
											</div>
										</div>
										<div>
											<label className="block text-sm font-semibold text-gray-700 mb-2 font-outfit">Email</label>
											<input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 font-outfit" placeholder="your@email.com" />
										</div>
										<div>
											<label className="block text-sm font-semibold text-gray-700 mb-2 font-outfit">Visit Date</label>
											<input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 font-outfit" />
										</div>
										<div>
											<label className="block text-sm font-semibold text-gray-700 mb-2 font-outfit">Message</label>
											<textarea rows={4} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 resize-none font-outfit" placeholder="Tell us about your planned visit..." />
										</div>
										<button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer font-baker-signet">
											Send Message
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
