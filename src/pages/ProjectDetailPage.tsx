import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
  Check,
  Compass,
  Eye,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/studioData';
import { MobileExpandableText } from '../components/MobileExpandableText';
import { SEOHead } from '../components/SEOHead';

interface ProjectDetailPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  onOpenConsultation,
}) => {
  const { id } = useParams<{ id: string }>();

  const project: ProjectItem | undefined = PORTFOLIO_PROJECTS.find(
    (p) => p.id === id
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center pt-32 px-4 text-center bg-[#F8F7F3] text-charcoal">
        <SEOHead
          title="Concept Not Found | Gautam Interiors"
          description="The requested interior design concept could not be found. Explore Gautam Interiors inspiration archive."
        />
        <h1 className="type-headline-lg mb-4">Design Concept Not Found</h1>
        <p className="type-body-md text-[#85847E] mb-8 max-w-md">
          The requested concept could not be found or may have been relocated in our design inspiration archive.
        </p>
        <Link to="/projects" className="btn-primary-light">
          RETURN TO INSPIRATION GALLERY
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-clip bg-[#FAFAF7] text-charcoal">
      <SEOHead
        title={`${project.title} | Gautam Interiors Bengaluru`}
        description={project.summary}
        image={project.image}
      />

      {/* Top Breadcrumb Bar (pt-24 to clear fixed dark header cleanly) */}
      <div className="bg-[#F8F7F3] border-b border-charcoal/10 pt-24 pb-4">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="type-label-sm text-charcoal hover:text-gold inline-flex items-center gap-2 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO INSPIRATION GALLERY</span>
          </Link>
          <span className="type-caption text-[#85847E] font-medium">
            {project.category.toUpperCase()} · DESIGN INSPIRATION
          </span>
        </div>
      </div>

      {/* HERO SECTION (Clean Ivory White Hero #F8F7F3 - High Contrast Against Fixed Dark Header) */}
      <section className="bg-[#F8F7F3] text-charcoal border-b border-charcoal/10 py-10 lg:py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Title & Info */}
            <div className="lg:col-span-6">
              <span className="type-label-sm text-gold block mb-2 uppercase tracking-wider">
                {project.category.toUpperCase()} · DESIGN CONCEPT
              </span>
              <h1 className="type-headline-display text-charcoal mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="type-body-lg text-[#85847E] max-w-xl leading-relaxed mb-6">
                {project.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onOpenConsultation(`Discussing ${project.title} Concept`)
                  }
                  className="btn-primary-light"
                >
                  <span>DISCUSS THIS DESIGN</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
                <Link to="/contact" className="btn-outline-light">
                  SCHEDULE STUDIO VISIT
                </Link>
              </div>
            </div>

            {/* Featured Image Frame */}
            <div className="lg:col-span-6">
              <div className="aspect-[16/10] overflow-hidden border border-charcoal/15 shadow-card bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Meta Metrics Strip (BLACK SECTION 1: #0D0D0C) */}
      <section className="border-b border-white/10 bg-[#0D0D0C] text-[#F8F7F3] py-7">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="type-caption text-gold block mb-1">DESIGN STYLE</span>
              <p className="type-body-sm text-[#F8F7F3] font-medium flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                {project.style}
              </p>
            </div>
            <div>
              <span className="type-caption text-gold block mb-1">SPATIAL SCOPE</span>
              <p className="type-body-sm text-[#F8F7F3] font-medium flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-gold shrink-0" />
                {project.area}
              </p>
            </div>
            <div>
              <span className="type-caption text-gold block mb-1">DISCIPLINE</span>
              <p className="type-body-sm text-[#F8F7F3] font-medium flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-gold shrink-0" />
                {project.category}
              </p>
            </div>
            <div>
              <span className="type-caption text-gold block mb-1">TYPOLOGY</span>
              <p className="type-body-sm text-[#F8F7F3] font-medium flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-gold shrink-0" />
                {project.typology}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Narrative & Details (Clean Ivory White #FAFAF7) */}
      <section className="section-spacing bg-[#FAFAF7]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Narrative Column */}
            <div className="lg:col-span-7">
              <span className="type-label-md text-[#85847E] block mb-3">
                ARCHITECTURAL PHILOSOPHY
              </span>
              <h2 className="type-headline-lg text-charcoal mb-6">
                The Design Concept.
              </h2>

              <MobileExpandableText
                preview={project.summary}
                fullText={project.narrative}
                className="type-body-lg text-charcoal/85 mb-8 leading-relaxed"
              />

              {/* Design Highlights */}
              <div className="mb-10 p-8 bg-white border border-charcoal/15 shadow-sm">
                <h3 className="type-label-md text-charcoal mb-4 uppercase tracking-wider">
                  ARCHITECTURAL DETAILS &amp; SPECIFICATIONS:
                </h3>
                <div className="space-y-3">
                  {project.designHighlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-3 type-body-sm text-charcoal">
                      <span className="w-5 h-5 rounded-full bg-charcoal text-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Finishes */}
              {project.materials && project.materials.length > 0 && (
                <div className="p-8 bg-[#F8F7F3] border border-charcoal/10">
                  <h3 className="type-label-md text-charcoal mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold" />
                    <span>CURATED MATERIALS &amp; PALETTE:</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {project.materials.map((mat) => (
                      <span
                        key={mat}
                        className="px-3.5 py-1.5 bg-white border border-charcoal/15 text-charcoal type-label-sm text-xs font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar: Adaptation CTA */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="bg-[#121212] text-[#F8F7F3] p-8 border border-white/15 shadow-card">
                <span className="type-label-sm text-gold block mb-2">
                  CUSTOM EXECUTION
                </span>
                <h3 className="type-headline-sm text-[#F8F7F3] mb-3">
                  Bring This Aesthetic Home.
                </h3>
                <p className="type-body-sm text-[#C9C9C1] mb-6 leading-relaxed">
                  Our Bengaluru design team can customize this design direction around your unique floor plan, storage needs, and lifestyle aspirations.
                </p>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenConsultation(`Discussing ${project.title} Concept`)
                    }
                    className="btn-primary-dark w-full !py-3.5 text-xs text-center justify-center"
                  >
                    <span>ENQUIRE ABOUT THIS DESIGN</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </button>

                  <Link
                    to="/contact"
                    className="btn-outline-dark w-full !py-3.5 text-xs text-center justify-center block"
                  >
                    VISIT BENGALURU STUDIO
                  </Link>
                </div>

                <div className="text-center pt-4 mt-6 border-t border-white/10">
                  <span className="type-caption text-[#85847E] text-[10px]">
                    46, Vijaya Bank Layout, Bengaluru · Rated 4.9/5 on Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Exploration (BLACK SECTION 2: #121212) */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="section-spacing bg-[#121212] text-[#F8F7F3] border-t border-white/10">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="type-label-md text-gold block mb-2">
                CONCEPT PERSPECTIVES
              </span>
              <h2 className="type-headline-lg text-[#F8F7F3]">
                Architectural Perspectives
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] overflow-hidden border border-white/15 bg-deep-black shadow-soft"
                >
                  <img
                    src={img}
                    alt={`${project.title} detail view ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <section className="bg-white border-t border-charcoal/10 py-8">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="btn-outline-light !py-3 text-xs inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL DESIGN CONCEPTS</span>
          </Link>
          <Link
            to="/contact"
            className="btn-primary-light !py-3 text-xs inline-flex items-center gap-2"
          >
            <span>SCHEDULE STUDIO CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
