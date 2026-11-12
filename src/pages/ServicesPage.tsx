import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ArrowUpRight, MessageCircle, Star } from 'lucide-react';
import { SERVICES_LIST, STUDIO_INFO } from '../data/studioData';
import { MobileExpandableText } from '../components/MobileExpandableText';
import { SEOHead } from '../components/SEOHead';

interface ServicesPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="overflow-x-clip bg-[#FAFAF7]">
      <SEOHead
        title="Interior Design Services in Bengaluru | Gautam Interiors"
        description="Explore 8 comprehensive interior design services by Gautam Interiors in Bengaluru: residential interiors, bedroom design, modular kitchens, flats, furniture sourcing, painting & party styling."
      />

      {/* =========================================================================
          HERO (Clean Ivory White Hero #F8F7F3 - High Contrast Against Fixed Dark Header)
          ========================================================================= */}
      <section className="relative bg-[#F8F7F3] text-charcoal border-b border-charcoal/10 pt-28 pb-16 lg:pb-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-charcoal/15 text-xs text-[#85847E] mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="type-label-sm font-semibold tracking-wider text-charcoal">
                  8 DEDICATED DISCIPLINES · BENGALURU
                </span>
              </div>

              <h1 className="type-headline-display text-charcoal mb-6 leading-tight">
                Thoughtfully Designed.{' '}
                <span className="italic font-light text-gold">Beautifully Executed.</span>
              </h1>

              <p className="type-body-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
                From turnkey residential architecture to ergonomic modular kitchens, restorative
                bedroom sanctuaries, and precision drapery hardware—explore our eight dedicated disciplines
                crafted for apartments, villas, and commercial spaces across Bengaluru.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Services Overview Discussion')}
                  className="btn-primary-light"
                >
                  <span>REQUEST CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
                <a
                  href="#residential-interiors"
                  className="btn-outline-light"
                >
                  <span>EXPLORE DISCIPLINES</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Service Showcase Imagery */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-charcoal/15 shadow-card bg-white">
                <img
                  src="/images/service-residential.jpg"
                  alt="Interior design services by Gautam Interiors Bengaluru"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t-0 border border-charcoal/15 text-xs text-[#85847E] flex items-center justify-between shadow-xs">
                <span className="font-semibold text-charcoal tracking-wide">
                  TURNKEY RESIDENTIAL &amp; COMMERCIAL
                </span>
                <span className="text-gold font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  4.9 / 5.0 (38 REVIEWS)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — SERVICES INTRO & JUMP DIRECTORY (Clean White Sticky Strip)
          ========================================================================= */}
      <section className="bg-white text-charcoal py-5 border-b border-charcoal/10 sticky top-[68px] z-30 backdrop-blur-md shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#85847E] font-semibold shrink-0">
              <span>JUMP TO DISCIPLINE:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {SERVICES_LIST.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="type-label-sm text-charcoal hover:text-gold bg-[#F8F7F3] hover:bg-white px-3 py-1.5 border border-charcoal/15 transition-colors text-[10px] shadow-2xs"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ALL 8 SERVICE EDITORIAL SECTIONS (Alternating Rhythm with 3 Deep Black Sections)
          Black Sections:
          - 02 Bedroom Interiors (#0D0D0C)
          - 04 Commercial Interiors (#121212)
          - 07 Painting & Finishing (#0D0D0C)
          ========================================================================= */}
      <div>
        {SERVICES_LIST.map((service, index) => {
          // Exactly 3 black sections for distinct visual contrast
          const isDark =
            service.id === 'bedroom-interiors' ||
            service.id === 'commercial-interiors' ||
            service.id === 'painting-finishing';

          const bgClass = isDark
            ? service.id === 'commercial-interiors'
              ? 'bg-[#121212] text-[#F8F7F3] border-b border-white/10'
              : 'bg-[#0D0D0C] text-[#F8F7F3] border-b border-white/10'
            : index % 2 === 0
            ? 'bg-[#FAFAF7] text-charcoal border-b border-charcoal/10'
            : 'bg-[#F8F7F3] text-charcoal border-b border-charcoal/10';

          const isReversed = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-spacing scroll-mt-24 ${bgClass}`}
            >
              <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Visual Column - Separate container */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className={`relative aspect-[4/3] overflow-hidden shadow-soft ${
                      isDark ? 'border border-white/20 bg-deep-black' : 'border border-charcoal/15 bg-white'
                    }`}>
                      <img
                        src={service.image}
                        alt={`${service.title} by Gautam Interiors`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-luxury hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-charcoal/90 text-gold px-3.5 py-1.5 type-label-sm text-[10px]">
                        DISCIPLINE {service.number}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <span
                      className={`type-label-sm block mb-2 ${
                        isDark ? 'text-gold' : 'text-[#85847E]'
                      }`}
                    >
                      SERVICE {service.number} · BENGALURU
                    </span>
                    <h2
                      className={`type-headline-lg mb-4 leading-tight ${
                        isDark ? 'text-[#F8F7F3]' : 'text-charcoal'
                      }`}
                    >
                      {service.title}
                    </h2>

                    {/* Mobile Read More Progressive Disclosure */}
                    <MobileExpandableText
                      preview={service.shortDesc}
                      fullText={service.fullDesc}
                      isDarkTheme={isDark}
                      className={`type-body-md mb-6 leading-relaxed ${
                        isDark ? 'text-[#C9C9C1]' : 'text-[#85847E]'
                      }`}
                    />

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <span
                        className={`type-label-sm block mb-3 text-[10px] tracking-wider ${
                          isDark ? 'text-gold' : 'text-charcoal font-semibold'
                        }`}
                      >
                        DESIGN FOCUS &amp; ADVANTAGES:
                      </span>
                      <div className="space-y-2.5">
                        {service.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className={`flex items-start gap-2.5 type-body-sm text-xs sm:text-sm ${
                              isDark ? 'text-[#F8F7F3]/90' : 'text-charcoal/90'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isDark
                                  ? 'bg-deep-black text-gold border border-gold/50'
                                  : 'bg-white text-charcoal border border-charcoal/20 shadow-xs'
                              }`}
                            >
                              <Check className="w-2.5 h-2.5 text-gold" />
                            </span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className={`mb-8 pt-4 border-t ${
                      isDark ? 'border-white/15' : 'border-charcoal/10'
                    }`}>
                      <span
                        className={`type-label-sm block mb-2 text-[10px] tracking-wider ${
                          isDark ? 'text-gold' : 'text-[#85847E] font-semibold'
                        }`}
                      >
                        STUDIO DELIVERABLES:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {service.deliverables.map((deliv) => (
                          <div
                            key={deliv}
                            className={`flex items-center gap-1.5 ${
                              isDark ? 'text-[#C9C9C1]' : 'text-[#85847E]'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Working CTAs */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          onOpenConsultation(`Enquiry for ${service.title}`)
                        }
                        className={isDark ? 'btn-primary-dark' : 'btn-primary-light'}
                      >
                        <span>ENQUIRE ABOUT THIS SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </button>

                      <a
                        href={STUDIO_INFO.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isDark ? 'btn-outline-dark' : 'btn-outline-light'}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>QUICK WHATSAPP</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* =========================================================================
          SECTION 4 — QUALITY COMMITMENTS & PRICING TRANSPARENCY (Clean Ivory White #F8F7F3)
          ========================================================================= */}
      <section className="section-spacing bg-[#F8F7F3] text-charcoal border-t border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <span className="type-label-md text-[#85847E] block mb-3">
            HONEST COSTING &amp; GUARANTEED SCHEDULES
          </span>
          <h2 className="type-headline-lg text-charcoal mb-6">
            Transparent Estimates, No Surprises.
          </h2>
          <p className="type-body-lg text-[#85847E] mb-8 leading-relaxed">
            Every quote provided by Gautam Interiors is based on transparent, itemized material lists
            and market-fair pricing. Connect with us to discuss your floor plan and receive a preliminary project estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenConsultation('Services Pricing Estimate')}
              className="btn-primary-light"
            >
              <span>REQUEST A DETAILED ESTIMATE</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
            <a
              href={STUDIO_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <span>VISIT OUR STUDIO</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
