import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface VerticalCarouselNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onNavigate: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
}

export default function VerticalCarouselNav({
  sections,
  activeSection,
  onNavigate,
  onNext,
  onPrev,
  currentIndex,
}: VerticalCarouselNavProps) {
  return (
    <aside
      aria-label="Controle de navegação do carrossel vertical"
      className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full glass-card border border-[#3E6150]/15 shadow-md"
    >
      {/* Up Button */}
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        aria-label="Seção anterior"
        className="p-1 rounded-full text-[#385949] hover:bg-[#E3EDE6] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Dots Indicator */}
      <div className="flex flex-col gap-2 py-1">
        {sections.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
              aria-label={`Ir para seção ${sec.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-full mr-3 px-2 py-1 rounded bg-[#182C22] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
                {sec.label}
              </span>

              {/* Dot */}
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-6 bg-[#365A49]'
                    : 'w-2 h-2 bg-[#8FAEA0]/50 hover:bg-[#365A49]/70'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Down Button */}
      <button
        onClick={onNext}
        disabled={currentIndex === sections.length - 1}
        aria-label="Próxima seção"
        className="p-1 rounded-full text-[#385949] hover:bg-[#E3EDE6] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </aside>
  );
}
