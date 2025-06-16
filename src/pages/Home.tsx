import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Users, Wrench, Phone, MessageCircle } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Quality Assurance',
      description: 'All parts undergo rigorous quality checks to ensure reliability and performance.',
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: 'Fast Response',
      description: 'Quick inquiry processing and prompt responses to all customer requests.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Expert Support',
      description: 'Professional guidance from our experienced team of bike parts specialists.',
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: 'Wide Selection',
      description: 'Comprehensive range of parts for all major motorcycle brands and models.',
    },
  ];

  const whyChooseUs = [
    'Premium quality bike parts from trusted manufacturers',
    'Competitive pricing with transparent quotations',
    'Expert technical support and consultation',
    'Fast inquiry processing and quick delivery options',
    'Established reputation in Ghaziabad and surrounding areas',
    'Customer-focused service with personalized attention',
  ];

  const whatsappNumber = "918789574430";
  const whatsappMessage = "Hi! I'm interested in bike parts from Swaraj Green Energy. Please provide more information.";

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Bike Parts
                <span className="block text-green-200">Supplier in Ghaziabad</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Your trusted partner for high-quality motorcycle parts. We specialize in providing 
                reliable components with exceptional service and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalog"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  Browse Parts Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <div className="flex gap-2">
                  <Link
                    to="/inquiry"
                    className="border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center flex-1"
                  >
                    Email Inquiry
                    <Phone className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center flex-1"
                  >
                    WhatsApp
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Motorcycle Image */}
            <div className="relative">
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Swaraj Green Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best bike parts and service experience 
              for our customers across Ghaziabad and Uttar Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-gray-50 hover:bg-white"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Swaraj Green Energy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established as a leading supplier of motorcycle parts in Ghaziabad, 
                Uttar Pradesh, we have built our reputation on quality, reliability, 
                and exceptional customer service.
              </p>
              <div className="space-y-3 mb-8">
                {whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Contact us today for all your bike parts requirements. 
                  Our team is ready to assist you with expert advice and competitive pricing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <span className="font-semibold">+91 87895 74430</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-200">Email:</span>
                    <span>swarajgreenenergysge@gmail.com</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="mailto:swarajgreenenergysge@gmail.com"
                    className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center text-sm"
                  >
                    Email Us
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors inline-flex items-center text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Quality Bike Parts?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Submit an inquiry today and let our experts help you find the perfect parts for your motorcycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inquiry"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center text-lg"
            >
              Make an Email Inquiry
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors inline-flex items-center text-lg"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


