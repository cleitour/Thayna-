import React from 'react';
import { Smartphone, Video, Clock, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import onlineSetupImg from '../assets/images/online_consultation_setup_1790826985121.jpg';
import { WHATSAPP_LINK } from './HeaderNav';

export default function OnlineConsultingSection() {
  return (
    <section
      id="atendimento"
      className="carousel-section min-h-[90vh] py-16 px-4 sm:px-6 flex items-center justify-center relative"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text and Features Column */}
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#406753]">
                Flexibilidade & Praticidade
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14261D] mt-1">
                Atendimento On-line
              </h2>
              <p className="text-sm sm:text-base text-[#3A5547] mt-3 leading-relaxed">
                Você pode contar com acompanhamento nutricional completo de onde estiver,
                com a mesma atenção, cuidado e rigor técnico do atendimento presencial.
              </p>
            </div>

            {/* Practical Pillars */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/70 border border-[#3E6150]/15">
                <div className="w-8 h-8 rounded-lg bg-[#3F6652]/10 text-[#2B4E3C] flex items-center justify-center shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#182F23]">Consulta por Videochamada</h3>
                  <p className="text-xs text-[#4F6C5D] mt-0.5">
                    Avaliação minuciosa da sua rotina, histórico, hábitos e objetivos em uma conversa detalhada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/70 border border-[#3E6150]/15">
                <div className="w-8 h-8 rounded-lg bg-[#3F6652]/10 text-[#2B4E3C] flex items-center justify-center shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#182F23]">Plano Alimentar Digital</h3>
                  <p className="text-xs text-[#4F6C5D] mt-0.5">
                    Acesso prático pelo smartphone ao seu plano, receitas e orientações a qualquer momento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/70 border border-[#3E6150]/15">
                <div className="w-8 h-8 rounded-lg bg-[#3F6652]/10 text-[#2B4E3C] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#182F23]">Suporte Direto no WhatsApp</h3>
                  <p className="text-xs text-[#4F6C5D] mt-0.5">
                    Canal direto para sanar dúvidas durante todo o período do seu acompanhamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Botão SAIBA MAIS direcionando para WhatsApp */}
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white rounded-xl btn-3d-primary cursor-pointer group"
              >
                <span>SAIBA MAIS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 shadow-xl border border-[#3E6150]/20">
              <img
                src={onlineSetupImg}
                alt="Acompanhamento nutricional on-line com tecnologia e conforto"
                className="w-full h-72 sm:h-80 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-2 bg-gradient-to-t from-[#14241C]/70 via-transparent to-transparent rounded-xl pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-[11px] font-medium text-white mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A3E5B5]" />
                  Mesma precisão e acompanhamento
                </span>
                <p className="font-display text-lg font-bold text-white">
                  Nutrição onde você estiver
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
