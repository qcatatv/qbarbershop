import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/90 to-[#2D3142]/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
      </div>
      
      {/* Diagonal Accent Line */}
      <div className="absolute top-0 right-0 w-1/2 h-1 bg-[#F05D5E]"></div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom mx-auto pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content - Main Text */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center mb-6 py-1 px-3 border-2 border-[#F05D5E]">
                <span className="text-[#F05D5E] tracking-widest text-sm font-medium">SINCE 2015</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bebas tracking-wider leading-none text-white mb-6">
                THE MODERN <br/>
                <span className="text-[#F05D5E]">BARBERSHOP</span> <br/>
                EXPERIENCE
              </h1>

              <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-lg">
                Where style meets precision. Our expert barbers deliver exceptional cuts, trims, and grooming services for the modern man.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#appointment" className="btn-primary">BOOK APPOINTMENT</a>
                <a href="#services" className="btn-outline">OUR SERVICES</a>
              </div>
            </div>
          </div>

          {/* Right Content - Image Cards */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {/* Image 1 */}
              <div className="transform hover:scale-105 transition-transform duration-500 ease-out">
                <div className="h-64 md:h-72 bg-[#F05D5E]/10 backdrop-blur-sm p-1 relative">
                  <div className="h-full w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
                      alt="Classic Haircut" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1">
                    <span className="text-white text-sm font-medium">HAIRCUTS</span>
                  </div>
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="transform hover:scale-105 transition-transform duration-500 ease-out mt-8">
                <div className="h-64 md:h-72 bg-[#F05D5E]/10 backdrop-blur-sm p-1 relative">
                  <div className="h-full w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1988&auto=format&fit=crop" 
                      alt="Beard Trim" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1">
                    <span className="text-white text-sm font-medium">BEARD TRIM</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Bar */}
              <div className="col-span-2 mt-4 bg-[#F05D5E] py-4 px-6 flex justify-between items-center">
                <div className="text-center">
                  <div className="text-white font-bebas text-3xl">2500+</div>
                  <div className="text-white/80 text-xs font-medium">HAPPY CLIENTS</div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-white font-bebas text-3xl">8+</div>
                  <div className="text-white/80 text-xs font-medium">YEARS EXPERIENCE</div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-white font-bebas text-3xl">4.9</div>
                  <div className="text-white/80 text-xs font-medium">STAR RATING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/60 text-xs mb-2">SCROLL DOWN</span>
          <div className="w-px h-8 bg-[#F05D5E] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
