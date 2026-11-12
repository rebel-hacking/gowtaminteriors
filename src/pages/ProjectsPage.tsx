import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/studioData';
import { HorizontalGallery } from '../components/HorizontalGallery';
import { SEOHead } from '../components/SEOHead';

const CATEGORIES = [
  'All Concepts',
  'Living Rooms',
  'Bedrooms',
  'Kitchens',
  'Residential Interiors',
  'Commercial Interiors',
  'Contemporary Minimalist Spaces',
] as const;

interface ProjectsPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Concepts');

  const filtered =
    activeCategory === 'All Concepts'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProjects = PORTFOLIO_PROJECTS.filter((p) => p.isFeatured);

  return (
    <div className="overflow-x-clip bg-[#FAFAF7]">
      <SEOHead
        title="Design Inspiration & Concepts | Gautam Interiors Bengaluru"
        description="Explore design inspirations and curated interior concepts by Gautam Interiors: contemporary living rooms, modular kitchens, calm primary bedrooms, and minimalist spaces."
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
                  DESIGN INSPIRATION &amp; CURATED CONCEPTS
                </span>
              </div>

              <h1 className="type-headline-display text-charcoal mb-6 leading-tight">
                Curated Architectural{' '}
                <span className="italic font-light text-gold">Concepts.</span>
              </h1>

              <p className="type-body-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
                Explore our curated design concepts across contemporary residences, modular kitchens,
                restful bedroom sanctuaries, and commercial suites. Each study demonstrates minimal European
                proportions, rich tactile materials, and disciplined craftsmanship.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Inspiration Gallery Discussion')}
                  className="btn-primary-light"
                >
                  <span>DISCUSS YOUR VISION</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
                <a
                  href="#gallery-archive"
                  className="btn-outline-light"
                >
                  <span>BROWSE ARCHIVE</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Inspiration Imagery */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-charcoal/15 shadow-card bg-white">
                <img
                  src="/images/hero-living.jpg"
                  alt="Interior design concepts by Gautam Interiors Bengaluru"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t-0 border border-charcoal/15 text-xs text-[#85847E] flex items-center justify-between shadow-xs">
                <span className="font-semibold text-charcoal tracking-wide">
                  EUROPEAN CONTEMPORARY MINIMALISM
                </span>
                <span className="text-gold font-medium">6 CATEGORIES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — MANUAL HORIZONTAL HIGHLIGHTS (BLACK SECTION 1: #0D0D0C)
          ========================================================================= */}
      <HorizontalGallery
        title="Signature Architectural Highlights"
        subtitle="Curated design studies demonstrating our commitment to quality materials, natural illumination, and meticulous finishing. Drag or swipe to explore."
        categoryTag="CURATED SHOWCASE"
        items={featuredProjects}
        bgClass="bg-[#0D0D0C] text-[#F8F7F3] border-b border-white/10"
        isDarkTheme={true}
        onOpenConsultation={onOpenConsultation}
      />

      {/* =========================================================================
          CATEGORY FILTER BAR (Clean White Sticky Strip)
          ========================================================================= */}
      <section id="gallery-archive" className="bg-white text-charcoal py-5 border-b border-charcoal/10 sticky top-[68px] z-30 backdrop-blur-md shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="type-label-sm text-[#85847E] hidden sm:inline font-semibold">
              FILTER BY CATEGORY:
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 type-label-sm transition-all duration-200 text-[10px] ${
                      active
                        ? 'bg-charcoal text-white shadow-sm'
                        : 'bg-[#F8F7F3] text-charcoal hover:bg-white border border-charcoal/15'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <span className="type-caption text-[#85847E] text-[10px]">
              SHOWING {filtered.length} {filtered.length === 1 ? 'CONCEPT' : 'CONCEPTS'}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO ASYMMETRICAL GALLERY GRID (Pure Soft White #FAFAF7)
          Strict Rule: Separate Image and Content Containers (NO text overlaying image)
          ========================================================================= */}
      <section className="section-spacing bg-[#FAFAF7] text-charcoal min-h-[600px] border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => {
                const isWide = idx % 3 === 0;
                const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45 }}
                    className={`w-full ${colSpan}`}
                  >
                    <Link
                      to={`/projects/${project.id}`}
                      className="group block bg-white border border-charcoal/10 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden"
                    >
                      {/* Separate Image Container */}
                      <div
                        className={`overflow-hidden relative bg-charcoal/5 ${
                          isWide ? 'aspect-[16/10]' : 'aspect-[4/3]'
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-charcoal/90 text-gold px-3 py-1 type-label-sm text-[10px]">
                          {project.category.toUpperCase()}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/90 text-charcoal type-caption px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium">
                          STYLE INSPIRATION
                        </div>
                      </div>

                      {/* Separate Content Container Below Image */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-[#85847E] mb-2.5">
                            <span className="inline-flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-gold" />
                              {project.style}
                            </span>
                            <span>·</span>
                            <span className="inline-flex items-center gap-1">
                              <Layers className="w-3.5 h-3.5 text-gold" />
                              {project.typology}
                            </span>
                          </div>

                          <h3 className="type-headline-sm text-charcoal mb-2.5 group-hover:text-gold transition-colors">
                            {project.title}
                          </h3>

                          <p className="type-body-sm text-[#85847E] line-clamp-2 mb-6 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
                          <span className="type-label-sm text-charcoal inline-flex items-center gap-1 group-hover:text-gold transition-colors font-medium">
                            <span>EXPLORE DESIGN CONCEPT</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                          <span className="text-xs text-[#85847E]">
                            {project.area}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — AUTHENTIC INSPIRATION NOTE (BLACK SECTION 2: #121212)
          ========================================================================= */}
      <section className="section-spacing bg-[#121212] text-[#F8F7F3] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-deep-black border border-white/15 text-xs text-gold mb-5">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="type-label-sm tracking-wider">
                AUTHENTIC INSPIRATION &amp; CONCEPT ARCHIVE
              </span>
            </div>
            <h2 className="type-headline-lg text-[#F8F7F3] mb-4">
              Designed With Honesty &amp; Proportions.
            </h2>
            <p className="type-body-md text-[#C9C9C1] leading-relaxed mb-6">
              These visuals represent curated design inspirations, material palettes, and architectural concepts
              created to guide your project in Bengaluru. We respect our clients’ privacy and do not display personal
              residences publicly without explicit written consent.
            </p>
            <p className="type-body-sm text-[#85847E] leading-relaxed">
              To review physical material samples, joinery mockups, and inspect in-progress project documentation,
              we welcome you to visit our studio in Vijaya Bank Layout, Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — FINAL PROJECTS CTA (BLACK SECTION 3: #0D0D0C)
          ========================================================================= */}
      <section className="section-spacing bg-[#0D0D0C] text-[#F8F7F3]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="type-label-md text-gold block mb-3">
              INSPIRED BY OUR WORK?
            </span>
            <h2 className="type-headline-lg text-[#F8F7F3] mb-6">
              Let&apos;s Create Your Signature Space.
            </h2>
            <p className="type-body-lg text-[#C9C9C1] mb-8 leading-relaxed">
              Every home we design is customized from a clean slate. Schedule your initial project brief today.
            </p>
            <button
              type="button"
              onClick={() => onOpenConsultation('Portfolio Page CTA')}
              className="btn-primary-dark !py-4 !px-8 text-xs"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
