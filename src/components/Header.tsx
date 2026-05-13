"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Drones", href: "/drones" },
    { label: "Solar Energy", href: "/solar-energy" },
    { label: "Electrical", href: "/electrical" },
    { label: "Search & Rescue", href: "/search-rescue" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-[#5740C0] pt-8 pb-6 z-50">
      <nav className="flex justify-between items-center max-w-[1240px] mx-auto w-full px-[20px] md:px-0">
        <Link href="/" className="flex-shrink-0">
          <img src="/gruds-logo.svg" alt="Grubs Electric Ltd." width={150} height={61} className="w-[150px] h-auto" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-avant font-bold text-white tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative group transition-colors py-1 text-base"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#73C04A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Slide Down */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#5D45A5] overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 border-t border-[#4A3784]' : 'max-h-0'}`}
      >
        <div className="flex flex-col px-[20px] py-4 space-y-4 font-avant font-bold text-white">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block hover:text-[#73C04A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}