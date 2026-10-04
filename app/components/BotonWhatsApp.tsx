'use client';

import { useMemo, useState } from 'react';
import { WhatsApp, Close } from '@mui/icons-material';
import { ArrowLeft, ChevronRight, Clock3, MapPin, MessageCircleMore, ShieldCheck } from 'lucide-react';

type Faq = { question: string; answer: string; icon: React.ReactNode };

export default function BotonWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const faqs: Faq[] = useMemo(() => [
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Atendemos de martes a domingo, de 7:00 AM a 4:00 PM. Los lunes permanecemos cerrados. La atención se realiza con cita previa para reservar su espacio.',
      icon: <Clock3 size={18} />,
    },
    {
      question: '¿Dónde se encuentra el centro podológico?',
      answer: 'Nos encontramos en Sabana Norte, San José, Costa Rica. Una vez coordinada su cita, puede solicitar la ubicación exacta y las indicaciones de llegada por WhatsApp.',
      icon: <MapPin size={18} />,
    },
    {
      question: 'No sé cuál tratamiento necesito, ¿qué hago?',
      answer: 'No es necesario que conozca el nombre del tratamiento. Puede escribirnos por WhatsApp, contarnos brevemente qué molestia presenta y coordinaremos la valoración más adecuada.',
      icon: <MessageCircleMore size={18} />,
    },
    {
      question: '¿Cómo se manejan la higiene y la esterilización?',
      answer: 'El centro trabaja con protocolos estrictos de bioseguridad, esterilización del instrumental y material de uso profesional para proteger su salud durante cada procedimiento.',
      icon: <ShieldCheck size={18} />,
    },
    {
      question: '¿Debo prepararme antes de mi cita?',
      answer: 'En general no requiere una preparación especial. Le recomendamos asistir con los pies limpios, evitar aplicar esmalte el mismo día y llevar cualquier información médica relevante para su atención.',
      icon: <MessageCircleMore size={18} />,
    },
  ], []);

  const whatsappHref = 'https://wa.me/50662500117?text=' + encodeURIComponent('Hola, me gustaría recibir información y coordinar una cita en el Centro Podológico Ximena Alvarado.');

  const close = () => {
    setIsOpen(false);
    setSelectedFaq(null);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] md:bottom-7 md:right-8 pointer-events-none">
      {isOpen && (
        <div className="pointer-events-auto fixed inset-0 z-[95] flex flex-col bg-[#f7f6f8] md:absolute md:inset-auto md:bottom-[76px] md:right-0 md:h-[610px] md:w-[390px] md:max-h-[calc(100vh-120px)] md:overflow-hidden md:rounded-[22px] md:border md:border-slate-200 md:bg-white md:shadow-[0_30px_80px_rgba(20,16,24,0.22)]">
          <header className="shrink-0 border-b border-white/10 bg-[#19161d] px-5 py-4 text-white md:px-6 md:py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3.5">
                {selectedFaq !== null ? (
                  <button onClick={() => setSelectedFaq(null)} aria-label="Volver a preguntas frecuentes" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                    <ArrowLeft size={18} />
                  </button>
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.18)]">
                    <WhatsApp sx={{ fontSize: 21 }} />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold tracking-[-0.01em]">Centro Podológico Ximena Alvarado</p>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                    Atención y consultas
                  </div>
                </div>
              </div>
              <button onClick={close} aria-label="Cerrar asistencia" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                <Close sx={{ fontSize: 20 }} />
              </button>
            </div>
          </header>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            {selectedFaq === null ? (
              <>
                <div className="border-b border-slate-200/70 bg-white px-5 py-6 md:px-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Asistencia rápida</p>
                  <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.035em] text-slate-950">¿En qué podemos ayudarle?</h3>
                  <p className="mt-2 text-[13px] leading-6 text-slate-500">Consulte información frecuente o continúe directamente por WhatsApp para una atención personalizada.</p>
                </div>

                <div className="px-4 py-4 md:px-5">
                  <p className="px-2 pb-3 text-[11px] font-semibold text-slate-400">Preguntas frecuentes</p>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    {faqs.map((faq, index) => (
                      <button key={faq.question} onClick={() => setSelectedFaq(index)} className="flex w-full items-center gap-3.5 border-b border-slate-100 px-4 py-4 text-left transition-colors last:border-b-0 hover:bg-slate-50">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7B2CBF]/7 text-[#7B2CBF]">{faq.icon}</span>
                        <span className="min-w-0 flex-1 text-[13px] font-medium leading-5 text-slate-800">{faq.question}</span>
                        <ChevronRight size={17} className="shrink-0 text-slate-300" />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col px-5 py-7 md:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Pregunta frecuente</p>
                <h3 className="mt-3 text-[22px] font-semibold leading-8 tracking-[-0.03em] text-slate-950">{faqs[selectedFaq].question}</h3>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                  <p className="text-[13px] leading-6 text-slate-600">{faqs[selectedFaq].answer}</p>
                </div>
                <button onClick={() => setSelectedFaq(null)} className="mt-5 self-start text-[12px] font-semibold text-[#6f2aa8] hover:text-[#542080]">Ver otras preguntas</button>
              </div>
            )}
          </div>

          <div className="shrink-0 border-t border-slate-200 bg-white p-4 md:p-5">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.16)] transition-colors hover:bg-[#20bd5a]">
              <WhatsApp sx={{ fontSize: 19 }} /> Hablar por WhatsApp
            </a>
            <p className="mt-3 text-center text-[10px] text-slate-400">La conversación continuará de forma segura en WhatsApp.</p>
          </div>
        </div>
      )}

      <div className="pointer-events-auto flex items-center justify-end gap-3">
        {!isOpen && (
          <div className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-medium text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.10)] md:block">
            ¿En qué podemos ayudarle?
          </div>
        )}
        <button onClick={() => isOpen ? close() : setIsOpen(true)} aria-label={isOpen ? 'Cerrar asistencia' : 'Abrir asistencia'} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_14px_34px_rgba(37,211,102,0.28)] transition-all hover:bg-[#20bd5a] active:scale-95 md:h-15 md:w-15">
          {isOpen ? <Close sx={{ fontSize: 25 }} /> : <WhatsApp sx={{ fontSize: 27 }} />}
        </button>
      </div>
    </div>
  );
}
