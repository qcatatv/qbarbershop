"use client";

import { Menu, Scissors, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white py-3 shadow-lg" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`font-bebas text-3xl tracking-wider flex items-center ${isScrolled ? 'text-[#2D3142]' : 'text-white'}`}>
              <div className={`mr-2 p-1 ${isScrolled ? 'bg-[#F05D5E]' : 'bg-white'} text-white`}>
                <Scissors className={`${isScrolled ? 'text-white' : 'text-[#2D3142]'}`} size={20} />
              </div>
              <span>Q<span className="text-[#F05D5E]">BARBER</span></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex font-medium">
            <div className="flex items-center">
              {["HOME", "SERVICES", "GALLERY", "TEAM", "CONTACT"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className={`
                    relative px-4 py-2 mx-2 font-medium text-sm tracking-widest
                    ${isScrolled ? 'text-[#2D3142]' : 'text-white'} 
                    hover:text-[#F05D5E] transition-colors duration-300
                    after:content-[''] after:absolute after:w-0 after:h-[2px] 
                    after:bg-[#F05D5E] after:left-0 after:bottom-0 
                    after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#appointment"
              className="btn-primary"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-[#2D3142]' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden h-screen">
            <nav className="container-custom py-8">
              <div className="flex flex-col">
                {["HOME", "SERVICES", "GALLERY", "TEAM", "CONTACT"].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#2D3142] py-4 border-b border-[#BFC0C0]/20 font-medium text-2xl tracking-widest hover:text-[#F05D5E] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[#F05D5E] mr-2 font-light">/</span> {item}
                  </a>
                ))}
                
                <div className="mt-8">
                  <a
                    href="#appointment"
                    className="btn-primary w-full block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BOOK NOW
                  </a>
                </div>
                
                <div className="mt-12 flex justify-center space-x-6">
                  <a href="#" className="text-[#2D3142] hover:text-[#F05D5E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#2D3142] hover:text-[#F05D5E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
