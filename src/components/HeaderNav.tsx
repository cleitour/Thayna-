import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface HeaderNavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'atuacao', label: 'Atuação' },
  { id: 'emagrecimento', label: 'Emagrecimento' },
  { id: 'esportiva', label: 'Esportiva' },
  { id: 'atendimento', label: 'Atendimento' },
  { id: 'localizacao', label: 'Localização' },
  { id: 'contato', label: 'Contato' },
];

export const WHATSAPP_LINK = "https://wa.link/76a5hf";
export const INSTAGRAM_LINK = "https://www.instagram.com/nutri.thaynalucena?stkn=djdib25jamhjdnRx";
export const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Av.+Joaquim+da+Costa+Lima,+15100+-+Sala+105+-+Lote+XV,+Belford+Roxo+-+RJ,+26112-055,+Brasil";
export const ADDRESS_TEXT = "Av. Joaquim da Costa Lima, 15100 - Sala 105 - Lote XV, Belford Roxo - RJ, 26112-055, Brasil";

export default function HeaderNav({ onNavigate, activeSection }: HeaderNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8FAF7]/95 backdrop-blur-md border-b border-[#2C4A3C]/10 py-3 shadow-xs'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleItemClick('inicio')}
            className="text-left group cursor-pointer"
            aria-label="Ir para o início"
          >
            <span
              className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                isScrolled
                  ? 'text-[#1A2E24] group-hover:text-[#385C4C]'
                  : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] group-hover:text-[#E8D6C6]'
              }`}
            >
              Thayna Lucena
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop 5 items + dropdown/modal, mobile toggle) */}
          <nav
            className={`hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium transition-colors ${
              isScrolled ? 'text-[#2F473B]' : 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
            }`}
          >
            {navItems.slice(0, 6).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer ${
                    isActive
                      ? isScrolled
                        ? 'text-[#1B3528] font-semibold'
                        : 'text-white font-semibold'
                      : isScrolled
                      ? 'text-[#4A6356] hover:text-[#1B3528]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isScrolled ? 'bg-[#3B6350]' : 'bg-[#E8D6C6]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleItemClick('localizacao')}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-[#4A6356] hover:text-[#1B3528]' : 'text-white/80 hover:text-white'
              }`}
            >
              Localização
            </button>
          </nav>

          {/* Zone 3: Primary Action (WhatsApp appointment CTA) + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white rounded-lg btn-3d-primary cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Agendar Consulta</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#1A2E24] hover:bg-[#EAEFE9]'
                  : 'text-white hover:bg-white/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#12221B]/40 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 right-4 left-4 max-w-sm ml-auto glass-card rounded-2xl p-5 shadow-2xl border border-[#2F4E3F]/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#2C483A]/10 mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5A7467]">
                Navegação
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-[#375244] hover:bg-[#E2EBE5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1.5 py-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#3A604E] text-white font-semibold shadow-xs'
                        : 'text-[#1F3329] hover:bg-[#EAF0EC]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-2 border-t border-[#2C483A]/10 space-y-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white rounded-xl btn-3d-whatsapp cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#20362B] bg-[#EAEFEA] hover:bg-[#DFE7E1] rounded-xl transition-colors cursor-pointer"
              >
                <span>Instagram Oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#527061]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
