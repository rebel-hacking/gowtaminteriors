import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/studioData';

interface ConsultationModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

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

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  initialTopic,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment / Flat');
  const [serviceRequired, setServiceRequired] = useState(
    SERVICES_LIST[0].title
  );
  const [budget, setBudget] = useState('₹10L – ₹20L');
  const [location, setLocation] = useState('Bengaluru');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setNotes(initialTopic);
    }
    if (isOpen) {
      setSubmitted(false);
    }
  }, [initialTopic, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#FAFAF7] text-charcoal border border-charcoal/15 p-6 sm:p-10 my-auto shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-charcoal/20 bg-white text-charcoal hover:bg-charcoal hover:text-white flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F8F7F3] border border-gold flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-charcoal" />
                </div>
                <span className="type-label-md text-[#85847E] block mb-2">
                  PROJECT BRIEF RECEIVED
                </span>
                <h3 className="type-headline-md text-charcoal mb-4">
                  Thank You, {fullName || 'Valued Client'}.
                </h3>
                <p className="type-body-md text-[#85847E] max-w-md mx-auto mb-8 leading-relaxed">
                  Our Bengaluru design team has noted your project for{' '}
                  <span className="font-semibold text-charcoal">{serviceRequired}</span> in{' '}
                  <span className="font-semibold text-charcoal">{location}</span>.
                  For fastest coordination, connect with our principal designer via WhatsApp below:
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-deep-black font-semibold type-label-md px-8 py-3.5 shadow-whatsapp hover:brightness-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>CONNECT ON WHATSAPP</span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-outline-light"
                  >
                    RETURN TO BROWSE
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="type-label-sm text-[#85847E] block mb-2">
                  GAUTAM INTERIORS · COMPLIMENTARY CONSULTATION
                </span>
                <h3 className="type-headline-md text-charcoal mb-2">
                  Discuss Your <span className="italic text-[#85847E]">Project</span>
                </h3>
                <p className="type-body-sm text-[#85847E] mb-6">
                  Vijaya Bank Layout Studio · Rated 4.9/5 on Google · Transparent Estimates
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh Iyer"
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3.5 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modal-phone"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3.5 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="modal-email"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3.5 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modal-location"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Project Location in Bengaluru
                      </label>
                      <input
                        id="modal-location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Vijaya Bank Layout, JP Nagar"
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3.5 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="modal-service"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Service Required
                      </label>
                      <select
                        id="modal-service"
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
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
                        htmlFor="modal-property"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Property Type
                      </label>
                      <select
                        id="modal-property"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
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
                        htmlFor="modal-budget"
                        className="type-label-sm text-charcoal block mb-1.5"
                      >
                        Approx. Budget
                      </label>
                      <select
                        id="modal-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150"
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
                      htmlFor="modal-notes"
                      className="type-label-sm text-charcoal block mb-1.5"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="modal-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share details such as room dimensions, move-in timeline, or specific requirements..."
                      className="w-full bg-white border border-charcoal/20 focus:border-charcoal px-3.5 py-2.5 text-charcoal type-body-sm outline-none transition-colors duration-150 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button type="submit" className="btn-primary-light w-full sm:flex-1">
                      <span>DISCUSS MY PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-outline-light w-full sm:w-auto"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
