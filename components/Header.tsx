'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const menuItems = ["About", "Dining", "Activities", "Stay", "Conservation", "Contact"]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              width={80}
              height={80}
              loading="lazy"
              src={scrolled ? "/black_logo.webp" : "/white_logo.webp"}
              alt="Prawns Lake Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                className={`text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105
                ${scrolled
                    ? 'text-emerald-600 hover:text-emerald-400'
                    : 'text-white hover:text-emerald-300'
                  }`}
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-2 rounded-full text-sm lg:text-lg font-semibold bg-white text-emerald-600 hover:bg-emerald-50 transition">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-md transition 
              ${scrolled ? 'text-emerald-600' : 'text-white'}`}
            >
              <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
        ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        ${scrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-md'}`}
      >
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left text-lg font-semibold
              ${scrolled ? 'text-emerald-600' : 'text-white'}
              hover:text-emerald-400`}
            >
              {item}
            </button>
          ))}

          <button className="w-full mt-4 px-6 py-3 rounded-full text-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
