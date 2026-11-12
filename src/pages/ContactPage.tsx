import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Navigation,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Compass,
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_LIST } from '../data/studioData';
import { SEOHead } from '../components/SEOHead';

const PROPERTY_TYPES = [
  'Apartment / Flat',
  'Independent Villa / House',
  'Commercial / Office',
  'Single Room / Nook',
  'Complete Renovation',
];

const BUDGET_RANGES = [
  '₹5L – ₹10L',
  '₹10L – ₹20L',
  '₹20L – ₹40L',
  '₹40L+',
  'Flexible / To Discuss',
];

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment / Flat');
  const [serviceRequired, setServiceRequired] = useState(SERVICES_LIST[0].title);
  const [budget, setBudget] = useState('₹10L – ₹20L');
  const [location, setLocation] = useState('Bengaluru');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Automatically open WhatsApp with pre-filled message
    try {
      window.open(getWhatsAppEnquiryUrl(), '_blank');
    } catch {
      // User has manual buttons in confirmation panel
    }
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hello Gautam Interiors, I would like to discuss an interior project:
• Name: ${fullName || 'Guest'}
• Phone: ${phone || 'Provided'}
• Email: ${email || 'Not specified'}
• Property: ${propertyType}
• Service: ${serviceRequired}
• Budget: ${budget}
• Location: ${location}
• Details: ${notes || 'Looking for an initial design consultation'}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="overflow-x-clip bg-[#FAFAF7] text-charcoal min-h-screen">
      <SEOHead
        title="Contact Gautam Interiors | Interior Decorators Bengaluru"
        description="Connect with Gautam Interiors in Vijaya Bank Layout, Bengaluru. Schedule a complimentary design consultation for residential, modular kitchen, or commercial interiors. Rated 4.9/5 on Google."
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
                  STUDIO CONSULTATIONS &amp; SITE VISITS
                </span>
              </div>

              <h1 className="type-headline-display text-charcoal mb-6 leading-tight">
                Your Space Deserves{' '}
                <span className="italic font-light text-gold">Thoughtful Design.</span>
              </h1>

              <p className="type-body-lg text-charcoal/80 max-w-2xl leading-relaxed mb-8">
                Whether planning a full residential transformation, an ergonomic modular kitchen,
                or bespoke drapery fitments, our Vijaya Bank Layout team is ready to listen and advise.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry-form"
                  className="btn-primary-light"
                >
                  <span>START PROJECT BRIEF</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="btn-outline-light inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>CALL STUDIO DIRECTLY</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Studio Imagery */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-charcoal/15 shadow-card bg-white">
                <img
                  src="/images/about-studio.jpg"
                  alt="Gautam Interiors studio in Bengaluru"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t-0 border border-charcoal/15 text-xs text-[#85847E] flex items-center justify-between shadow-xs">
                <span className="font-semibold text-charcoal tracking-wide">
                  VIJAYA BANK LAYOUT, BENGALURU
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
          SECTION 1 — INTRO BANNER (Clean White Strip)
          ========================================================================= */}
      <section className="bg-white text-charcoal py-6 border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#85847E]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block animate-pulse" />
              <span className="font-semibold uppercase tracking-wider text-charcoal">
                ACCEPTING COMMISSIONS ACROSS BENGALURU
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>RATED 4.9 / 5.0 (38 REVIEWS)</span>
              <span>·</span>
              <span>DIRECT ESTIMATES WITH ZERO MARKUPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — MAIN ENQUIRY FORM & STUDIO CARDS (Pure Soft White #FAFAF7)
          ========================================================================= */}
      <section id="enquiry-form" className="section-spacing bg-[#FAFAF7] scroll-mt-20 border-b border-charcoal/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-charcoal/15 shadow-soft">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F8F7F3] border border-gold flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-charcoal" />
                  </div>
                  <span className="type-label-md text-[#85847E] block mb-2">
                    PROJECT BRIEF SUBMITTED
                  </span>
                  <h3 className="type-headline-md text-charcoal mb-4">
                    Thank You, {fullName || 'Valued Client'}.
                  </h3>
                  <p className="type-body-md text-[#85847E] max-w-lg mx-auto mb-8 leading-relaxed">
                    We have received your project details for{' '}
                    <span className="font-semibold text-charcoal">{serviceRequired}</span> in{' '}
                    <span className="font-semibold text-charcoal">{location}</span>.
                    To connect instantly with our lead designer and share drawings or photos, tap below:
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-deep-black font-semibold type-label-md px-8 py-4 shadow-whatsapp hover:brightness-105 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>OPEN IN WHATSAPP</span>
                    </a>
                    <a
                      href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(
                        `Interior Design Project: ${serviceRequired} in ${location}`
                      )}&body=${encodeURIComponent(
                        `Hello Gautam Interiors,\n\nI would like to discuss an interior project:\n- Name: ${fullName}\n- Phone: ${phone}\n- Property: ${propertyType}\n- Service: ${serviceRequired}\n- Budget: ${budget}\n- Location: ${location}\n- Details: ${notes}`
                      )}`}
                      className="btn-outline-light inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>EMAIL BRIEF</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-light"
                    >
                      NEW INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="type-label-sm text-[#85847E] block mb-2">
                    START THE CONVERSATION
                  </span>
                  <h2 className="type-headline-md text-charcoal mb-2">
                    Tell Us About Your Project.
                  </h2>
                  <p className="type-body-sm text-[#85847E] mb-8 leading-relaxed">
                    Fill in your details below. We review all inquiries promptly to schedule a studio or on-site meeting.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Ananya Rao"
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-4 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98XXX XXXXX"
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-4 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-4 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-location"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Project Location in Bengaluru *
                        </label>
                        <input
                          id="contact-location"
                          type="text"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. Vijaya Bank Layout, HSR, Indiranagar"
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-4 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Service Required
                        </label>
                        <select
                          id="contact-service"
                          value={serviceRequired}
                          onChange={(e) => setServiceRequired(e.target.value)}
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-3 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        >
                          {SERVICES_LIST.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-property"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Property Type
                        </label>
                        <select
                          id="contact-property"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-3 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        >
                          {PROPERTY_TYPES.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-budget"
                          className="type-label-sm text-charcoal block mb-1.5"
                        >
                          Approx. Budget
                        </label>
                        <select
                          id="contact-budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-3 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150"
                        >
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-notes"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="contact-notes"
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about your spatial needs, move-in target, family requirements, or design preferences..."
                        className="w-full bg-[#FAFAF7] border border-charcoal/20 focus:border-charcoal px-4 py-3 text-charcoal type-body-sm outline-none transition-colors duration-150 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary-light w-full !py-4 text-xs font-semibold"
                    >
                      <span>DISCUSS MY PROJECT</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Dark Studio Headquarters Card + Google Rating Proof */}
            <div className="lg:col-span-5 space-y-8">
              {/* Dark Studio Info Card */}
              <div className="bg-[#121212] text-[#F8F7F3] p-8 sm:p-10 border border-white/15 shadow-card">
                <span className="type-label-sm text-gold block mb-2">
                  STUDIO HEADQUARTERS
                </span>
                <h3 className="type-headline-sm text-[#F8F7F3] mb-6">
                  {STUDIO_INFO.brandName}
                </h3>

                <div className="space-y-5 mb-8 text-[#C9C9C1] type-body-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="type-label-sm text-[#F8F7F3] block mb-1">
                        ADDRESS (NEAR SANA SUPER MART)
                      </span>
                      <p className="leading-relaxed">{STUDIO_INFO.address}</p>
                      <a
                        href={STUDIO_INFO.streetViewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gold hover:underline inline-flex items-center gap-1 mt-1.5"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>View 360° Studio Photosphere</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="type-label-sm text-[#F8F7F3] block mb-1">
                        STUDIO PHONE &amp; APPOINTMENTS
                      </span>
                      <a
                        href={`tel:${STUDIO_INFO.phone}`}
                        className="text-[#F8F7F3] hover:text-gold transition-colors font-medium"
                      >
                        {STUDIO_INFO.phoneDisplay}
                      </a>
                      <p className="text-xs text-[#85847E] mt-0.5">
                        Direct call for site consultation bookings pan-Bengaluru.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="type-label-sm text-[#F8F7F3] block mb-1">
                        DIRECT STUDIO EMAIL
                      </span>
                      <a
                        href={`mailto:${STUDIO_INFO.email}`}
                        className="text-[#F8F7F3] hover:text-gold transition-colors font-medium"
                      >
                        {STUDIO_INFO.email}
                      </a>
                      <p className="text-xs text-[#85847E] mt-0.5">
                        Send architectural floor plans, civil drawings, and briefs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="type-label-sm text-[#F8F7F3] block mb-1">
                        HOURS &amp; APPOINTMENTS
                      </span>
                      <p className="leading-relaxed">{STUDIO_INFO.hours}</p>
                      <p className="text-xs text-[#85847E] mt-0.5">
                        Site visits and studio meetings scheduled pan-Bengaluru.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/15 flex flex-wrap gap-3">
                  <a
                    href={STUDIO_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-dark !py-3 !px-5 text-xs flex-1 text-center"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>DIRECTIONS</span>
                  </a>
                  <a
                    href={STUDIO_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark !py-3 !px-5 text-xs flex-1 text-center text-secondary border-secondary/50 hover:border-secondary"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Clean White Google Reviews Proof Card */}
              <div className="bg-white border border-charcoal/15 p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="type-label-sm text-[#85847E]">
                    GOOGLE RATING
                  </span>
                </div>

                <div className="font-display text-4xl text-charcoal font-light leading-none mb-2">
                  4.9 / 5.0
                </div>
                <p className="type-body-sm text-[#85847E] mb-6">
                  Based on 38 verified client reviews in Bengaluru.
                </p>

                <a
                  href={STUDIO_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-label-sm text-charcoal hover:text-gold inline-flex items-center gap-1 transition-colors font-medium"
                >
                  <span>READ VERIFIED REVIEWS ON GOOGLE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — STUDIO LOCATION & ACCESSIBILITY (BLACK SECTION 1: #0D0D0C)
          ========================================================================= */}
      <section className="section-spacing bg-[#0D0D0C] text-[#F8F7F3] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="type-label-md text-gold block mb-3">
                LOCATION &amp; ACCESSIBILITY
              </span>
              <h2 className="type-headline-lg text-[#F8F7F3] mb-6">
                Conveniently Located in South Bengaluru.
              </h2>
              <p className="type-body-lg text-[#C9C9C1] leading-relaxed mb-6">
                Our design studio is situated near Sana Super Mart on Kodichikkanahalli Main Road,
                Vijaya Bank Layout. We welcome homeowners, architects, and business clients for in-person
                material consultations, joinery sample reviews, and project roadmapping.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={STUDIO_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-dark !py-3.5 !px-6"
                >
                  <Navigation className="w-4 h-4 mr-1.5" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                </a>
                <a
                  href={STUDIO_INFO.streetViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark !py-3.5 !px-6"
                >
                  <Compass className="w-4 h-4 mr-1.5 text-gold" />
                  <span>360° STREET VIEW</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 bg-[#171715] border border-white/15 shadow-card">
                <span className="type-label-sm text-gold block mb-2">
                  LANDMARKS &amp; TRANSIT
                </span>
                <div className="space-y-4 text-xs text-[#C9C9C1]">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span>Located directly in Sana Super Mart building vicinity</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span>Quick connectivity from Bannerghatta Road, Bilekahalli &amp; BTM Layout</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span>Dedicated client parking available for scheduled studio appointments</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span>On-site architectural visits scheduled pan-Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — DIRECT CHANNELS (BLACK SECTION 2: #121212)
          ========================================================================= */}
      <section className="section-spacing bg-[#121212] text-[#F8F7F3]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <span className="type-label-md text-gold block mb-3">
            NEED QUICK ANSWERS?
          </span>
          <h2 className="type-headline-lg text-[#F8F7F3] mb-6">
            Connect With Our Team Today.
          </h2>
          <p className="type-body-lg text-[#C9C9C1] mb-8 leading-relaxed">
            Whether you have architectural blueprints ready or are just exploring preliminary ideas,
            our senior designers are here to assist.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={STUDIO_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary text-deep-black font-semibold type-label-md px-8 py-3.5 shadow-whatsapp hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP CONSULTATION</span>
            </a>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="btn-outline-dark !py-3.5 !px-8 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>{STUDIO_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="btn-outline-dark !py-3.5 !px-8 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>EMAIL STUDIO</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
