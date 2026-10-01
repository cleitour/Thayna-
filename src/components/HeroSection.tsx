import React from 'react';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_LINK } from './HeaderNav';

export const OFFICIAL_LOGO_URL = "https://i.postimg.cc/3NDcJ5DM/IMG-7265.jpg";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="carousel-section min-h-[92vh] sm:min-h-screen flex flex-col justify-start items-center pt-0 pb-16 px-0 relative overflow-hidden"
    >
      {/* BANNER DE LARGURA TOTAL: 100% da tela de ponta a ponta sem margens ou espaços brancos */}
      <div className="w-full relative overflow-hidden bg-[#241813] select-none">
        {/* Camada ambiente expandida nas extremidades para telas ultrawide com a mesma paleta rica da imagem */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-3xl scale-125 opacity-60 pointer-events-none"
          style={{ backgroundImage: `url(${OFFICIAL_LOGO_URL})` }}
          aria-hidden="true"
        />

        {/* Imagem oficial da logomarca: 100% da largura no celular, proporção preservada sem deformação ou corte */}
        <div className="relative z-10 w-full flex justify-center items-center">
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Logomarca Oficial Thayna Lucena Nutricionista"
            className="w-full h-auto max-w-[646px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl object-contain block mx-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.55)]"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('logo_original.jpg')) {
                target.src = '/logo_original.jpg';
              }
            }}
          />
        </div>

        {/* Sombra suave superior para contraste e elegância com o menu */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-20" />

        {/* DEGRADÊ SUAVE E ELEGANTE NA PARTE INFERIOR: Transição natural para o fundo #F8FAF7 */}
        <div 
          className="absolute inset-x-0 bottom-0 z-20 pointer-events-none"
          style={{
            height: '140px',
            background: 'linear-gradient(to bottom, rgba(248, 250, 247, 0) 0%, rgba(248, 250, 247, 0.15) 25%, rgba(248, 250, 247, 0.65) 60%, rgba(248, 250, 247, 0.95) 85%, #F8FAF7 100%)',
          }}
        />
      </div>

      {/* CONTEÚDO PRINCIPAL DA PRIMEIRA TELA ABAIXO DO BANNER */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 pt-2 sm:pt-4 relative z-30">
        {/* Nomes e Especialidades */}
        <div className="space-y-1.5 mb-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#14261D] leading-tight">
            Thayna Lucena
          </h1>
          <p className="text-sm sm:text-base font-semibold text-[#3B6350] tracking-wide uppercase">
            Nutricionista
          </p>
          <p className="text-base sm:text-lg font-medium text-[#2A4436]">
            Nutricionista Clínica e Esportiva
          </p>
        </div>

        {/* Frase de Impacto da Abertura */}
        <div className="max-w-md mx-auto my-2 px-2">
          <p className="text-sm sm:text-base text-[#344E41] font-normal leading-relaxed italic border-x border-[#3E6351]/20 px-4 py-1">
            “Sua alimentação pode ser o primeiro passo para uma vida mais saudável, forte e equilibrada.”
          </p>
        </div>

        {/* Chamada Complementar - Clean Unboxed Metadata */}
        <div className="flex flex-col items-center gap-1.5 my-4 text-xs sm:text-sm text-[#446052]">
          <div className="flex items-center gap-2 font-medium">
            <span>Emagrecimento</span>
            <span aria-hidden="true" className="text-[#84A98C]">·</span>
            <span>Saúde</span>
            <span aria-hidden="true" className="text-[#84A98C]">·</span>
            <span>Hipertrofia</span>
          </div>

          <div className="flex items-center gap-2 font-semibold text-[#274235] tracking-wide">
            <span>On-line</span>
            <span aria-hidden="true" className="text-[#A2BAA9]">|</span>
            <span>Presencial</span>
          </div>
        </div>

        {/* DOIS BOTÕES PRINCIPAIS COM ACABAMENTO 3D PREMIUM */}
        <div className="w-full max-w-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-2">
          {/* Botão 1: Agendar Consulta */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl btn-3d-primary cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#D8E6DE] group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">AGENDAR CONSULTA</span>
          </a>

          {/* Botão 2: Fale no WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl btn-3d-whatsapp cursor-pointer group"
          >
            <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">FALE NO WHATSAPP</span>
          </a>
        </div>

        {/* Small reassurance tag below buttons */}
        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-[#527061]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#385C4B]" />
            Atendimento individualizado
          </span>
          <span aria-hidden="true" className="text-[#BACBBE]">·</span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#385C4B]" />
            Clínica e Esportiva
          </span>
        </div>
      </div>
    </section>
  );
}
