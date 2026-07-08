import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, ExternalLink, GitBranch, Map, MessageSquare } from 'lucide-react';

const repoBase = 'https://github.com/fulviofb/lab-midia-ia/blob/master';

const news = [
  {
    type: 'Trilhas',
    icon: Map,
    title: 'Comece pelo seu objetivo',
    description: 'Escolha uma trilha prática: primeiro vídeo, cortes de aula, vídeo explicativo, narração ética ou vídeo programático.',
    date: 'Guia público',
    link: `${repoBase}/docs/trilhas`,
  },
  {
    type: 'Prompt',
    icon: MessageSquare,
    title: 'Use uma LLM como orientadora',
    description: 'Copie o prompt mestre, informe seu nível técnico e receba um passo a passo adequado ao seu caso.',
    date: 'Sem CLI',
    link: `${repoBase}/prompts/prompt-mestre-consultor-midia-ia.md`,
  },
  {
    type: 'Laboratório',
    icon: GitBranch,
    title: 'Lab Mídia IA',
    description: 'Repositório público com catálogo de ferramentas, testes reais, workflows, prompts e cuidados éticos.',
    date: 'Atualizado por Fúlvio',
    link: 'https://github.com/fulviofb/lab-midia-ia',
  },
];

export default function WhatsNew() {
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
    <section id="whats-new" ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Novidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6">
            Continue pelo{' '}
            <span className="italic text-concafras-accent/80">caminho certo</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-2xl leading-relaxed">
            Este site é a porta de entrada. O laboratório público reúne as trilhas,
            prompts, testes e ferramentas para você avançar no seu ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-concafras-navy/40 border border-concafras-blue/20 rounded-xl p-8
                hover:border-concafras-gold/30 hover:bg-concafras-navy/60 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-concafras-blue/20 flex items-center justify-center group-hover:bg-concafras-gold/15 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-concafras-accent/70 group-hover:text-concafras-gold transition-colors" />
                </div>
                <span className="font-mono text-xs tracking-wider text-concafras-gold/50 uppercase">
                  {item.type}
                </span>
              </div>

              <h3 className="font-display text-xl font-medium text-white/90 mb-3 group-hover:text-concafras-warm transition-colors">
                {item.title}
              </h3>

              <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-concafras-blue/20">
                <span className="font-mono text-xs text-concafras-gold/40">{item.date}</span>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-concafras-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-concafras-blue/20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-gold/20 bg-concafras-navy/40 mb-8">
              <BookOpen className="w-4 h-4 text-concafras-gold" />
              <span className="font-mono text-xs tracking-wider text-concafras-gold/70 uppercase">
                Material vivo
              </span>
            </div>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-6">
              A inteligência artificial é uma ferramenta poderosa para amplificar a mensagem
              espírita — quando usada com intenção, responsabilidade, consentimento e qualidade.
            </p>
            <p className="font-body text-gray-500 leading-relaxed mb-8">
              O conteúdo do laboratório evolui com testes reais: ferramentas são catalogadas,
              experimentadas, documentadas e recomendadas apenas quando fazem sentido para o público.
            </p>
            <a
              href="https://github.com/fulviofb/lab-midia-ia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-concafras-blue/30 bg-concafras-navy/50 text-concafras-accent hover:text-concafras-gold hover:border-concafras-gold/30 transition-all duration-300 font-display"
            >
              Abrir laboratório público
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="font-display text-concafras-gold/60 mt-8 italic">
              "A caridade também se faz pela comunicação." — Fúlvio, Concafras 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
