import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper component that scrolls to top or handles anchor scrolling on route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export const AppContent: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultTopic, setConsultTopic] = useState<string | undefined>(undefined);

  const openConsultation = (topic?: string) => {
    setConsultTopic(topic);
    setConsultOpen(true);
  };

  return (
    <div className="min-h-screen bg-warm-offwhite text-charcoal flex flex-col justify-between selection:bg-gold selection:text-deep-black">
      <ScrollToTop />
      <Navbar onOpenConsultation={openConsultation} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={openConsultation} />} />
          <Route path="/about" element={<AboutPage onOpenConsultation={openConsultation} />} />
          <Route path="/services" element={<ServicesPage onOpenConsultation={openConsultation} />} />
          <Route path="/projects" element={<ProjectsPage onOpenConsultation={openConsultation} />} />
          <Route path="/projects/:id" element={<ProjectDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage onOpenConsultation={openConsultation} />} />
          <Route path="*" element={<NotFoundPage onOpenConsultation={openConsultation} />} />
        </Routes>
      </main>

      <Footer onOpenConsultation={openConsultation} />
      <WhatsAppFab />

      <ConsultationModal
        isOpen={consultOpen}
        initialTopic={consultTopic}
        onClose={() => setConsultOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
