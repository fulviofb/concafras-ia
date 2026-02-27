import { motion, Variants } from 'framer-motion';
import { Wand2, Sparkles, Image, Layers, Zap, Palette, Box, Flame, Eye, Maximize, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

const tools = [
  {
    name: 'Freepik',
    description: 'Plataforma criativa que reúne diversos modelos de IA para geração de imagens, vetores e mockups em um único ambiente. Ideal para criar materiais visuais para campanhas e divulgação espírita com variedade e agilidade.',
    icon: Image,
    url: 'https://www.freepik.com/ai',
  },
  {
    name: 'Midjourney',
    description: 'Ferramenta de geração de imagens com alto nível de controle estético e riqueza visual. Destaque para interpretação criativa de prompts e uso avançado de referências para estilo e composição. Ideal para concepts visuais e narrativas artísticas.',
    icon: Sparkles,
    url: 'https://www.midjourney.com/',
  },
  {
    name: 'Seedream',
    description: 'Modelo focado em direção visual e controle criativo. Destaca-se pela capacidade de construir imagens de forma mais previsível, respeitando composição e intenção visual. Ideal para materiais que precisam de menos aleatoriedade.',
    icon: Eye,
    url: 'https://seedream.ai/',
  },
  {
    name: 'Nano Banana',
    description: 'Modelo focado em consistência visual. Mantém personagens, estilos e estruturas coerentes ao longo de múltiplas gerações. Ideal para séries visuais, campanhas contínuas e universos gráficos consistentes.',
    icon: Layers,
    url: 'https://nanobanana.com/',
  },
  {
    name: 'Image FX',
    description: 'Ferramenta de geração de imagens da Google. Interface simples e intuitiva, permite criar imagens a partir de prompts em linguagem natural. Ótima opção acessível para quem está começando a explorar IA generativa.',
    icon: Zap,
    url: 'https://aitestkitchen.withgoogle.com/tools/image-fx',
  },
  {
    name: 'Recraft',
    description: 'Com recursos como geração de vetores, remoção de fundo, aumento de resolução e aplicação em mockup. Ideal para designers que buscam manter a consistência da marca e agilizar o processo criativo.',
    icon: Palette,
    url: 'https://www.recraft.ai/',
  },
  {
    name: 'Flux',
    description: 'Modelo de geração de imagens projetado para transformar descrições textuais em imagens de alta qualidade. Com arquitetura de 12 bilhões de parâmetros e código aberto, ideal para quem busca explorar e personalizar modelos de IA.',
    icon: Box,
    url: 'https://blackforestlabs.ai/',
  },
  {
    name: 'Adobe Firefly',
    description: 'Plataforma de IA generativa integrada ao ecossistema Adobe, focada em criação profissional e uso comercial seguro. Oferece controle, previsibilidade e consistência para fluxos de trabalho criativos.',
    icon: Flame,
    url: 'https://firefly.adobe.com/',
  },
  {
    name: 'Ideogram',
    description: 'Especializada em gerar imagens com texto legível e tipografia precisa. Destaque na criação de logos, posters e qualquer material que combine elementos visuais com palavras de forma clara e estilizada.',
    icon: Wand2,
    url: 'https://ideogram.ai/',
  },
  {
    name: 'Magnific',
    description: 'Ferramenta de upscaling e aprimoramento de imagens com IA. Aumenta a resolução sem perda de qualidade, adicionando detalhes e nitidez. Ideal para preparar imagens para impressão e grandes formatos.',
    icon: Maximize,
    url: 'https://magnific.ai/',
  },
];

export default function ImageTools() {
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
    <section id="image-tools" className="relative w-full py-24 px-6 md:px-12 lg:px-24">
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
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/30 bg-concafras-dark/40 backdrop-blur-sm">
                <Image className="w-4 h-4 text-concafras-accent" />
                <span className="font-mono text-xs tracking-wider text-concafras-accent/80 uppercase">
                  Domínio Visual
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/95 leading-[1.1] tracking-tight mb-8">
                Modelos Essenciais {' '}
                <span className="italic font-normal text-concafras-accent/80 block mt-2">de Imagem</span>
              </h2>

              <p className="font-body text-xl text-gray-400 font-light leading-relaxed max-w-md">
                Uma curadoria criteriosa com as IAs de geração mais potentes e versáteis disponíveis para aprimorar sua comunicação visual e fluxo criativo.
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
              // Aplicar um deslocamento sutil aos itens ímpares (assimetria estilo editorial)
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
                    "bg-gradient-to-br from-concafras-navy/50 to-concafras-dark/80",
                    "border-concafras-blue/20 hover:border-concafras-accent/50",
                    "hover:shadow-[0_0_30px_rgba(26,58,110,0.3)] hover:-translate-y-2 cursor-pointer",
                    isOdd ? "sm:mt-12 lg:mt-16" : ""
                  )}
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-concafras-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative p-7 sm:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-concafras-blue/10 border border-concafras-blue/20 flex items-center justify-center group-hover:bg-concafras-accent/20 group-hover:border-concafras-accent/40 group-hover:scale-110 transition-all duration-500 ease-out">
                          <tool.icon className="w-6 h-6 text-concafras-accent/70 group-hover:text-concafras-accent transition-colors duration-300" />
                        </div>
                        <h4 className="font-display text-2xl font-medium text-white/90 group-hover:text-concafras-warm transition-colors duration-300">
                          {tool.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-concafras-accent transition-all duration-300" />
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
