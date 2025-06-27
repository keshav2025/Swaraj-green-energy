import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Clock, Award, Target, Heart, ArrowRight, ZoomIn } from 'lucide-react';
import ownerImg from '../assets/owner.jpg';
import cofounderImg from '../assets/co-founder.jpeg'; // Add this image in your assets folder
import TYRESEALANT from '../assets/TYRESEALANT.jpg';
import breakshoes from '../assets/breakshoes.jpg';
import BREAKPads from '../assets/BREAKPAD.jpg';

function About() {
  const values = [ /* your values array remains same */ ];
  const achievements = [ /* your achievements array remains same */ ];
  const galleryImages = [ /* your galleryImages array remains same */ ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Swaraj Green Energy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Your trusted partner for premium motorcycle parts in Ghaziabad, 
              Uttar Pradesh, committed to quality and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story with Founder & Co-Founder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 gap-12 items-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Founder */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={ownerImg}
                  alt="Rishabh Kumar"
                  className="w-48 h-48 rounded-full object-cover border-4 border-green-200 shadow mb-4"
                />
                <div className="text-2xl font-bold text-gray-900">Ravish Kumar</div>
                <div className="text-green-600 font-medium">Founder</div>
              </div>

              {/* Co-Founder */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={cofounderImg}
                  alt="Co-Founder Name"
                  className="w-48 h-48 rounded-full object-cover border-4 border-green-200 shadow mb-4"
                />
                <div className="text-2xl font-bold text-gray-900">AMAR</div>
                <div className="text-green-600 font-medium">Co-Founder</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to provide high-quality motorcycle parts to riders 
                across Ghaziabad and Uttar Pradesh, Swaraj Green Energy has grown to become 
                a trusted name in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that every motorcycle owner values reliability, performance, 
                and safety. That's why we've dedicated ourselves to sourcing only the finest 
                parts from reputable manufacturers and providing expert guidance to help our 
                customers make informed decisions.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence extends beyond just selling parts. We believe 
                in building relationships, providing exceptional customer service, and 
                supporting the motorcycling community with reliable, professional service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The rest of your sections: Product Gallery, Values, Achievements, Vision... remain unchanged */}
    </div>
  );
}

export default About;
