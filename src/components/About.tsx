import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-[#F05D5E]/10 rounded-full"></div>
      <div className="absolute -left-16 bottom-20 w-40 h-40 bg-[#2D3142]/5 rounded-full"></div>
      
      <div className="container-custom mx-auto relative z-10">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left side - Image Grid */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/3 w-20 h-1 bg-[#F05D5E]"></div>
              <div className="absolute -bottom-4 right-1/3 w-1 h-20 bg-[#F05D5E]"></div>
              
              {/* Main image */}
              <div className="col-span-2 h-80 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1621747650384-6e944e454a54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Barbershop Interior" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Smaller images */}
              <div className="h-56 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Barber tools" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-56 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1519500099198-fd81846b8f03?q=80&w=1770&auto=format&fit=crop" 
                  alt="Barber chair" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Caption */}
              <div className="col-span-2 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#4F5D75] font-medium">ESTABLISHED</div>
                    <div className="text-2xl font-bebas text-[#2D3142]">SINCE 2015</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#4F5D75] text-right font-medium">LOCATION</div>
                    <div className="text-2xl font-bebas text-[#2D3142]">DOWNTOWN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="section-title">ABOUT OUR SHOP</h2>
            
            <div className="mt-8 space-y-6 text-lg text-[#4F5D75]">
              <p className="font-medium text-xl text-[#2D3142]">
                qBarberShop is where style, precision, and the art of traditional barbering 
                meet modern techniques in a space designed for the contemporary gentleman.
              </p>
              
              <p>
                Founded in 2015, we&apos;ve built our reputation on exceptional haircuts, premium 
                shaves, and a commitment to customer service that exceeds expectations. Our 
                master barbers bring years of expertise and passion to every client interaction.
              </p>
              
              <p>
                We believe that a great haircut is more than just a service—it&apos;s an experience 
                that boosts confidence and helps you put your best face forward. Our shop 
                combines classic barbering traditions with contemporary styling to create 
                a unique atmosphere where you can relax and enjoy being taken care of.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="py-4 border-t-2 border-[#F05D5E]">
                <div className="text-4xl font-bebas text-[#2D3142]">10+</div>
                <div className="text-sm text-[#4F5D75] font-medium mt-1">YEARS EXPERIENCE</div>
              </div>
              <div className="py-4 border-t-2 border-[#F05D5E]">
                <div className="text-4xl font-bebas text-[#2D3142]">5</div>
                <div className="text-sm text-[#4F5D75] font-medium mt-1">EXPERT BARBERS</div>
              </div>
              <div className="py-4 border-t-2 border-[#F05D5E]">
                <div className="text-4xl font-bebas text-[#2D3142]">15K+</div>
                <div className="text-sm text-[#4F5D75] font-medium mt-1">HAIRCUTS DONE</div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-12">
              <a href="#team" className="btn-secondary">
                MEET OUR TEAM
              </a>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mt-32 py-16 bg-[#2D3142] text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bebas tracking-wider mb-4">WHY CHOOSE QBARBERSHOP</h3>
            <p className="text-[#BFC0C0] max-w-lg mx-auto">
              Experience the difference with our premium services and unparalleled attention to detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: "✂️",
                title: "EXPERT BARBERS",
                description: "Highly skilled professionals with years of experience"
              },
              {
                icon: "👑",
                title: "PREMIUM PRODUCTS",
                description: "We use only the finest grooming products available"
              },
              {
                icon: "🔍",
                title: "ATTENTION TO DETAIL",
                description: "Meticulous care given to every aspect of our services"
              },
              {
                icon: "🛋️",
                title: "COMFORTABLE SPACE",
                description: "Relaxing atmosphere where you can unwind and refresh"
              }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bebas tracking-wide mb-3">{item.title}</h4>
                <p className="text-[#BFC0C0] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#appointment" className="btn-primary">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
