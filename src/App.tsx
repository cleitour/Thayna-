/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AreasSection from './components/AreasSection';
import OnlineConsultingSection from './components/OnlineConsultingSection';
import CtaSection from './components/CtaSection';
import InstagramSection from './components/InstagramSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import VerticalCarouselNav from './components/VerticalCarouselNav';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const carouselSections = useMemo(
    () => [
      { id: 'inicio', label: 'Início' },
      { id: 'sobre', label: 'Sobre a Thay' },
      { id: 'atuacao', label: 'Áreas de Atuação' },
      { id: 'atendimento', label: 'Atendimento On-line' },
      { id: 'contato', label: 'Agendar Consulta' },
      { id: 'instagram', label: 'Instagram Oficial' },
      { id: 'localizacao', label: 'Consultório Presencial' },
    ],
    []
  );

  // IntersectionObserver to sync activeSection with scroll position
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: [0.3, 0.6],
    });

    carouselSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [carouselSections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const currentIndex = carouselSections.findIndex((s) => s.id === activeSection);

  const handleNext = () => {
    if (currentIndex < carouselSections.length - 1) {
      scrollToSection(carouselSections[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToSection(carouselSections[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#1A2E24] relative selection:bg-[#395D4D] selection:text-white carousel-snap-container">
      {/* Subtle top reading progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#4E7662] via-[#2F5240] to-[#162B20] z-50 transition-all duration-200"
        style={{
          width: `${Math.max(5, ((currentIndex + 1) / carouselSections.length) * 100)}%`,
        }}
      />

      {/* Modern 3-zone Header Navigation */}
      <HeaderNav onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Vertical Carousel Navigation dots for desktop/tablet */}
      <VerticalCarouselNav
        sections={carouselSections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={Math.max(0, currentIndex)}
      />

      {/* Main Content Sections - Smooth Vertical Carousel Experience */}
      <main className="relative">
        {/* 01. Primeira Tela / Hero */}
        <HeroSection />

        {/* 02. Sobre Thayna */}
        <AboutSection />

        {/* 03. Áreas de Atuação (Emagrecimento, Nutrição Clínica, Esportiva, Hipertrofia) */}
        <AreasSection />

        {/* 04. Atendimento On-line */}
        <OnlineConsultingSection />

        {/* 05. Consulta / Chamada para Ação */}
        <CtaSection />

        {/* 06. Acompanhe meu trabalho / Instagram */}
        <InstagramSection />

        {/* 07. Atendimento Presencial / Localização */}
        <LocationSection />
      </main>

      {/* Rodapé Sofisticado */}
      <Footer onScrollToTop={() => scrollToSection('inicio')} />

      {/* Floating 3D WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
