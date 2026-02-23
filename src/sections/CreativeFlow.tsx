import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Pencil, Wand2, Image, Video } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Ideação',
    description: 'Defina o conceito, o estilo visual e a mensagem espírita que quer comunicar.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Prompt',
    description: 'Escreva descrições detalhadas usando termos do glossário visual para guiar a IA.',
    icon: Pencil,
  },
  {
    number: '03',
    title: 'Geração',
    description: 'Use as ferramentas de IA para criar imagens ou vídeos baseados nos seus prompts.',
    icon: Wand2,
  },
  {
    number: '04',
    title: 'Refinamento',
    description: 'Ajuste, edite e aprimore os resultados até atingir o visual desejado.',
    icon: Image,
  },
  {
    number: '05',
    title: 'Finalização',
    description: 'Exporte em alta qualidade e integre ao seu projeto de comunicação espírita.',
    icon: Video,
  },
];

export default function CreativeFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Metodologia
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90">
            Fluxo{' '}
            <span className="italic text-concafras-accent/80">Criativo</span>
          </h2>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90">
            com IA
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-concafras-blue/50 via-concafras-gold/30 to-concafras-blue/50" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 md:gap-12 transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-concafras-navy border border-concafras-blue/40 flex items-center justify-center">
                  <span className="font-display text-lg md:text-xl font-medium text-concafras-gold/70">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 md:pt-6">
                  <div className="flex items-center gap-4 mb-3">
                    <step.icon className="w-5 h-5 text-concafras-accent/60" />
                    <h3 className="font-display text-2xl md:text-3xl font-light text-white/90">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-gray-500 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
