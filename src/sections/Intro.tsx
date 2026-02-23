import { useEffect, useRef, useState } from 'react';

export default function Intro() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      {/* Subtle side accent */}
      <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-concafras-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <p className={`font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-16 uppercase transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Sobre este material
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light">
              A inteligência artificial abriu novas portas para a{' '}
              <span className="italic text-concafras-accent">comunicação visual</span>,
              seja na produção de imagens impactantes ou na construção de vídeos
              que amplificam a{' '}
              <span className="text-gradient-gold">mensagem espírita</span>.
            </p>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-body text-lg text-gray-400 leading-relaxed">
              Este e-book é um guia rápido e prático para quem quer mergulhar
              nesse universo e explorar de forma criativa as ferramentas disponíveis hoje
              — aplicadas à divulgação e comunicação da Doutrina Espírita.
            </p>

            <div className="border-t border-concafras-blue/30 pt-8">
              <p className="font-body text-sm text-gray-500 mb-4">
                Este material foi preparado por
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-concafras-blue to-concafras-gold/60 flex items-center justify-center">
                  <span className="font-display text-lg text-white font-semibold">F</span>
                </div>
                <div>
                  <p className="text-white text-lg font-display font-medium">Fúlvio</p>
                  <p className="text-concafras-accent/60 text-sm">para a Concafras 2026</p>
                </div>
              </div>
              <p className="font-body text-gray-400 mt-6 leading-relaxed">
                Com foco em quem quer testar, experimentar e evoluir com IA
                na comunicação espírita — sem enrolação, só o que realmente funciona na prática.
              </p>
            </div>

            <div className="border-t border-concafras-blue/30 pt-8">
              <p className="font-body text-sm text-concafras-gold/50 italic">
                — "Fora da caridade não há salvação. Fora da comunicação, não há divulgação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
