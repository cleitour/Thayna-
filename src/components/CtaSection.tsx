import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_LINK } from './HeaderNav';

export default function CtaSection() {
  return (
    <section
      id="contato"
      className="carousel-section min-h-[75vh] py-16 px-4 sm:px-6 flex items-center justify-center relative"
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Deep luxury sage container with soft 3D elevation */}
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card-dark text-white text-center overflow-hidden border border-[#528069]/30 shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#5A8872]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#2D503E]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-[#CFE2D7] font-medium border border-white/10">
              <HeartPulse className="w-3.5 h-3.5 text-[#86D49D]" />
              <span>Dê o primeiro passo hoje</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Pronta para começar sua mudança?
            </h2>

            <p className="text-sm sm:text-base text-[#D0E2D8] font-normal leading-relaxed text-balance">
              Cada objetivo merece uma estratégia individualizada. Entre em contato e saiba mais sobre o atendimento nutricional.
            </p>

            {/* Botão Grande AGENDAR CONSULTA com acabamento 3D */}
            <div className="pt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#14261D] bg-gradient-to-b from-[#FFFFFF] via-[#F4F8F5] to-[#DCE8E0] hover:to-[#CFDFD4] rounded-2xl shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_6px_20px_rgba(0,0,0,0.35),0_12px_28px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span className="tracking-wide">AGENDAR CONSULTA</span>
                <ArrowRight className="w-4 h-4 text-[#14261D] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-4 text-xs text-[#A8C7B5]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#86D49D]" />
                Resposta rápida no WhatsApp
              </span>
              <span aria-hidden="true" className="text-[#5B806E]">·</span>
              <span>On-line & Presencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
