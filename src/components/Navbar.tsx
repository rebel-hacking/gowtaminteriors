import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenConsultation: (topic?: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-luxury bg-[#121212]/95 backdrop-blur-md border-b border-white/10 ${
        scrolled ? 'py-3.5 shadow-card' : 'py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Gautam Interiors — Home"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-gold/60 bg-deep-black/60 group-hover:border-gold">
            <span className="font-display text-lg font-light tracking-widest text-gold transition-colors duration-300">
              G
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-light tracking-wider leading-none text-[#F8F7F3] transition-colors duration-300">
              GAUTAM INTERIORS
            </span>
            <span className="type-label-sm mt-0.5 flex items-center gap-1.5 text-[9px] tracking-[0.2em] text-[#C9C9C1]">
              <span>BENGALURU</span>
              <span className="text-gold">·</span>
              <span className="inline-flex items-center gap-1 text-gold font-medium">
                <Star className="w-2.5 h-2.5 fill-gold text-gold" />
                {STUDIO_INFO.rating}
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`type-label-md relative py-1 transition-colors duration-200 ${
                  active
                    ? 'text-gold font-bold'
                    : 'text-[#F8F7F3]/85 hover:text-gold'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Enquire Now CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenConsultation('Navbar Quick Enquiry')}
            className="hidden sm:inline-flex !py-2.5 !px-6 !min-h-[42px] btn-primary-dark transition-all duration-300"
          >
            <span>ENQUIRE NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200 border border-white/20 bg-charcoal text-[#F8F7F3] hover:border-gold"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-b transition-colors duration-300 bg-[#121212]/98 backdrop-blur-xl border-white/10 text-[#F8F7F3]"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`font-display text-2xl font-light transition-colors duration-200 flex items-center justify-between ${
                      active
                        ? 'text-gold font-normal'
                        : 'text-[#F8F7F3]/90 hover:text-gold'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenConsultation('Mobile Menu Enquiry');
                  }}
                  className="w-full btn-primary-dark text-center justify-center"
                >
                  ENQUIRE NOW
                </button>
                <a
                  href={STUDIO_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center btn-outline-dark"
                >
                  WHATSAPP US DIRECTLY
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
