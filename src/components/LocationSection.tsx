import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Building2 } from 'lucide-react';
import { ADDRESS_TEXT, MAPS_LINK } from './HeaderNav';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const encodedAddress = encodeURIComponent(ADDRESS_TEXT);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="localizacao"
      className="carousel-section min-h-[90vh] py-16 px-4 sm:px-6 flex items-center justify-center relative"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#406753]">
            Consultório Físico
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14261D] mt-1">
            Atendimento presencial
          </h2>
          <p className="text-sm text-[#436151] max-w-md mx-auto mt-2">
            Espaço preparado para receber você com conforto, discrição e excelência técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card de Informações e Endereço */}
          <div className="md:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/85 backdrop-blur-sm border border-[#3E6150]/15 shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#3E6351]/10 text-[#2B4D3C] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#527463]">
                  Endereço Oficial
                </span>
                <p className="text-base sm:text-lg font-bold text-[#14261D] mt-1 leading-snug">
                  Av. Joaquim da Costa Lima, 15100
                </p>
                <p className="text-sm text-[#2E483A] font-medium">
                  Sala 105 · Lote XV
                </p>
                <p className="text-xs sm:text-sm text-[#4A6858] mt-0.5">
                  Belford Roxo - RJ, 26112-055, Brasil
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F2F7F3] border border-[#3A5F4D]/10 text-xs text-[#345142] flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#3E6552] shrink-0 mt-0.5" />
                <span>
                  Ambiente climatizado, acessível e com estacionamento nas proximidades.
                </span>
              </div>
            </div>

            {/* Ações: COMO CHEGAR + COPIAR ENDEREÇO */}
            <div className="space-y-2.5 pt-2">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white rounded-xl btn-3d-primary cursor-pointer group"
              >
                <Navigation className="w-4 h-4 text-[#D3E5DC] group-hover:rotate-45 transition-transform" />
                <span>COMO CHEGAR</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#253D30] rounded-xl btn-3d-secondary cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2A6644]" />
                    <span className="text-[#2A6644] font-semibold">Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#547363]" />
                    <span>Copiar endereço completo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden glass-card p-2 border border-[#3E6150]/15 min-h-[280px] flex flex-col">
            <div className="w-full h-full min-h-[280px] rounded-xl overflow-hidden relative shadow-inner">
              <iframe
                title="Mapa de localização do consultório de Thayna Lucena"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98]"
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#183124] shadow-sm hover:bg-white flex items-center gap-1.5 border border-[#385B4A]/10"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#385B4A]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
