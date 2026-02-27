import { motion, Variants } from 'framer-motion';
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="ai-director" className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-concafras-navy/30 via-transparent to-concafras-navy/30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Assistente Criativo
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-4 leading-tight">
            AI{' '}
            <span className="italic text-concafras-accent/80 font-normal">Director</span>
            <br className="hidden md:block" /> Assistant
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Description */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-body text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Um assistente criativo que ajuda você a transformar ideias em prompts
              poderosos para geração de imagens e vídeos com IA — perfeito para
              a comunicação espírita.
            </p>

            <p className="font-body text-base md:text-lg text-gray-500 leading-relaxed font-light">
              Descreva sua visão em linguagem natural e receba sugestões de estilos,
              composições e prompts técnicos otimizados para as principais ferramentas
              do mercado.
            </p>

            <div className="pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-concafras-gold to-concafras-gold/80 text-concafras-dark rounded-full font-display font-medium hover:from-concafras-warm hover:to-concafras-gold transition-all duration-300 shadow-lg shadow-concafras-gold/20 hover:shadow-[0_0_30px_rgba(212,168,83,0.4)] hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Experimentar agora
                </span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </button>
            </div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            className="space-y-4 md:space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-concafras-navy/40 border border-concafras-blue/20 hover:bg-concafras-navy/60 hover:border-concafras-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)] transition-all duration-500 cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-concafras-blue/10 border border-concafras-blue/20 flex items-center justify-center group-hover:bg-concafras-gold/20 group-hover:border-concafras-gold/30 group-hover:scale-110 transition-all duration-500 ease-out">
                  <feature.icon className="w-6 h-6 text-concafras-accent/70 group-hover:text-concafras-gold transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white/90 font-medium mb-2 group-hover:text-concafras-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
