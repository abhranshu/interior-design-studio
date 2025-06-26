
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-amber-700">
                <Phone size={14} />
                <span>+91 9334298088</span>
              </div>
              <div className="flex items-center space-x-1 text-amber-700">
                <Mail size={14} />
                <span>info@akashinteriors.com</span>
              </div>
            </div>
            <span className="text-amber-700 font-medium">15+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Akash Interior</h1>
                <p className="text-xs text-gray-600">Aluminum & Wood Specialists</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link to="/booking">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                </Button>
                <Button className="w-full bg-amber-600 hover:bg-amber-700" asChild>
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
