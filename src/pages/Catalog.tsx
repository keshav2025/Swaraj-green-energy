import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageCircle } from 'lucide-react';
import breakshoes from '../assets/sgebrakeshoe01.jpeg'
import TYRESEALANT from '../assets/sgesealant.jpeg';
import BREAKPads from '../assets/discbreakpad.jpeg';


import n1 from '../assets/WhatsApp Image 2025-06-25 at 00.23.29.jpeg' ;
import n2 from '../assets/WhatsApp Image 2025-06-16 at 23.14.56.jpeg' ;
import n3 from '../assets/WhatsApp Image 2025-06-18 at 17.43.21.jpeg' ;
import n4 from '../assets/WhatsApp Image 2025-06-18 at 17.43.23.jpeg' ;
import n5 from '../assets/WhatsApp Image 2025-06-18 at 17.43.26 (1).jpeg' ;
import n6 from '../assets/WhatsApp Image 2025-06-18 at 17.43.28.jpeg' ;
import n7 from '../assets/WhatsApp Image 2025-06-20 at 01.34.05.jpeg' ;
import n8 from '../assets/WhatsApp Image 2025-06-20 at 01.35.12.jpeg' ;



function Catalog() {
  const whatsappNumber = "918789574430";

  const categories = [
    {
      name: 'TYRE SEALANT',
      description: 'High-performance engine components including pistons, cylinders, valves, and gaskets.',
      image: TYRESEALANT,
      parts: ['Pistons', 'Cylinders', 'Valves', 'Gaskets', 'Crankshafts', 'Connecting Rods'],
    },
    {
      name: 'BRAKE SHOES',
      description: 'Reliable brake shoes for smooth, safe stopping—upgrade your ride today!" Let me know if you had like a different style or tone!',
      image: breakshoes,
      parts: ['Brake Pads', 'Brake Discs', 'Calipers', 'Brake Lines', 'Master Cylinders', 'Brake Fluids'],
    },
    {
      name: 'DISC BRAKE PADS',
      
      description: 'High-quality brake pads for enhanced stopping power and safety.',
      image: BREAKPads,
      parts: ['Front Brake Pads', 'Rear Brake Pads', 'Sintered Pads', 'Organic Pads', 'Ceramic Pads', 'Racing Pads'],
    },
    {
      name: '4 Stroke Engine oil',
      description: 'Premium 4-stroke engine oil for optimal performance and protection.',
      image: n1,
      parts: ['Engine Oil', 'Oil Filters', 'Air Filters', 'Fuel Filters', 'Coolant', 'Lubricants'],
    
    },
    {
      name: 'Body Parts',
      description: 'External body components including fairings, fenders, and protective gear.',
      image: n2,
      parts: ['Fairings', 'Fenders', 'Fuel Tanks', 'Side Panels', 'Windshields', 'Mirrors'],
    },
    {
      name: 'Lighting System',
      description: 'Complete lighting solutions including headlights, taillights, and indicators.',
      image: n3,
      parts: ['Headlights', 'Taillights', 'Turn Signals', 'LED Strips', 'Bulbs', 'Light Housings'],
    },
    {
      name: 'Transmission',
      description: 'Transmission components including clutches, gears, and drive chains.',
      image: n4,
      parts: ['Clutch Plates', 'Gears', 'Drive Chains', 'Sprockets', 'Transmission Oil', 'Shift Forks'],
    },
    {
      name: 'Exhaust System',
      description: 'Performance exhaust systems and components for optimal engine performance.',
      image: n5,
      parts: ['Exhaust Pipes', 'Mufflers', 'Heat Shields', 'Gaskets', 'Clamps', 'Catalytic Converters'],
    },
  ];

  const getWhatsAppMessage = (categoryName: string) => {
    return `Hi! I'm interested in ${categoryName} from Swaraj Green Energy. Please provide more information and pricing.`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bike Parts Catalog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of high-quality motorcycle parts. 
              All items are available for inquiry - contact us for pricing and availability.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center space-x-3 text-blue-100">
                <Search className="h-5 w-5" />
                <span>Need a specific part? Contact us for personalized assistance.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Inquiry-Based Service
            </h3>
            <p className="text-gray-600">
              We operate on an inquiry basis to provide you with the most accurate pricing and availability. 
              Click "Email Inquiry" or "WhatsApp" on any category to get detailed information and quotes for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full transition-all duration-500 object-cover group-hover:object-contain group-hover:bg-black/80 transform scale-110 group-hover:scale-100"
                    style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  {/* <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Available Parts:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.parts.slice(0, 4).map((part, partIndex) => (
                        <span
                          key={partIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {part}
                        </span>
                      ))}
                      {category.parts.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                          +{category.parts.length - 4} more
                        </span>
                      )}
                    </div>
                  </div> */}
                  
                  <div className="flex gap-2">
                    <Link
                      to="/inquiry"
                      state={{ category: category.name }}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-sm"
                    >
                      Email Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(category.name))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our catalog represents just a fraction of what we can source. 
            Contact us with your specific requirements, and we'll help you find the exact parts you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inquiry"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Submit Custom Email Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I need help finding specific bike parts. Can you assist me?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Directly
            </a>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;