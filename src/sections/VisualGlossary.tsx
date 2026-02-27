import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const terms = [
  'dynamic lighting',
  'ultra-realistic',
  'bokeh background',
  'isometric view',
  'cinematic color grading',
  'motion blur',
  'vintage tone',
  'symmetrical composition',
  'cinematic lighting',
  'brutalist style',
  'baroque aesthetic',
  'hyper-detailed',
  'dreamy atmosphere',
  'harsh shadows',
  'rim lighting',
  'backlit silhouette',
  'moody lighting',
  'volumetric light',
  'spotlight focus',
  'extreme close-up',
  'euphoric lighting',
  'nostalgic mood',
  'melancholic tone',
  'cold atmosphere',
  'soft focus',
  "bird's eye view",
  'grainy texture',
  'high dynamic range (HDR)',
];

export default function VisualGlossary() {
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="visual-glossary" className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Vocabulário
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-6">
            Glossário{' '}
            <span className="italic text-concafras-accent/80">Visual</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
            Uma lista de termos que podem ser usados nos prompts para controlar
            visual, estilo, qualidade e emoção das suas criações:
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {terms.map((term) => (
            <motion.span
              key={term}
              variants={itemVariants}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-mono text-sm border transition-colors duration-300 cursor-default shadow-sm
                ${hoveredTerm === term
                  ? 'bg-concafras-gold text-concafras-dark border-concafras-gold font-medium shadow-[0_0_15px_rgba(212,168,83,0.4)]'
                  : 'bg-concafras-navy/30 text-gray-400 border-concafras-blue/30 hover:border-concafras-accent/40 hover:text-concafras-accent/80 hover:bg-concafras-navy/60'
                }`}
              onMouseEnter={() => setHoveredTerm(term)}
              onMouseLeave={() => setHoveredTerm(null)}
            >
              {term}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-24 pt-12 border-t border-concafras-blue/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <p className="font-body text-base md:text-lg text-gray-500/80 italic font-light max-w-4xl">
            <strong className="font-medium text-concafras-gold/80 not-italic mr-2">Dica:</strong>
            Combine diferentes termos para criar descrições mais ricas e específicas
            nos seus prompts. Pense na mensagem espírita que quer transmitir e escolha
            o estilo que melhor a representa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
