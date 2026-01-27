'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-auto">
                    <div className="flex-shrink-0">
                        {scrolled ? <Image width={80} height={80} src="/black_logo.webp"alt="Prawns Lake Logo"className=""/> : <Image width={80} height={80} src="/white_logo.webp"alt="Prawns Lake Logo"className=""/>}
                        
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {["About", "Dining", "Activities", "Stay", "Conservation", "Contact"].map((item) => (
                                <button
                                    key={item}
                                    className={`px-3  text-sm md:text-lg font-semibold transition-colors duration-300 hover:scale-105 transform cursor-pointer whitespace-nowrap ${scrolled ? 'text-emerald-600 hover:text-emerald-400' : 'text-white hover:text-emerald-300'}`}
                                >
                                    {item}
                                </button>
                            ))}
                            <button className="px-6 py-2 rounded-full text-sm md:text-lg font-semibold  font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap bg-white text-emerald-600 hover:bg-emerald-50">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className={`p-2 rounded-md transition-colors duration-300 cursor-pointer ${scrolled ? 'text-emerald-600' : 'text-white'} hover:text-emerald-300 hover:bg-white/10`}>
                            <i className="text-xl ri-menu-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
