import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'Digital Marketing', path: 'DigitalMarketing' },
    { name: 'Technical Solutions', path: 'TechnicalSolutions' },
    { name: 'About Us', path: 'About' },
    { name: 'Contact', path: 'Contact' },
  ];

  const isActive = (path) => {
    const currentPath = location.pathname;
    if (path === 'Home' && currentPath === '/') return true;
    return currentPath.toLowerCase().includes(path.toLowerCase());
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@aaiwaa.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail className="w-4 h-4" />
              info@aaiwaa.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone className="w-4 h-4" />
              +91 7096224922
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Follow us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="relative">
              <img src="/vite.png" alt="AAIWAA Logo" className="w-12 h-12 rounded-[30px] bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:shadow-blue-900/50 transition-shadow" />
                             </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  AAIWAA
                </h1>
                <p className="text-[10px] tracking-[0.2em] text-slate-500 font-medium -mt-0.5">
                  DIGITAL SOLUTION
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={createPageUrl(link.path)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-xl text-center"
                >
                  Get Free Consultation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}