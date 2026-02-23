import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, BookOpen, Video } from 'lucide-react';

const news = [
  {
    type: 'Curso',
    icon: Video,
    title: 'Aulas Práticas de IA',
    description: 'Aprenda a usar inteligência artificial para criar conteúdos visuais impactantes para a divulgação espírita.',
    date: 'Concafras 2026',
    link: '#',
  },
  {
    type: 'E-book',
    icon: BookOpen,
    title: 'IA na Comunicação Espírita',
    description: 'A versão completa deste guia de IA para comunicadores espíritas, com ferramentas e prompts práticos.',
    date: 'Atualizado por Fúlvio',
    link: '#',
  },
  {
    type: 'Evento',
    icon: Calendar,
    title: 'Workshop Concafras',
    description: 'Participe dos workshops e aprenda diretamente na prática como usar IA na comunicação espírita.',
    date: 'Fevereiro 2026',
    link: '#',
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
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Novidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6">
            What's{' '}
            <span className="italic text-concafras-accent/80">New?</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-2xl leading-relaxed">
            Se você quer ir mais longe na comunicação espírita com IA,
            estas oportunidades já estão te esperando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
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
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-6">
              A inteligência artificial é uma ferramenta poderosa para amplificar a mensagem
              espírita — e este material foi criado para te mostrar como usar essas ferramentas
              com intenção, propósito e qualidade visual.
            </p>
            <p className="font-body text-gray-500 leading-relaxed">
              Sem teoria solta. Sem enrolação. É criação real, com as ferramentas que estão
              mudando o mercado agora. Use este guia como ponto de partida e bora criar
              com propósito espírita.
            </p>
            <p className="font-display text-concafras-gold/60 mt-6 italic">
              "A caridade também se faz pela comunicação." — Fúlvio, Concafras 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
