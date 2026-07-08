import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BookOpen, Code2, Mic2, Scissors, Sparkles, Wand2 } from 'lucide-react';

const repoBase = 'https://github.com/fulviofb/lab-midia-ia/blob/master';

const paths = [
  {
    title: 'Meu primeiro vídeo com IA',
    audience: 'Para quem está começando',
    description: 'Um caminho simples para sair da ideia e chegar a um vídeo curto, sem precisar instalar ferramentas técnicas.',
    icon: Sparkles,
    href: `${repoBase}/docs/trilhas/01-primeiro-video-com-ia.md`,
  },
  {
    title: 'Aula ou palestra em cortes',
    audience: 'Para educadores e comunicadores',
    description: 'Transforme uma aula, palestra ou reunião em cortes curtos com transcrição, seleção de trechos, legenda e revisão.',
    icon: Scissors,
    href: `${repoBase}/docs/trilhas/02-transformar-aula-em-cortes.md`,
  },
  {
    title: 'Vídeo explicativo narrado',
    audience: 'Para ensinar uma ideia',
    description: 'Estruture roteiro, cenas, narração e revisão para explicar um tema com clareza e propósito.',
    icon: BookOpen,
    href: `${repoBase}/docs/trilhas/03-video-explicativo-narrado.md`,
  },
  {
    title: 'Narração e voz com IA',
    audience: 'Com cuidado ético',
    description: 'Entenda como usar narração, TTS e clonagem de voz sem abrir mão de consentimento, transparência e responsabilidade.',
    icon: Mic2,
    href: `${repoBase}/docs/trilhas/04-narracao-e-voz-com-ia.md`,
  },
  {
    title: 'Vídeo programático',
    audience: 'Para devs e usuários técnicos',
    description: 'Use HyperFrames, Remotion, video-use e agentes para criar vídeos reproduzíveis, versionáveis e automatizados.',
    icon: Code2,
    href: `${repoBase}/docs/trilhas/05-video-programatico-para-devs.md`,
  },
];

const supportLinks = [
  {
    title: 'Usar este guia com uma LLM',
    description: 'Aprenda a pedir ajuda ao ChatGPT, Claude ou Gemini sem usar terminal ou CLI.',
    href: `${repoBase}/docs/publico/como-usar-com-llm-sem-cli.md`,
  },
  {
    title: 'Prompt mestre do consultor',
    description: 'Copie, preencha sua situação e receba uma trilha recomendada para seu caso.',
    href: `${repoBase}/prompts/prompt-mestre-consultor-midia-ia.md`,
  },
  {
    title: 'Repositório completo',
    description: 'Catálogo vivo de ferramentas, testes, prompts e workflows de mídia com IA.',
    href: 'https://github.com/fulviofb/lab-midia-ia',
  },
];

export default function StartHere() {
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
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-28 px-6 md:px-12 lg:px-24 border-y border-concafras-blue/10">
      <div className="absolute inset-0 bg-gradient-to-b from-concafras-navy/10 via-concafras-blue/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
              Comece por aqui
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 leading-tight mb-6">
              Escolha seu caminho antes de escolher a ferramenta.
            </h2>
            <p className="font-body text-lg text-gray-500 leading-relaxed mb-8">
              Para quem está começando, a pergunta não é “qual IA é melhor?”. A pergunta é:
              o que você quer comunicar, para quem, com qual cuidado e com qual nível técnico?
            </p>
            <div className="rounded-2xl border border-concafras-gold/20 bg-concafras-navy/40 p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-concafras-gold/10 flex items-center justify-center flex-shrink-0">
                  <Wand2 className="w-5 h-5 text-concafras-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white/90 mb-2">Use uma LLM como guia</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                    Se você não sabe por onde começar, copie o prompt mestre, diga seu objetivo e peça um passo a passo simples.
                  </p>
                  <a
                    href={`${repoBase}/prompts/prompt-mestre-consultor-midia-ia.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-concafras-gold hover:text-concafras-warm transition-colors"
                  >
                    Abrir prompt mestre
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {paths.map((path, index) => (
              <a
                key={path.title}
                href={path.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-2xl border border-concafras-blue/20 bg-concafras-navy/35 p-5 hover:border-concafras-gold/35 hover:bg-concafras-navy/60 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 80 + 120}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-concafras-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-concafras-gold/15 transition-colors">
                    <path.icon className="w-5 h-5 text-concafras-accent group-hover:text-concafras-gold transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl text-white/90 group-hover:text-concafras-warm transition-colors">
                        {path.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-concafras-gold/45">
                        {path.audience}
                      </span>
                    </div>
                    <p className="font-body text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                      {path.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-concafras-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-xl border border-concafras-blue/20 bg-concafras-dark/40 p-5 hover:border-concafras-accent/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 80 + 520}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-lg text-white/85 group-hover:text-concafras-warm transition-colors">
                  {link.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-concafras-gold transition-colors flex-shrink-0" />
              </div>
              <p className="font-body text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
