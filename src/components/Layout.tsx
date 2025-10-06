import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/news', label: 'Latest News' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex flex-col transition-colors duration-200"
            >
              <span className="text-xl font-bold text-blue-700 hover:text-blue-800">
                Gee-Connect
              </span>
              <span className="text-xs font-bold text-gray-600">
                All About Latest Technology
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 hover:text-blue-700 ${
                    isActive(item.path) ? 'text-blue-700' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors ${
                    isActive(item.path) ? 'text-blue-700' : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Gee-Connect. All rights reserved.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <>
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 hover:scale-110 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>

          <div className="fixed bottom-8 left-8 flex flex-col gap-3 z-50">
            <a
              href="https://linkedin.com/company/gee-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 hover:scale-110"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/geeconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/geeconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/geeconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};
