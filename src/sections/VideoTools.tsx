import { useEffect, useRef, useState } from 'react';
import { Play, Film, Video, Clapperboard, Camera, Box, FileVideo, Users, Sparkles, Monitor } from 'lucide-react';

const tools = [
  {
    name: 'Kling',
    description: 'Focado em realismo de movimento e coerência física, destaca-se pela fluidez das animações e pela capacidade de criar cenas com aparência cinematográfica a partir de texto ou imagem. Ideal para narrativas visuais mais longas e naturais.',
    icon: Play,
  },
  {
    name: 'Runway',
    description: 'Plataforma completa e robusta para produção audiovisual híbrida, mescla filmagens reais e conteúdos gerados por IA com alta precisão. Indispensável para produtores e criativos audiovisuais que buscam inovação.',
    icon: Film,
  },
  {
    name: 'Seedance',
    description: 'Modelo de vídeo voltado para ritmo, composição e continuidade visual. Destaca-se por manter consistência estética entre cenas e por responder bem a direções visuais mais específicas.',
    icon: Video,
  },
  {
    name: 'Sora',
    description: 'Modelo de geração de vídeo com IA focado em narrativa, escala e compreensão espacial. Destaca-se pela capacidade de criar cenas complexas, com múltiplos elementos, continuidade e lógica visual.',
    icon: Clapperboard,
  },
  {
    name: 'Veo',
    description: 'Modelo focado em realismo, narrativa e controle cinematográfico. Destaca-se pela capacidade de interpretar prompts complexos, criando cenas coerentes, com movimento natural e enquadramento preciso.',
    icon: Camera,
  },
  {
    name: 'Luma',
    description: 'Plataforma especializada em geração de vídeo e cenas 3D realistas com IA. Destaca-se pela criação de ambientes imersivos, movimento de câmera natural e profundidade espacial.',
    icon: Box,
  },
  {
    name: 'LTX',
    description: 'Plataforma de criação audiovisual com IA voltada para planejamento, roteiro e geração de cenas. Destaca-se por estruturar o processo criativo antes da geração, oferecendo mais previsibilidade.',
    icon: FileVideo,
  },
  {
    name: 'Hailuo (Minimax)',
    description: 'Vídeos hiper-realistas com expressões naturais e movimentos suaves. Ideal para criação rápida de conteúdos comerciais ou narrativos, com personalização detalhada em cenários e avatares.',
    icon: Users,
  },
  {
    name: 'Heygen',
    description: 'Plataforma de geração de vídeo focada em avatares, apresentações e comunicação direta. Destaca-se pela facilidade de criar vídeos com fala sincronizada e múltiplos idiomas.',
    icon: Sparkles,
  },
  {
    name: 'Topaz Labs',
    description: 'Referência em aprimoramento de imagens e vídeos, destaca-se pela capacidade única de aumentar resolução, remover ruídos e melhorar detalhes com alta fidelidade para qualidade cinematográfica.',
    icon: Monitor,
  },
];

export default function VideoTools() {
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
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/40 bg-concafras-navy/50">
            <Video className="w-4 h-4 text-concafras-gold" />
            <span className="font-mono text-xs tracking-wider text-concafras-gold/80 uppercase">
              Criação de vídeos
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
