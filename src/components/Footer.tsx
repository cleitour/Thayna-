import React from 'react';
import { ArrowUp, MapPin, Phone, Instagram } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { ADDRESS_TEXT, INSTAGRAM_LINK, WHATSAPP_LINK } from './HeaderNav';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="bg-[#12221B] text-[#DCE7E1] pt-16 pb-24 sm:pb-16 px-4 sm:px-6 relative overflow-hidden border-t border-white/10">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#2B4B3B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Identity & Specialties */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                Thayna Lucena
              </h3>
              <p className="text-sm font-semibold text-[#8EBBA3] tracking-wide uppercase mt-0.5">
                Nutricionista Clínica e Esportiva
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#A5C0B2] leading-relaxed max-w-sm">
              Sua alimentação como o primeiro passo para uma vida mais saudável, forte e equilibrada.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-[#BED4C8]">
              <div className="flex items-center gap-2 font-medium">
                <span>Emagrecimento</span>
                <span aria-hidden="true" className="text-[#5F8873]">·</span>
                <span>Saúde</span>
                <span aria-hidden="true" className="text-[#5F8873]">·</span>
                <span>Hipertrofia</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-medium">
                <span>On-line</span>
                <span aria-hidden="true" className="text-[#5F8873]">|</span>
                <span>Presencial</span>
              </div>
            </div>
          </div>

          {/* Contact and Links */}
          <div className="md:col-span-6 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8EBBA3]">
              Canais & Atendimento
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* WhatsApp link */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#DCE7E1] hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-white block">WhatsApp</span>
                  <span className="text-xs text-[#9BBBA9] group-hover:underline">Fale conosco e agende sua consulta</span>
                </div>
              </a>

              {/* Instagram link */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#DCE7E1] hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#E1306C]/15 text-[#FF7096] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-white block">Instagram</span>
                  <span className="text-xs text-[#9BBBA9] group-hover:underline">@nutri.thaynalucena</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-[#DCE7E1]">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-[#8EBBA3] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-white block">Endereço Presencial</span>
                  <span className="text-xs text-[#9BBBA9] leading-relaxed block mt-0.5">
                    {ADDRESS_TEXT}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9E8C]">
          <p>
            © {new Date().getFullYear()} Thayna Lucena. Todos os direitos reservados.
          </p>

          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D2E2D9] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
