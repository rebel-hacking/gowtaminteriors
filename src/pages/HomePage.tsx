import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Star,
  Quote,
  Check,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  STUDIO_INFO,
  SERVICES_LIST,
  PORTFOLIO_PROJECTS,
  GOOGLE_REVIEWS,
  WHY_CHOOSE_US,
} from '../data/studioData';
import { HorizontalGallery } from '../components/HorizontalGallery';
import { MobileExpandableText } from '../components/MobileExpandableText';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroContentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const featuredServices = SERVICES_LIST.slice(0, 6);
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 5);

  return (
    <div className="overflow-x-clip bg-[#FAFAF7]">
      <SEOHead
        title="Gautam Interiors | Interior Designers in Bengaluru"
        description="Gautam Interiors is a premier interior design and decoration studio in Vijaya Bank Layout, Bengaluru. Residential interiors, modular kitchens, luxury bedrooms & bespoke carpentry. Rated 4.9/5 on Google."
      />

      {/* =========================================================================
          HERO SECTION (Cinematic Image, Parallax on Desktop, Separate Containers on Mobile)
          ========================================================================= */}
      <section
        id="hero"
        ref={heroRef}
        className="relative bg-charcoal text-[#F8F7F3] overflow-hidden"
      >
        {/* DESKTOP HERO (lg: and above) - Cinematic overlay layout */}
        <div className="hidden lg:flex relative min-h-[95vh] items-center pt-28 pb-20">
          {/* Parallax Background Image */}
          <motion.div
            style={{ y: heroBgY }}
            className="absolute inset-0 z-0 will-change-transform"
          >
            <img
              src="/images/hero-living.jpg"
              alt="Contemporary luxury living room by Gautam Interiors in Bengaluru"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Dark overlay for contrast */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, rgba(23, 23, 21, 0.88) 0%, rgba(23, 23, 21, 0.65) 55%, rgba(23, 23, 21, 0.38) 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(23, 23, 21, 0.45) 0%, transparent 40%, rgba(23, 23, 21, 0.85) 100%)',
              }}
            />
          </motion.div>

          {/* Desktop Foreground Content */}
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="relative z-20 max-w-[1360px] w-full mx-auto px-6 xl:px-8"
          >
            <div className="max-w-3xl">
              {/* Studio Badge */}
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-white/20 bg-charcoal/80 backdrop-blur-md px-4 py-2 mb-6">
                <span className="type-label-sm text-gold flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  {STUDIO_INFO.rating} / 5.0 · {STUDIO_INFO.reviewCount} GOOGLE REVIEWS
                </span>
                <span className="text-white/30">|</span>
                <span className="type-label-sm text-[#F8F7F3] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold" />
                  VIJAYA BANK LAYOUT, BENGALURU
                </span>
              </div>

              <div className="type-label-md text-gold tracking-[0.25em] mb-3">
                GAUTAM INTERIORS
              </div>

              <h1 className="type-headline-display text-[#F8F7F3] mb-6">
                Spaces That Reflect{' '}
                <span className="italic font-light text-gold">The Way You Live.</span>
              </h1>

              <p className="type-body-lg text-[#F8F7F3]/90 max-w-xl mb-10 leading-relaxed">
                {STUDIO_INFO.supportingHeroText}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/projects" className="btn-primary-dark">
                  <span>EXPLORE OUR WORK</span>
                  <ArrowDownRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Hero Project Discussion')}
                  className="btn-outline-dark"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                </button>
              </div>
            </div>

            <div className="mt-14 pt-6 border-t border-white/15 flex items-center justify-between gap-4 type-caption text-[#C9C9C1]">
              <div className="flex items-center gap-6">
                <span>RESIDENTIAL INTERIORS</span>
                <span className="text-gold">·</span>
                <span>MODULAR KITCHENS</span>
                <span className="text-gold">·</span>
                <span>CUSTOM FINISHING</span>
              </div>
              <a
                href="#intro"
                className="text-[#F8F7F3]/80 hover:text-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>SCROLL TO DISCOVER</span>
                <span className="w-6 h-[1px] bg-gold inline-block" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* MOBILE & TABLET HERO (<lg) - STRICT RULE: SEPARATE IMAGE & TEXT CONTAINERS (NO TEXT OVER IMAGE) */}
        <div className="lg:hidden flex flex-col pt-16">
          {/* 1. Image Container First */}
          <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-deep-black">
            <img
              src="/images/hero-living.jpg"
              alt="Contemporary luxury living room by Gautam Interiors in Bengaluru"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <span className="type-label-sm text-gold flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold text-gold" />
                {STUDIO_INFO.rating} / 5.0 · 38 GOOGLE REVIEWS
              </span>
            </div>
          </div>

          {/* 2. Text Container Below Image - In Charcoal Section */}
          <div className="px-5 py-8 sm:px-8 sm:py-10 bg-charcoal text-[#F8F7F3] border-t border-white/15">
            <div className="type-label-sm text-gold tracking-widest mb-2">
              BENGALURU INTERIOR STUDIO
            </div>
            <h1 className="type-headline-lg text-[#F8F7F3] mb-4">
              Spaces That Reflect{' '}
              <span className="italic font-light text-gold">The Way You Live.</span>
            </h1>

            {/* Mobile hero CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/projects" className="btn-primary-dark w-full sm:w-auto text-center">
                <span>EXPLORE OUR WORK</span>
                <ArrowDownRight className="w-4 h-4 ml-1" />
              </Link>
              <button
                type="button"
                onClick={() => onOpenConsultation('Mobile Hero Project Discussion')}
                className="btn-outline-dark w-full sm:w-auto text-center"
              >
                <span>DISCUSS YOUR PROJECT</span>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#85847E]">
              <span>VIJAYA BANK LAYOUT</span>
              <span>SITE VISITS PAN-BENGALURU</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — INTRODUCTION (Clean Ivory White #F8F7F3)
          ========================================================================= */}
      <section id="intro" className="section-spacing bg-[#F8F7F3] text-charcoal border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-7"
            >
              <span className="type-label-md text-[#85847E] block mb-3">
                ABOUT GAUTAM INTERIORS
              </span>
              <h2 className="type-headline-lg text-charcoal mb-6 leading-tight">
                Where Thoughtful Design{' '}
                <span className="italic font-light text-[#85847E]">
                  Meets Everyday Living.
                </span>
              </h2>

              {/* Mobile Progressive Disclosure: Read More / Read Less */}
              <MobileExpandableText
                preview="At Gautam Interiors, we approach interior design not as superficial decoration, but as spatial architecture tailored to the rhythm of your life. Based in Vijaya Bank Layout, Bengaluru, we shape environments balancing warmth and function."
                fullText="At Gautam Interiors, we approach interior design not as superficial decoration, but as spatial architecture tailored to the rhythm of your life. Based in Vijaya Bank Layout, Bengaluru, we work closely with homeowners and commercial clients to shape environments that balance warmth, functionality, and lasting aesthetic grace. Whether orchestrating a complete apartment renovation, crafting an ergonomic modular kitchen, or aligning hand-turned drapery hardware, our studio stands for transparent pricing, uncompromising material standards, and disciplined on-time delivery."
                className="type-body-lg text-charcoal/85 mb-8 leading-relaxed"
              />

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/about" className="btn-primary-light">
                  <span>OUR STORY &amp; PHILOSOPHY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline-light">
                  VIEW ALL SERVICES
                </Link>
              </div>
            </motion.div>

            {/* Right Architectural Photography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-charcoal/15 shadow-card">
                <img
                  src="/images/about-studio.jpg"
                  alt="Gautam Interiors material curation studio in Bengaluru"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Stat Badge */}
              <div className="mt-4 lg:absolute lg:-bottom-6 lg:-left-6 bg-charcoal text-[#F8F7F3] border border-white/20 p-5 shadow-elevated max-w-xs">
                <div className="font-display text-3xl font-light text-gold leading-none">
                  4.9 / 5.0
                </div>
                <div className="type-label-sm text-[#85847E] mt-1 tracking-wider text-[10px]">
                  RATED ACROSS 38 VERIFIED GOOGLE REVIEWS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — DESIGN PHILOSOPHY (DEEP BLACK SECTION: #0D0D0C)
          ========================================================================= */}
      <section className="section-spacing bg-[#0D0D0C] text-[#F8F7F3] border-y border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <span className="type-label-md text-gold block mb-3">
                OUR DESIGN PHILOSOPHY
              </span>
              <h2 className="type-headline-lg text-[#F8F7F3] mb-6 leading-tight">
                Good Design Is Felt,{' '}
                <span className="italic font-light text-gold">Not Just Seen.</span>
              </h2>

              <MobileExpandableText
                preview="True luxury in an interior is not measured by ostentation, but by how effortlessly a home functions and how calm it makes you feel at the end of a demanding day."
                fullText="True luxury in an interior is not measured by ostentation, but by how effortlessly a home functions and how calm it makes you feel at the end of a demanding day. We believe in material honesty: authentic stone that carries natural coolness, warm timber veneers that age with character, glare-free architectural illumination, and custom cabinetry crafted to millimeter precision."
                isDarkTheme={true}
                className="type-body-lg text-[#F5F4EF] mb-8 leading-relaxed"
              />

              <div className="space-y-4 pt-2">
                {[
                  'Functionality as the foundation of every layout',
                  'Careful curation of climate-resilient natural materials',
                  'Precision detailing across every millwork joint',
                  'Craftsmanship executed by disciplined, skilled artisans',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 type-body-sm text-[#F8F7F3]">
                    <span className="w-5 h-5 rounded-full bg-deep-black border border-gold flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gold" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 flex flex-col"
            >
              {/* Separate Image Container - No Text Over Image on mobile */}
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
                <img
                  src="/images/service-painting.jpg"
                  alt="Precision craftsmanship and textured finishing at Gautam Interiors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 bg-deep-black border-t-0 border border-white/15">
                <p className="type-caption text-gold mb-1">CRAFT DISCIPLINE</p>
                <p className="type-body-sm text-[#F8F7F3]">
                  Natural limewash textures, flush fluted oak joints, and brushed brass details executed on site.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — FEATURED SERVICES (Pure Soft White #FAFAF7)
          ========================================================================= */}
      <section className="section-spacing bg-[#FAFAF7] text-charcoal border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="type-label-md text-[#85847E] block mb-3">
                AREAS OF EXPERTISE
              </span>
              <h2 className="type-headline-lg text-charcoal">
                Featured Interior{' '}
                <span className="italic font-light text-[#85847E]">Disciplines.</span>
              </h2>
            </div>
            <p className="type-body-md text-[#85847E] max-w-md">
              Comprehensive interior solutions from concept and material sourcing to turnkey execution
              across Bengaluru.
            </p>
          </div>

          {/* 6-Card Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group flex flex-col bg-white border border-charcoal/10 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/11] overflow-hidden relative bg-charcoal/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/90 text-gold px-3 py-1 type-label-sm">
                    {service.number}
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="type-headline-sm text-charcoal mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <MobileExpandableText
                      preview={service.shortDesc}
                      fullText={service.fullDesc}
                      className="type-body-sm text-[#85847E] mb-6 leading-relaxed"
                    />
                  </div>

                  <Link
                    to={`/services#${service.id}`}
                    className="type-label-sm text-charcoal inline-flex items-center gap-1.5 group-hover:text-gold transition-colors font-medium pt-3 border-t border-charcoal/10"
                  >
                    <span>EXPLORE SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline-light">
              <span>VIEW ALL 8 INTERIOR SERVICES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — MANUAL HORIZONTAL INSPIRATION GALLERY WITH DRAG SUPPORT
          Deep Black Section Background (#0D0D0C) - Contrast with Ivory Services
          ========================================================================= */}
      <HorizontalGallery
        title="Crafted Spaces, Enduring Stories."
        subtitle="A curated selection of interior concepts across living rooms, primary suites, modular kitchens, and contemporary minimalist spaces. Drag, swipe or click arrows to explore."
        categoryTag="FEATURED INSPIRATION GALLERY"
        items={featuredProjects}
        bgClass="bg-[#0D0D0C] text-[#F8F7F3] border-b border-white/10"
        isDarkTheme={true}
        onOpenConsultation={onOpenConsultation}
      />

      {/* =========================================================================
          SECTION 6 — CRAFTSMANSHIP & QUALITY (Full-Width Deep Black #121212)
          Mandatory Headline: "Details Make the Difference."
          Pillars: Quality Materials, Attention to Detail, Finishing, Timely Delivery, Customer Satisfaction
          ========================================================================= */}
      <section className="section-spacing bg-[#121212] text-[#F8F7F3] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="type-label-md text-gold block mb-3">
              CRAFTSMANSHIP &amp; QUALITY
            </span>
            <h2 className="type-headline-lg text-[#F8F7F3] mb-4">
              Details Make the{' '}
              <span className="italic font-light text-gold">Difference.</span>
            </h2>
            <p className="type-body-md text-[#C9C9C1]">
              We believe an exceptional interior is defined by uncompromising material honesty,
              millimeter joinery precision, and reliable execution milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-deep-black/60 border border-white/15 p-8 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-charcoal border border-gold/40 flex items-center justify-center text-gold mb-5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="type-headline-sm text-[#F8F7F3] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="type-label-sm text-gold mb-4 text-[10px] tracking-wider">
                    {pillar.subtitle}
                  </p>
                  <p className="type-body-sm text-[#C9C9C1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — CUSTOMER TESTIMONIALS (Warm Off-White #FAFAF7)
          CRITICAL REQUIREMENT: REVIEWS REMAIN FULLY VISIBLE ON BOTH MOBILE & DESKTOP
          ========================================================================= */}
      <section className="section-spacing bg-[#FAFAF7] text-charcoal border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="type-label-md text-[#85847E] block mb-3">
                VERIFIED CLIENT FEEDBACK
              </span>
              <h2 className="type-headline-lg text-charcoal">
                Rated <span className="italic font-light text-[#85847E]">4.9 / 5.0</span> on Google.
              </h2>
            </div>

            <div className="flex items-center gap-4 border border-charcoal/15 bg-white px-6 py-4 shadow-sm">
              <div className="font-display text-4xl text-charcoal font-light leading-none">
                4.9
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="type-label-sm text-[#85847E] tracking-wider text-[10px]">
                  BASED ON 38 VERIFIED REVIEWS
                </div>
              </div>
            </div>
          </div>

          {/* Actual Google Review Cards - FULLY VISIBLE, NEVER TRUNCATED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GOOGLE_REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-charcoal/10 p-8 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-6 h-6 text-gold" />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="type-headline-sm text-charcoal mb-8 leading-snug">
                    “{review.quote}”
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
                  <div>
                    <div className="type-label-sm text-charcoal font-medium">
                      {review.author}
                    </div>
                    <div className="type-body-sm text-[#85847E] text-xs mt-0.5">
                      {review.context}
                    </div>
                  </div>
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#85847E] hover:text-gold transition-colors"
                    aria-label="View Google Review"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FINAL CTA (Premium Ivory White #F8F7F3)
          ========================================================================= */}
      <section className="section-spacing bg-[#F8F7F3] text-charcoal">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="type-label-md text-[#85847E] block mb-3">
              YOUR PROJECT STARTS HERE
            </span>
            <h2 className="type-headline-lg text-charcoal mb-6 leading-tight">
              Let&apos;s Create a Space You&apos;ll{' '}
              <span className="italic font-light text-[#85847E]">
                Love Coming Home To.
              </span>
            </h2>
            <p className="type-body-lg text-charcoal/85 mb-10 leading-relaxed max-w-xl mx-auto">
              Schedule a complimentary design brief with our team. We will review your floor plans,
              discuss functional goals, and outline a transparent path forward.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenConsultation('Home Final CTA')}
                className="btn-primary-light !py-4 !px-8 text-xs"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <Link to="/contact" className="btn-outline-light !py-4 !px-8 text-xs">
                VISIT OUR STUDIO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
