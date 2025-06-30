import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Legacy', path: '/legacy' },
    { name: 'Projects', path: '/projects' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-primary-bg/95 via-primary-card/90 to-primary-bg/95 backdrop-blur-xl border-b border-primary-accent/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Subtle top border glow */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-accent/50 to-transparent"></div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary-accent/20 to-primary-magenta/20 border border-primary-accent/30 group-hover:border-primary-accent/60 transition-all duration-300">
              <Brain className="h-8 w-8 text-primary-accent group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/10 to-primary-magenta/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-poppins font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              Neural Hive
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? 'text-primary-accent bg-primary-accent/10'
                    : 'text-primary-gray-300 hover:text-primary-accent hover:bg-primary-accent/5'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-accent rounded-full"
                    initial={false}
                  />
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-accent/0 via-primary-accent/5 to-primary-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            <Link to="/join" className="btn-primary ml-4 text-sm px-6 py-3">
              Join Us
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-primary-gray-300 hover:text-primary-accent transition-colors duration-300 rounded-lg hover:bg-primary-accent/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden holographic-card mt-4 border border-primary-accent/20 rounded-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-accent bg-primary-accent/10 border border-primary-accent/20'
                      : 'text-primary-gray-300 hover:text-primary-accent hover:bg-primary-accent/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary mt-6"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;