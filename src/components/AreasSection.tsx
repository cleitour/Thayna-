import React from 'react';
import { Flame, Apple, Zap, Trophy, ArrowRight } from 'lucide-react';
import sportsNutritionImg from '../assets/images/sports_performance_nutrition_1790826973847.jpg';
import { WHATSAPP_LINK } from './HeaderNav';

interface AreaCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const areas: AreaCardProps[] = [
  {
    id: 'emagrecimento',
    title: 'Emagrecimento',
    subtitle: 'Mudança de hábitos consciente',
    description:
      'Apresentar a nutrição como parte de uma estratégia individualizada para mudança de hábitos e busca por uma rotina alimentar mais equilibrada.',
    icon: Flame,
    accentColor: 'from-[#3A5F4F] to-[#264236]',
  },
  {
    id: 'clinica',
    title: 'Nutrição Clínica',
    subtitle: 'Saúde e equilíbrio nutricional',
    description:
      'Abordagem voltada à saúde, alimentação equilibrada e acompanhamento nutricional com foco nas necessidades fisiológicas e qualidade de vida.',
    icon: Apple,
    accentColor: 'from-[#46705D] to-[#2F4D3F]',
  },
  {
    id: 'esportiva',
    title: 'Nutrição Esportiva',
    subtitle: 'Performance e composição corporal',
    description:
      'Estratégias nutricionais relacionadas à prática esportiva, desempenho atlético e otimização da composição corporal.',
    icon: Zap,
    accentColor: 'from-[#4F7B66] to-[#345546]',
  },
  {
    id: 'hipertrofia',
    title: 'Hipertrofia',
    subtitle: 'Massa muscular e evolução',
    description:
      'Acompanhamento nutricional voltado aos objetivos de ganho de massa muscular, respeitando o ritmo e as particularidades individuais.',
    icon: Trophy,
    accentColor: 'from-[#3A5D4C] to-[#20362B]',
  },
];

export default function AreasSection() {
  return (
    <section
      id="atuacao"
      className="carousel-section min-h-[90vh] py-16 px-4 sm:px-6 flex flex-col justify-center relative bg-gradient-to-b from-transparent via-[#EDF3EE]/40 to-transparent"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#406753]">
            Especialidades
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14261D] mt-1">
            Áreas de Atuação
          </h2>
          <p className="text-sm text-[#456353] max-w-md mx-auto mt-2">
            Acompanhamento individualizado e fundamentado para apoiar seus objetivos.
          </p>
        </div>

        {/* 4 Premium Cards with 3D Depth & Subtle Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                id={area.id}
                className="group relative p-6 rounded-2xl bg-white/85 backdrop-blur-sm border border-[#3E6150]/15 shadow-[0_4px_20px_-2px_rgba(28,48,38,0.06),0_1px_2px_rgba(28,48,38,0.04)] hover:shadow-[0_12px_28px_-4px_rgba(28,48,38,0.14)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* 3D Icon container */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.accentColor} text-white flex items-center justify-center shrink-0 shadow-md shadow-[#233C30]/20 border border-white/20 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#527463]">
                      {area.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#15281E]">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#385244] leading-relaxed mt-4 pt-3 border-t border-[#345544]/10">
                  {area.description}
                </p>

                <div className="mt-4 pt-2 flex items-center justify-between text-xs font-semibold text-[#325644] group-hover:text-[#183124] transition-colors">
                  <span>Plano individualizado</span>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#2F5240] hover:underline"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual strip showcasing natural nutrition and sports performance */}
        <div className="relative rounded-2xl overflow-hidden glass-card p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 border border-[#3E6150]/15">
          <div className="w-full sm:w-48 h-32 sm:h-28 rounded-xl overflow-hidden shrink-0 shadow-inner">
            <img
              src={sportsNutritionImg}
              alt="Alimentos naturais e equilíbrio para esportes e saúde"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-semibold text-[#406753] uppercase tracking-wide">
              Equilíbrio sem extremismos
            </span>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#14261D]">
              Metodologia prática e alinhada à sua rotina
            </h4>
            <p className="text-xs sm:text-sm text-[#436151] leading-relaxed">
              O plano alimentar ideal é aquele que você consegue sustentar com prazer, disposição e consistência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
