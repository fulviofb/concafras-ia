import { useEffect, useRef, useState } from 'react';
import { Sparkles, MessageSquare, Image, Wand2 } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Converse naturalmente',
    description: 'Descreva sua ideia em português, como se estivesse conversando com um diretor de criação.',
  },
  {
    icon: Image,
    title: 'Receba referências visuais',
    description: 'O assistente sugere estilos visuais, composições e referências adequadas ao seu projeto de comunicação espírita.',
  },
  {
    icon: Wand2,
    title: 'Gere prompts otimizados',
    description: 'Transforme suas ideias em prompts técnicos e detalhados para as principais ferramentas de IA.',
  },
  {
    icon: Sparkles,
    title: 'Itere e refine',
    description: 'Continue a conversa para ajustar, explorar variações e chegar ao resultado desejado para sua divulgação.',
  },
];

export default function AIDirector() {
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
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-concafras-navy/30 via-transparent to-concafras-navy/30" />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Assistente Criativo
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-4">
            AI{' '}
            <span className="italic text-concafras-accent/80">Director</span>
          </h2>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/90">
            Assistant
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="font-body text-xl text-gray-300 leading-relaxed">
              Um assistente criativo que ajuda você a transformar ideias em prompts
              poderosos para geração de imagens e vídeos com IA — perfeito para
              a comunicação espírita.
            </p>

            <p className="font-body text-gray-500 leading-relaxed">
              Descreva sua visão em linguagem natural e receba sugestões de estilos,
              composições e prompts técnicos otimizados para as principais ferramentas
              do mercado.
            </p>

            <div className="pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-concafras-gold to-concafras-gold/80 text-concafras-dark rounded-full font-display font-medium hover:from-concafras-warm hover:to-concafras-gold transition-all duration-300 shadow-lg shadow-concafras-gold/10">
                <span className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Experimentar agora
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Features */}
          <div className={`space-y-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-concafras-navy/40 border border-concafras-blue/20 hover:border-concafras-gold/25 transition-all duration-300"
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-concafras-blue/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-concafras-accent/70" />
                </div>
                <div>
                  <h3 className="font-display text-white/90 font-medium mb-1">{feature.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
