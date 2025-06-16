import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Parts Catalog', path: '/catalog' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappNumber = "918789574430";
  const whatsappMessage = "Hi! I'm interested in bike parts from Swaraj Green Energy. Please provide more information.";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Swaraj Green Energy</h3>
                <p className="text-green-400">Premium Bike Parts Supplier</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for high-quality bike parts in Ghaziabad, Uttar Pradesh. 
              We specialize in providing reliable motorcycle components with exceptional service and fast response times.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+918789574430" className="hover:text-green-400 transition-colors">
                  +91 87895 74430
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:swarajgreenenergysge@gmail.com" className="hover:text-green-400 transition-colors">
                  swarajgreenenergysge@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp: +91 87895 74430
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Methods */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:swarajgreenenergysge@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+918789574430"
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Swaraj Green Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;