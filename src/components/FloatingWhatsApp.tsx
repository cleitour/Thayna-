import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_LINK } from './HeaderNav';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 pointer-events-auto"
    >
      {/* Optional micro label on hover or subtle greeting */}
      <span
        className={`hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/95 text-[#14261D] text-xs font-semibold shadow-lg border border-[#3E6150]/15 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Agende no WhatsApp
      </span>

      {/* Floating 3D Action Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center text-white btn-3d-whatsapp float-wa-btn active:scale-95 transition-transform duration-200 group cursor-pointer"
        aria-label="Falar com Thayna Lucena no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />

        {/* Ambient subtle ping indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#1E9E4B] border-2 border-white" />
        </span>
      </a>
    </aside>
  );
}
