import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface NotFoundPageProps {
  onOpenConsultation?: (topic?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onOpenConsultation }) => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Gautam Interiors"
        description="The interior space you are looking for does not exist or has been relocated. Explore Gautam Interiors portfolio and services in Bengaluru."
      />
      <div className="min-h-[80vh] bg-charcoal text-soft-ivory flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/40 flex items-center justify-center bg-deep-black/60 text-gold">
            <Compass className="w-8 h-8 stroke-1" />
          </div>

          <span className="type-caption text-gold block mb-3">ERROR 404</span>

          <h1 className="type-headline-lg text-soft-ivory mb-4">
            Looks like this space <span className="italic text-gold font-light">doesn't exist.</span>
          </h1>

          <p className="type-body-md text-warm-taupe max-w-md mx-auto mb-8 leading-relaxed">
            The page you requested may have been moved or is currently undergoing redesign.
            Explore our architectural projects or return to the main studio entrance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary-dark">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO HOME</span>
            </Link>
            <Link to="/projects" className="btn-outline-dark">
              <span>EXPLORE PORTFOLIO</span>
            </Link>
            {onOpenConsultation && (
              <button
                type="button"
                onClick={() => onOpenConsultation('404 Page Consultation')}
                className="btn-outline-dark !border-gold/50 text-gold hover:bg-gold/10"
              >
                <span>CONTACT STUDIO</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

