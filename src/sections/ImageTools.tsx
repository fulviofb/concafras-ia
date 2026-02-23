import { useEffect, useRef, useState } from 'react';
import { Wand2, Sparkles, Image, Layers, Zap, Palette, Box, Flame, Eye, Maximize } from 'lucide-react';

const tools = [
  {
    name: 'Freepik',
    description: 'Plataforma criativa que reúne diversos modelos de IA para geração de imagens, vetores e mockups em um único ambiente. Ideal para criar materiais visuais para campanhas e divulgação espírita com variedade e agilidade.',
    icon: Image,
  },
  {
    name: 'Midjourney',
    description: 'Ferramenta de geração de imagens com alto nível de controle estético e riqueza visual. Destaque para interpretação criativa de prompts e uso avançado de referências para estilo e composição. Ideal para concepts visuais e narrativas artísticas.',
    icon: Sparkles,
  },
  {
    name: 'Seedream',
    description: 'Modelo focado em direção visual e controle criativo. Destaca-se pela capacidade de construir imagens de forma mais previsível, respeitando composição e intenção visual. Ideal para materiais que precisam de menos aleatoriedade.',
    icon: Eye,
  },
  {
    name: 'Nano Banana',
    description: 'Modelo focado em consistência visual. Mantém personagens, estilos e estruturas coerentes ao longo de múltiplas gerações. Ideal para séries visuais, campanhas contínuas e universos gráficos consistentes.',
    icon: Layers,
  },
  {
    name: 'Image FX',
    description: 'Ferramenta de geração de imagens da Google. Interface simples e intuitiva, permite criar imagens a partir de prompts em linguagem natural. Ótima opção acessível para quem está começando a explorar IA generativa.',
    icon: Zap,
  },
  {
    name: 'Recraft',
    description: 'Com recursos como geração de vetores, remoção de fundo, aumento de resolução e aplicação em mockup. Ideal para designers que buscam manter a consistência da marca e agilizar o processo criativo.',
    icon: Palette,
  },
  {
    name: 'Flux',
    description: 'Modelo de geração de imagens projetado para transformar descrições textuais em imagens de alta qualidade. Com arquitetura de 12 bilhões de parâmetros e código aberto, ideal para quem busca explorar e personalizar modelos de IA.',
    icon: Box,
  },
  {
    name: 'Adobe Firefly',
    description: 'Plataforma de IA generativa integrada ao ecossistema Adobe, focada em criação profissional e uso comercial seguro. Oferece controle, previsibilidade e consistência para fluxos de trabalho criativos.',
    icon: Flame,
  },
  {
    name: 'Ideogram',
    description: 'Especializada em gerar imagens com texto legível e tipografia precisa. Destaque na criação de logos, posters e qualquer material que combine elementos visuais com palavras de forma clara e estilizada.',
    icon: Wand2,
  },
  {
    name: 'Magnific',
    description: 'Ferramenta de upscaling e aprimoramento de imagens com IA. Aumenta a resolução sem perda de qualidade, adicionando detalhes e nitidez. Ideal para preparar imagens para impressão e grandes formatos.',
    icon: Maximize,
  },
];

export default function ImageTools() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Ferramentas
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-4">
            Principais{' '}
            <span className="italic text-concafras-accent/80">Modelos e</span>
          </h2>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90">
            Ferramentas
          </h2>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/40 bg-concafras-navy/50">
            <Image className="w-4 h-4 text-concafras-accent" />
            <span className="font-mono text-xs tracking-wider text-concafras-accent/80 uppercase">
              Criação de imagem
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group relative bg-concafras-navy/40 border border-concafras-blue/20 rounded-xl p-7 
                hover:border-concafras-gold/30 hover:bg-concafras-navy/60 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-lg bg-concafras-blue/20 flex items-center justify-center group-hover:bg-concafras-gold/15 transition-colors duration-300">
                    <tool.icon className="w-5 h-5 text-concafras-accent/70 group-hover:text-concafras-gold transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-medium text-white/90 mb-2 group-hover:text-concafras-warm transition-colors">
                    {tool.name}
                  </h4>
                  <p className="font-body text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
