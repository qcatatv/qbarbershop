import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Scissors, 
  Twitter 
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1E29] text-white relative">
      {/* Angular Top Edge with Red Accent */}
      <div className="absolute top-0 left-0 right-0 h-12 w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-[#F05D5E]" 
             style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 30% 0, 0 100%)" }}>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="bg-[#F05D5E] p-2 transform -skew-x-12">
                <Scissors className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bebas ml-3 tracking-wider text-white">
                Q<span className="text-[#F05D5E]">BARBER</span>
              </h3>
            </div>
            
            <p className="text-[#E7ECEF] mb-8 leading-relaxed font-roboto max-w-md">
              Modern cutting-edge barbershop delivering premium grooming experiences.
              Our skilled team combines technical precision with contemporary style to 
              craft your perfect look.
            </p>
            
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[#2D3142] hover:bg-[#F05D5E] p-2.5 transform -skew-x-12 transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="text-white group-hover:scale-110 transition-transform" size={18} />
              </a>
              <a
                href="#"
                className="bg-[#2D3142] hover:bg-[#F05D5E] p-2.5 transform -skew-x-12 transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="text-white group-hover:scale-110 transition-transform" size={18} />
              </a>
              <a
                href="#"
                className="bg-[#2D3142] hover:bg-[#F05D5E] p-2.5 transform -skew-x-12 transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="text-white group-hover:scale-110 transition-transform" size={18} />
              </a>
              <a
                href="#"
                className="bg-[#2D3142] hover:bg-[#F05D5E] p-2.5 transform -skew-x-12 transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white group-hover:scale-110 transition-transform" size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-2xl font-bebas tracking-wider text-white mb-6 relative pl-3 border-l-4 border-[#F05D5E]">
              CONTACT US
            </h4>
            <div className="space-y-5 font-roboto">
              <div className="flex items-start">
                <div className="bg-[#2D3142] p-2 transform -skew-x-12 mr-4 mt-1">
                  <MapPin className="text-[#F05D5E]" size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">123 Edge Street</p>
                  <p className="text-[#B5BEC6]">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#2D3142] p-2 transform -skew-x-12 mr-4">
                  <Phone className="text-[#F05D5E]" size={18} />
                </div>
                <p className="text-white">+1 234 567 8901</p>
              </div>

              <div className="flex items-center">
                <div className="bg-[#2D3142] p-2 transform -skew-x-12 mr-4">
                  <Mail className="text-[#F05D5E]" size={18} />
                </div>
                <p className="text-white">contact@qbarbershop.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-2xl font-bebas tracking-wider text-white mb-6 relative pl-3 border-l-4 border-[#F05D5E]">
              OPENING HOURS
            </h4>
            <div className="space-y-3 font-roboto">
              <div className="bg-[#2D3142] p-3 flex justify-between transform hover:-skew-x-3 transition-transform duration-300">
                <span className="text-[#B5BEC6]">Monday - Friday</span>
                <span className="text-white font-medium">09:00 - 20:00</span>
              </div>
              <div className="bg-[#2D3142] p-3 flex justify-between transform hover:-skew-x-3 transition-transform duration-300">
                <span className="text-[#B5BEC6]">Saturday</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </div>
              <div className="bg-[#2D3142] p-3 flex justify-between transform hover:-skew-x-3 transition-transform duration-300">
                <span className="text-[#B5BEC6]">Sunday</span>
                <span className="text-white font-medium">10:00 - 16:00</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#appointment"
                className="bg-[#F05D5E] hover:bg-[#E34A4C] text-white px-6 py-3 font-bebas tracking-wide text-lg transform -skew-x-12 inline-block transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block transform skew-x-12">BOOK NOW</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 border border-[#3D4663] bg-[#2D3142] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F05D5E] opacity-10" 
               style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h4 className="text-2xl font-bebas tracking-wider text-white mb-2">GET THE LATEST UPDATES</h4>
              <p className="text-[#B5BEC6] font-roboto">Subscribe to receive special offers and styling tips</p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[#1A1E29] text-white px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#F05D5E] font-roboto" 
                />
                <button className="bg-[#F05D5E] hover:bg-[#E34A4C] text-white px-6 py-3 transform -skew-x-12 transition-all duration-300 font-bebas tracking-wide">
                  <span className="inline-block transform skew-x-12">SUBSCRIBE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3D4663] bg-[#151821]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#B5BEC6] text-sm font-roboto">
              © 2025 QBARBERSHOP. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a
                href="#"
                className="text-[#B5BEC6] hover:text-[#F05D5E] text-sm transition-colors font-roboto"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#B5BEC6] hover:text-[#F05D5E] text-sm transition-colors font-roboto"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
