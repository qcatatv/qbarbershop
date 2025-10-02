import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "haircut",
      title: "HAIRCUT",
      description: "Precision cut tailored to your face shape and style preferences, includes consultation and styling.",
      price: "$35",
      duration: "45 MIN",
      popular: false,
      image: "https://images.unsplash.com/photo-1657105052497-f996284ffff8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "haircut-beard",
      title: "HAIRCUT & BEARD TRIM",
      description: "Complete grooming package with precision haircut and expertly shaped beard trim.",
      price: "$55",
      duration: "60 MIN",
      popular: true,
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "beard-trim",
      title: "BEARD TRIM & SHAPE",
      description: "Professional beard shaping, trim, and conditioning for a well-groomed appearance.",
      price: "$25",
      duration: "30 MIN",
      popular: false,
      image: "https://images.unsplash.com/photo-1603899968034-1a56ca48d172?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "hot-towel",
      title: "HOT TOWEL SHAVE",
      description: "Traditional straight razor shave with hot towels, premium oils and soothing aftercare.",
      price: "$40",
      duration: "45 MIN",
      popular: false,
      image: "https://images.unsplash.com/photo-1648221122323-572c13a31663?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-[#F05D5E]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[#F05D5E]"></div>
      
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <h2 className="section-title">OUR SERVICES</h2>
            <p className="section-subtitle max-w-xl mt-4">
              Premium grooming services delivered by master barbers, 
              using top-quality products for the modern gentleman.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#appointment" className="btn-primary">
              BOOK APPOINTMENT
            </a>
          </div>
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group card-modern"
            >
              <div className="flex flex-col md:flex-row overflow-hidden bg-white">
                {/* Service Image */}
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <Image 
                    src={service.image}
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Service Content */}
                <div className={`md:w-3/5 p-6 md:p-8 relative ${service.popular ? 'bg-[#2D3142] text-white' : 'bg-[#F8F8F8]'}`}>
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-[#F05D5E] px-4 py-1 text-white text-sm font-medium">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className={`text-sm font-medium mb-2 ${service.popular ? 'text-[#BFC0C0]' : 'text-[#F05D5E]'}`}>
                    {service.duration}
                  </div>
                  
                  <h3 className={`text-2xl font-bebas tracking-wider mb-3 ${!service.popular && 'text-[#2D3142]'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 ${service.popular ? 'text-[#BFC0C0]' : 'text-[#4F5D75]'}`}>
                    {service.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-2xl font-bebas ${service.popular ? 'text-white' : 'text-[#F05D5E]'}`}>
                      {service.price}
                    </span>
                    <button 
                      className={`px-5 py-2 font-medium text-sm transition-all
                        ${service.popular 
                          ? 'bg-white text-[#2D3142] hover:bg-[#F05D5E] hover:text-white' 
                          : 'bg-[#2D3142] text-white hover:bg-[#F05D5E]'
                        }`}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 p-8 bg-[#F8F8F8]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bebas tracking-wider text-[#2D3142] mb-2">ADDITIONAL SERVICES</h3>
            <p className="text-[#4F5D75]">Quick touch-ups and add-ons to enhance your experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-[#2D3142]">
            {[
              { name: "HAIR STYLING", price: "$15" },
              { name: "GRAY COVERAGE", price: "$25" },
              { name: "SCALP TREATMENT", price: "$20" },
              { name: "FACIAL", price: "$30" },
              { name: "HAIR COLORING", price: "$45" },
              { name: "EAR/NOSE WAXING", price: "$10" }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b border-[#BFC0C0]">
                <span className="font-medium">{item.name}</span>
                <span className="text-[#F05D5E] font-bebas text-xl">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call To Action */}
        <div className="mt-16 text-center">
          <p className="text-[#4F5D75] mb-4">
            Looking for specialized grooming services?
          </p>
          <a 
            href="#contact"
            className="btn-secondary inline-flex"
          >
            CONTACT FOR CUSTOM PACKAGES
          </a>
        </div>
      </div>
    </section>
  );
}