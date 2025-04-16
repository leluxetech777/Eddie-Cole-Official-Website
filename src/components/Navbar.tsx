import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="text-2xl font-bold tracking-wider">EDDIE COLE</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">HOME</Link>
            <Link to="/portfolio" className="hover:text-gray-300 transition-colors">PORTFOLIO</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link to="/" className="hover:text-gray-300 transition-colors">HOME</Link>
              <Link to="/portfolio" className="hover:text-gray-300 transition-colors">PORTFOLIO</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;