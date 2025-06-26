import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Akash Interior</h3>
                <p className="text-sm text-gray-400">Aluminum & Wood Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming spaces with premium aluminum and wood interiors for over 15 years. 
              Quality craftsmanship, innovative designs, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/public-profile/settings" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-amber-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-amber-400 transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Ceiling Solutions</span></li>
              <li><span className="text-gray-400">Windows & Doors</span></li>
              <li><span className="text-gray-400">Wall Panels</span></li>
              <li><span className="text-gray-400">Custom Millwork</span></li>
              <li><span className="text-gray-400">Aluminum Framing</span></li>
              <li><span className="text-gray-400">Wood Cladding</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Lohanipur Kadam Kuan Patna -03 , Bihar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <p className="text-gray-400">(+ 91 9334298088 )</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0" />
                <p className="text-gray-400">info@premiuminteriors.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Premium Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
