import React from 'react';
import { Heart, Activity, Dumbbell, Globe2 } from 'lucide-react';

export const THAYNA_PHOTO_URL = "https://i.postimg.cc/bJ0KQjws/E1C6EEBB-7EEE-4651-BE91-9A2FED72693F.png";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="carousel-section min-h-[90vh] py-16 px-4 sm:px-6 flex items-center justify-center relative"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#406753]">
            Apresentação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14261D] mt-1">
            Sobre a Thay
          </h2>
          <div className="w-12 h-0.5 bg-[#4B735F] mx-auto mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Visual card com a foto oficial da Thayna para o atendimento humanizado */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 shadow-xl border border-[#3E6150]/20 group">
              <div className="relative rounded-xl overflow-hidden bg-[#24352C]/10">
                <img
                  src={THAYNA_PHOTO_URL}
                  alt="Nutricionista Thayna Lucena - Atendimento humanizado"
                  className="w-full h-80 sm:h-[390px] object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('thayna_atendimento.png')) {
                      target.src = '/thayna_atendimento.png';
                    }
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14241C]/75 via-[#14241C]/15 to-transparent rounded-xl pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-medium text-white mb-1">
                    Atendimento humanizado
                  </span>
                  <p className="font-display text-lg font-bold text-white leading-snug">
                    Thayna Lucena
                  </p>
                  <p className="text-xs text-white/85">
                    Nutricionista Clínica e Esportiva
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Pillars */}
          <div className="md:col-span-7 space-y-5">
            <div className="space-y-3 text-[#294234] leading-relaxed text-sm sm:text-base">
              <p>
                Com dedicação e uma abordagem acolhedora, meu propósito é proporcionar um
                acompanhamento nutricional baseado em empatia, equilíbrio e resultados duradouros.
              </p>
              <p>
                Como <strong className="font-semibold text-[#183124]">Nutricionista Clínica e Esportiva</strong>,
                desenvolvo estratégias práticas que respeitam a sua rotina e preferências,
                tornando a alimentação uma grande aliada na sua qualidade de vida.
              </p>
            </div>

            {/* Áreas de destaque solicitadas */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/75 border border-[#3A5D4C]/10 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#3F6652]/10 flex items-center justify-center text-[#2F5240] mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-semibold text-[#1A2E24] uppercase tracking-wide">
                  Emagrecimento
                </h3>
                <p className="text-xs text-[#4F6C5D] mt-1">
                  Estratégia individual e equilíbrio de hábitos.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/75 border border-[#3A5D4C]/10 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#3F6652]/10 flex items-center justify-center text-[#2F5240] mb-2">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-semibold text-[#1A2E24] uppercase tracking-wide">
                  Saúde
                </h3>
                <p className="text-xs text-[#4F6C5D] mt-1">
                  Alimentação consciente e bem-estar integral.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/75 border border-[#3A5D4C]/10 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#3F6652]/10 flex items-center justify-center text-[#2F5240] mb-2">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-semibold text-[#1A2E24] uppercase tracking-wide">
                  Hipertrofia
                </h3>
                <p className="text-xs text-[#4F6C5D] mt-1">
                  Desempenho e ganho de massa muscular.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/75 border border-[#3A5D4C]/10 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#3F6652]/10 flex items-center justify-center text-[#2F5240] mb-2">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-semibold text-[#1A2E24] uppercase tracking-wide">
                  Formatos
                </h3>
                <p className="text-xs text-[#4F6C5D] mt-1">
                  Atendimento On-line e Presencial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
