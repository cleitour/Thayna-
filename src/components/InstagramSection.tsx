import React from 'react';
import { ArrowUpRight, Flame, Heart, Dumbbell, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_LINK } from './HeaderNav';

export default function InstagramSection() {
  const previewTopics = [
    {
      title: 'Emagrecimento com Leveza',
      category: 'Rotina Saudável',
      snippet: 'Estratégias práticas para mudar hábitos sem restrições exageradas.',
      icon: Flame,
    },
    {
      title: 'Nutrição & Performance',
      category: 'Esporte & Treino',
      snippet: 'Como nutrir o corpo para melhorar a disposição e rendimento nos treinos.',
      icon: Dumbbell,
    },
    {
      title: 'Hipertrofia e Saúde',
      category: 'Qualidade de Vida',
      snippet: 'Constância alimentar para ganho de massa magra e bem-estar contínuo.',
      icon: Heart,
    },
  ];

  return (
    <section
      id="instagram"
      className="carousel-section min-h-[85vh] py-16 px-4 sm:px-6 flex items-center justify-center relative bg-gradient-to-b from-[#F8FAF7] via-[#F2F7F3] to-[#F8FAF7]"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#406753]">
            Redes Sociais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14261D]">
            Acompanhe meu trabalho
          </h2>
          <p className="text-sm sm:text-base text-[#3E5C4E] max-w-lg mx-auto leading-relaxed">
            Conteúdos sobre nutrição, saúde, emagrecimento, hipertrofia e qualidade de vida.
          </p>
        </div>

        {/* Feed thematic previews */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
          {previewTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/80 border border-[#3E6150]/15 shadow-xs hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3F6652]/10 text-[#2B4E3C] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-[#547564] uppercase tracking-wider">
                  {topic.category}
                </span>
                <h3 className="font-display text-base font-bold text-[#162A20] mt-0.5">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#4F6C5D] mt-2 leading-relaxed">
                  {topic.snippet}
                </p>
              </div>
            );
          })}
        </div>

        {/* Profile Card & Botão SEGUIR NO INSTAGRAM */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl glass-card border border-[#3E6150]/15 max-w-xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.postimg.cc/3NDcJ5DM/IMG-7265.jpg"
                  alt="Avatar Nutricionista Thayna Lucena"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('logo_original.jpg')) {
                      target.src = '/logo_original.jpg';
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#15281E]">@nutri.thaynalucena</p>
              <p className="text-xs text-[#527061]">Thayna Lucena · Nutricionista</p>
            </div>
          </div>

          {/* Botão Oficial 3D do Instagram */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold text-white rounded-xl btn-3d-instagram cursor-pointer group"
          >
            <InstagramIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">SEGUIR NO INSTAGRAM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
