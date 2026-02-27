import { motion, Variants } from 'framer-motion';
import { Play, Film, Video, Clapperboard, Camera, Box, FileVideo, Users, Sparkles, Monitor, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

const tools = [
  {
    name: 'Kling',
    description: 'Focado em realismo de movimento e coerência física, destaca-se pela fluidez das animações e pela capacidade de criar cenas com aparência cinematográfica a partir de texto ou imagem. Ideal para narrativas visuais mais longas e naturais.',
    icon: Play,
    url: 'https://klingai.com/',
  },
  {
    name: 'Runway',
    description: 'Plataforma completa e robusta para produção audiovisual híbrida, mescla filmagens reais e conteúdos gerados por IA com alta precisão. Indispensável para produtores e criativos audiovisuais que buscam inovação.',
    icon: Film,
    url: 'https://runwayml.com/',
  },
  {
    name: 'Seedance',
    description: 'Modelo de vídeo voltado para ritmo, composição e continuidade visual. Destaca-se por manter consistência estética entre cenas e por responder bem a direções visuais mais específicas.',
    icon: Video,
    url: 'https://seedance.ai/',
  },
  {
    name: 'Sora',
    description: 'Modelo de geração de vídeo com IA focado em narrativa, escala e compreensão espacial. Destaca-se pela capacidade de criar cenas complexas, com múltiplos elementos, continuidade e lógica visual.',
    icon: Clapperboard,
    url: 'https://openai.com/sora',
  },
  {
    name: 'Veo',
    description: 'Modelo focado em realismo, narrativa e controle cinematográfico. Destaca-se pela capacidade de interpretar prompts complexos, criando cenas coerentes, com movimento natural e enquadramento preciso.',
    icon: Camera,
    url: 'https://deepmind.google/technologies/veo/',
  },
  {
    name: 'Luma',
    description: 'Plataforma especializada em geração de vídeo e cenas 3D realistas com IA. Destaca-se pela criação de ambientes imersivos, movimento de câmera natural e profundidade espacial.',
    icon: Box,
    url: 'https://lumalabs.ai/dream-machine',
  },
  {
    name: 'LTX',
    description: 'Plataforma de criação audiovisual com IA voltada para planejamento, roteiro e geração de cenas. Destaca-se por estruturar o processo criativo antes da geração, oferecendo mais previsibilidade.',
    icon: FileVideo,
    url: 'https://ltx.studio/',
  },
  {
    name: 'Hailuo (Minimax)',
    description: 'Vídeos hiper-realistas com expressões naturais e movimentos suaves. Ideal para criação rápida de conteúdos comerciais ou narrativos, com personalização detalhada em cenários e avatares.',
    icon: Users,
    url: 'https://hailuo.ai/video',
  },
  {
    name: 'Heygen',
    description: 'Plataforma de geração de vídeo focada em avatares, apresentações e comunicação direta. Destaca-se pela facilidade de criar vídeos com fala sincronizada e múltiplos idiomas.',
    icon: Sparkles,
    url: 'https://www.heygen.com/',
  },
  {
    name: 'Topaz Labs',
    description: 'Referência em aprimoramento de imagens e vídeos, destaca-se pela capacidade única de aumentar resolução, remover ruídos e melhorar detalhes com alta fidelidade para qualidade cinematográfica.',
    icon: Monitor,
    url: 'https://www.topazlabs.com/',
  },
];

export default function VideoTools() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="video-tools" className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">

          {/* Header Fixo / Editorial */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-gold/30 bg-concafras-dark/40 backdrop-blur-sm">
                <Video className="w-4 h-4 text-concafras-gold" />
                <span className="font-mono text-xs tracking-wider text-concafras-gold/80 uppercase">
                  Cinematografia IA
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/95 leading-[1.1] tracking-tight mb-8">
                Direção de {' '}
                <span className="italic font-normal text-concafras-gold/80 block mt-2">Vídeo e Movimento</span>
              </h2>

              <p className="font-body text-xl text-gray-400 font-light leading-relaxed max-w-md">
                Ferramentas especializadas para dar vida às suas ideias com fluidez, controle de câmera e realismo impressionante para suas produções.
              </p>
            </motion.div>
          </div>

          {/* Cards Dinâmicos */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {tools.map((tool, index) => {
              // Aplicar o mesmo deslocamento sutil aos itens ímpares para manter consistência
              const isOdd = index % 2 !== 0;
              return (
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={tool.name}
                  variants={cardVariants}
                  className={cn(
                    "block group relative overflow-hidden backdrop-blur-md rounded-2xl border transition-all duration-500",
                    "bg-gradient-to-br from-concafras-navy/30 to-concafras-dark/80",
                    "border-concafras-blue/20 hover:border-concafras-gold/40",
                    "hover:shadow-[0_0_30px_rgba(212,168,83,0.15)] hover:-translate-y-2 cursor-pointer",
                    isOdd ? "sm:mt-12 lg:mt-16" : ""
                  )}
                >
                  {/* Subtle Background Glow (Gold tone for Video) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-concafras-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative p-7 sm:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-concafras-blue/10 border border-concafras-blue/20 flex items-center justify-center group-hover:bg-concafras-gold/15 group-hover:border-concafras-gold/30 group-hover:scale-110 transition-all duration-500 ease-out">
                          <tool.icon className="w-6 h-6 text-concafras-accent/70 group-hover:text-concafras-gold transition-colors duration-300" />
                        </div>
                        <h4 className="font-display text-2xl font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                          {tool.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-concafras-gold transition-all duration-300" />
                    </div>
                    <p className="font-body text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors mt-auto">
                      {tool.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
