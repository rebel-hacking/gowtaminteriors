import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, MapPin, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { STUDIO_INFO, WORK_PROCESS } from '../data/studioData';
import { MobileExpandableText } from '../components/MobileExpandableText';
import { SEOHead } from '../components/SEOHead';

interface AboutPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="overflow-x-clip bg-[#FAFAF7]">
      <SEOHead
        title="About Gautam Interiors | Interior Design Studio Bengaluru"
        description="Learn about Gautam Interiors, an established interior architecture and decoration studio in Vijaya Bank Layout, Bengaluru. Grounded in material authenticity, transparent pricing, and fine finishing."
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
                  ABOUT GAUTAM INTERIORS · BENGALURU
                </span>
              </div>

              <h1 className="type-headline-display text-charcoal mb-6 leading-tight">
                Designing Spaces.{' '}
                <span className="italic font-light text-gold">Creating Experiences.</span>
              </h1>

              <p className="type-body-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
                We blend interior architecture with bespoke finishing to create spaces
                that feel both grand and effortlessly intimate. Based in Vijaya Bank Layout, Bengaluru,
                we craft environments that evoke prestige, sophistication, and timeless calm.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenConsultation('About Page Hero Discussion')}
                  className="btn-primary-light"
                >
                  <span>SCHEDULE CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link to="/projects" className="btn-outline-light">
                  VIEW INSPIRATION ARCHIVE
                </Link>
              </div>
            </div>

            {/* Right Architectural Studio Imagery */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-charcoal/15 shadow-card bg-white">
                <img
                  src="/images/about-studio.jpg"
                  alt="Gautam Interiors material curation studio in Bengaluru"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t-0 border border-charcoal/15 text-xs text-[#85847E] flex items-center justify-between shadow-xs">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>VIJAYA BANK LAYOUT STUDIO</span>
                </span>
                <span className="text-gold font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  4.9 / 5.0 RATED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — OUR STORY (Clean Ivory White #FAFAF7)
          ========================================================================= */}
      <section className="section-spacing bg-[#FAFAF7] text-charcoal border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="type-label-md text-[#85847E] block mb-3">
                01 · OUR STORY &amp; FOUNDATION
              </span>
              <h2 className="type-headline-lg text-charcoal mb-6 leading-tight">
                Born From a Passion for{' '}
                <span className="italic font-light text-[#85847E]">
                  Authentic Craftsmanship.
                </span>
              </h2>

              <MobileExpandableText
                preview="Gautam Interiors was established in South Bengaluru with a single guiding mission: to deliver thoughtful, high-end interior spaces without the inflated overheads, opaque pricing, or unpredictable timelines that all too often trouble the home renovation industry."
                fullText="Gautam Interiors was established in South Bengaluru with a single guiding mission: to deliver thoughtful, high-end interior spaces without the inflated overheads, opaque pricing, or unpredictable timelines that all too often trouble the home renovation industry. Operating from our studio near Sana Super Mart in Vijaya Bank Layout, Kodichikkanahalli, we have built an honest reputation among homeowners and commercial operators across Bengaluru. Our work is grounded in respectful communication, meticulous site management, and an unyielding focus on lasting build quality."
                className="type-body-lg text-charcoal/85 mb-8 leading-relaxed"
              />

              <div className="p-6 bg-white border border-charcoal/15 shadow-sm">
                <div className="flex items-center gap-2 text-charcoal mb-2 font-display text-lg">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Vijaya Bank Layout Studio</span>
                </div>
                <p className="type-body-sm text-[#85847E] leading-relaxed">
                  {STUDIO_INFO.address}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Separate Image Container - No Text Over Image */}
              <div className="aspect-[4/3] overflow-hidden border border-charcoal/15 shadow-soft bg-white">
                <img
                  src="/images/service-residential.jpg"
                  alt="Contemporary residence designed by Gautam Interiors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t-0 border border-charcoal/10 text-xs text-[#85847E] flex items-center justify-between">
                <span>RESIDENTIAL RESIDENCE · BENGALURU</span>
                <span className="text-gold font-medium">PRECISION FINISH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — OUR DESIGN PHILOSOPHY (BLACK SECTION 1: #0D0D0C)
          ========================================================================= */}
      <section className="section-spacing bg-[#0D0D0C] text-[#F8F7F3] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="type-label-md text-gold block mb-3">
              02 · OUR DESIGN PHILOSOPHY
            </span>
            <h2 className="type-headline-lg text-[#F8F7F3] mb-6">
              Functionality First,{' '}
              <span className="italic font-light text-gold">Elevated by Material Beauty.</span>
            </h2>
            <p className="type-body-lg text-[#C9C9C1] leading-relaxed">
              We design homes from the inside out. We first study how light moves through your rooms,
              how family members interact at breakfast, and where quiet contemplation takes place.
              Only once spatial ergonomics are resolved do we introduce the tactile layers: hand-rubbed
              wood veneers, natural stone slabs, brushed brass accents, and custom linen drapery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Spatial Ergonomics',
                desc: 'Unobstructed circulation paths, intuitive drawer reaches, and natural cross-ventilation designed around real human movement.',
              },
              {
                num: '02',
                title: 'Material Honesty',
                desc: 'We select authentic stone, durable BWR plywood cores, and genuine wood textures that age with grace in Bengaluru’s climate.',
              },
              {
                num: '03',
                title: 'Layered Illumination',
                desc: 'Replacing harsh central lighting with perimeter cove channels, 2700K warm spotlights, and reading pendants for emotional calm.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#171715] border border-white/15 p-8 shadow-card flex flex-col justify-between"
              >
                <div>
                  <span className="type-label-sm text-gold block mb-3">{pillar.num}</span>
                  <h3 className="type-headline-sm text-[#F8F7F3] mb-3">{pillar.title}</h3>
                  <p className="type-body-sm text-[#C9C9C1] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — CRAFTSMANSHIP & RIGOR (BLACK SECTION 2: #121212)
          ========================================================================= */}
      <section className="section-spacing bg-[#121212] text-[#F8F7F3] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden border border-white/20">
                <img
                  src="/images/service-furniture.jpg"
                  alt="Curated furniture and material quality at Gautam Interiors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#0D0D0C] border-t-0 border border-white/15 text-xs text-[#C9C9C1] flex items-center justify-between">
                <span>ARTISANAL JOINERY</span>
                <span className="text-gold">SOLID WOOD &amp; MARBLE</span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="type-label-md text-gold block mb-3">
                03 · CRAFTSMANSHIP &amp; STANDARDS
              </span>
              <h2 className="type-headline-lg text-[#F8F7F3] mb-6 leading-tight">
                Our Commitment to{' '}
                <span className="italic font-light text-gold">
                  Quality Without Compromise.
                </span>
              </h2>

              <MobileExpandableText
                preview="Every project undertaken by Gautam Interiors follows strict engineering principles. We refuse to cut corners on core materials because what sits behind the laminate is what dictates how your home holds up a decade from now."
                fullText="Every project undertaken by Gautam Interiors follows strict engineering principles. We refuse to cut corners on core materials because what sits behind the laminate is what dictates how your home holds up a decade from now."
                isDarkTheme={true}
                className="type-body-lg text-[#F5F4EF] mb-8 leading-relaxed"
              />

              <div className="space-y-4 mb-8">
                {[
                  '100% Boiling Water Resistant (BWR / BWP) core ply for all wet zones',
                  'European soft-close hinges, tandem boxes and channels with 10-year guarantees',
                  'Laser-leveled wall fitment and ceiling track installations with zero sag',
                  'Low-VOC paints and odorless clear PU coatings for a healthy living environment',
                  'Full transparent Bill of Quantities (BOQ) with itemized specifications',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 type-body-sm text-[#F8F7F3]">
                    <span className="w-5 h-5 rounded-full bg-deep-black text-gold border border-gold/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR WORK PROCESS (Clean Ivory White #F8F7F3)
          ========================================================================= */}
      <section className="section-spacing bg-[#F8F7F3] text-charcoal border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="type-label-md text-[#85847E] block mb-3">
              04 · HOW WE WORK
            </span>
            <h2 className="type-headline-lg text-charcoal mb-4">
              A Structured,{' '}
              <span className="italic font-light text-[#85847E]">Transparent Process.</span>
            </h2>
            <p className="type-body-md text-[#85847E]">
              From our first studio conversation to the day we hand over your polished home,
              our five-step methodology guarantees clarity at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="bg-white border border-charcoal/10 p-6 flex flex-col justify-between shadow-soft"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F5F4EF] text-charcoal font-display text-lg flex items-center justify-center mb-4 border border-charcoal/10">
                    {proc.step}
                  </div>
                  <h3 className="type-headline-sm text-charcoal mb-1">{proc.title}</h3>
                  <p className="type-label-sm text-[#85847E] mb-3 text-[10px]">
                    {proc.subtitle}
                  </p>
                  <p className="type-body-sm text-[#85847E] leading-relaxed mb-6">
                    {proc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal/10">
                  <span className="type-label-sm text-charcoal block mb-2 text-[9px]">
                    KEY DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#85847E]">
                    {proc.keyOutputs.map((out) => (
                      <li key={out} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — ARCHITECTURAL REPUTATION (BLACK SECTION 3: #0D0D0C)
          ========================================================================= */}
      <section className="section-spacing bg-[#0D0D0C] text-[#F8F7F3] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="type-label-md text-gold block mb-3">
                05 · ARCHITECTURAL REPUTATION
              </span>
              <h2 className="type-headline-lg text-[#F8F7F3] mb-6">
                Rooted in Bengaluru,{' '}
                <span className="italic font-light text-gold">Trusted by Homeowners.</span>
              </h2>

              <MobileExpandableText
                preview="Our studio is located at 46, Chiye Davi Nilya, 3rd Cross, Kodichikkanahalli Main Road, near Sana Super Mart in Vijaya Bank Layout. With a 4.9 rating across 38 Google reviews, we pride ourselves on on-time handovers."
                fullText="Our studio is located at 46, Chiye Davi Nilya, 3rd Cross, Kodichikkanahalli Main Road, near Sana Super Mart in Vijaya Bank Layout. With a 4.9 rating across 38 Google reviews, we pride ourselves on delivering on-time handovers and courteous site conduct. Every project is executed with disciplined site supervision and transparent, itemized material costing."
                isDarkTheme={true}
                className="type-body-md text-[#C9C9C1] leading-relaxed mb-6"
              />

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-[#171715] border border-white/15 shadow-card">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="type-label-sm font-semibold text-[#F8F7F3]">WARRANTY</span>
                  </div>
                  <p className="type-body-sm text-[#C9C9C1]">10-year hardware and termite-resistant warranty</p>
                </div>
                <div className="p-5 bg-[#171715] border border-white/15 shadow-card">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <Sparkles className="w-5 h-5" />
                    <span className="type-label-sm font-semibold text-[#F8F7F3]">NO MARKUPS</span>
                  </div>
                  <p className="type-body-sm text-[#C9C9C1]">Transparent line-item BOQs with zero hidden fees</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden border border-white/20 shadow-card bg-deep-black">
                <img
                  src="/images/project-bedroom.jpg"
                  alt="Primary suite crafted by Gautam Interiors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — CTA (Clean Ivory White #FAFAF7)
          ========================================================================= */}
      <section className="section-spacing bg-[#FAFAF7] text-charcoal">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="type-label-md text-[#85847E] block mb-3">
              START YOUR CONVERSATION
            </span>
            <h2 className="type-headline-lg text-charcoal mb-6">
              Let&apos;s Discuss Your Space.
            </h2>
            <p className="type-body-lg text-charcoal/85 mb-8 leading-relaxed">
              Visit our Vijaya Bank Layout studio or arrange an on-site consultation anywhere in Bengaluru.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenConsultation('About Page CTA')}
                className="btn-primary-light"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link to="/projects" className="btn-outline-light">
                VIEW INSPIRATION ARCHIVE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
