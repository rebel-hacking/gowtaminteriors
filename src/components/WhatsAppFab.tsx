import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const WhatsAppFab: React.FC = () => {
  return (
    <a
      href={STUDIO_INFO.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gautam Interiors on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 rounded-full bg-secondary text-on-primary px-5 py-3.5 shadow-whatsapp hover:scale-105 transition-transform duration-300 ease-luxury"
    >
      <MessageCircle className="w-5 h-5 fill-on-primary/10" />
      <span className="type-label-sm hidden sm:inline">WHATSAPP STUDIO</span>
    </a>
  );
};

