import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, MapPin, Clock, MessageCircle } from 'lucide-react';
import { STUDIO_INFO, SERVICES_LIST } from '../data/studioData';

interface FooterProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-charcoal text-soft-ivory border-t border-warm-taupe/20 pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Band */}
        <div className="pb-14 mb-12 border-b border-warm-taupe/20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="type-label-md text-gold block mb-3">
              BEGIN YOUR TRANSFORMATION
            </span>
            <h2 className="type-headline-lg text-soft-ivory max-w-2xl">
              Spaces That Reflect{' '}
              <span className="italic text-gold font-light">The Way You Live.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenConsultation('Footer Consultation Request')}
              className="btn-primary-dark"
            >
              DISCUSS YOUR PROJECT
            </button>
            <Link to="/projects" className="btn-outline-dark">
              EXPLORE OUR WORK
            </Link>
          </div>
        </div>

        {/* 4 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Studio Brand & Credibility */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block font-display text-2xl tracking-wider text-soft-ivory mb-4">
              GAUTAM INTERIORS
            </Link>
            <p className="type-body-sm text-warm-grey max-w-sm mb-6 leading-relaxed">
              Professional interior design and decoration studio in Vijaya Bank Layout, Bengaluru.
              Specializing in residential interiors, modular kitchens, bedroom design, and custom finishing.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-warm-taupe/30 bg-deep-black/40 px-4 py-2">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span className="type-label-sm text-soft-ivory">
                {STUDIO_INFO.rating} / 5.0 · {STUDIO_INFO.reviewCount} GOOGLE REVIEWS
              </span>
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="lg:col-span-2">
            <span className="type-label-sm text-gold block mb-4">
              EXPLORE
            </span>
            <ul className="space-y-3 type-body-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'All Services', href: '/services' },
                { label: 'Design Inspiration', href: '/projects' },
                { label: 'Contact Studio', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-warm-grey hover:text-soft-ivory transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Directory */}
          <div className="lg:col-span-3">
            <span className="type-label-sm text-gold block mb-4">
              SERVICES
            </span>
            <ul className="space-y-2.5 type-body-sm">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-warm-grey hover:text-soft-ivory transition-colors duration-150 text-xs tracking-wide"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-gold hover:text-warm-beige transition-colors duration-150 text-xs tracking-wider inline-flex items-center gap-1 font-medium"
                >
                  View All 8 Disciplines
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="lg:col-span-3">
            <span className="type-label-sm text-gold block mb-4">
              VISIT OUR STUDIO
            </span>
            <div className="space-y-3 type-body-sm text-warm-grey mb-5 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  46, Chiye Davi Nilya, 3rd Cross, Kodichikkanahalli Main Rd, Near Sana Super Mart, Vijaya Bank Layout, Bengaluru 560076
                </span>
              </p>
              <p className="flex items-start gap-2 text-xs text-warm-taupe">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>Open · Closes 7:30 am Fri (By studio & site appointment)</span>
              </p>
              <div className="text-xs pt-1 space-y-1">
                <div>
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="text-soft-ivory hover:text-gold transition-colors"
                  >
                    Tel: {STUDIO_INFO.phoneDisplay}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-soft-ivory hover:text-gold transition-colors"
                  >
                    Email: {STUDIO_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={STUDIO_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label-sm text-gold inline-flex items-center gap-1 hover:underline"
              >
                <span>DIRECTIONS</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={STUDIO_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label-sm text-soft-ivory inline-flex items-center gap-1 hover:text-gold"
              >
                <span>GOOGLE REVIEWS</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={STUDIO_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label-sm text-secondary inline-flex items-center gap-1 hover:brightness-110"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 pb-12 sm:pb-4 sm:pr-44 border-t border-warm-taupe/15 flex flex-col sm:flex-row items-center justify-between gap-4 type-caption text-warm-grey text-[10px]">
          <span>
            © {new Date().getFullYear()} GAUTAM INTERIORS · VIJAYA BANK LAYOUT, BENGALURU, KARNATAKA
          </span>
          <span className="tracking-[0.25em]">
            THOUGHTFUL DESIGN · QUALITY MATERIALS · PRECISE FINISHING
          </span>
        </div>
      </div>
    </footer>
  );
};
