import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Lightbulb, Pencil, Wand2, Image, Video } from 'lucide-react';
import { cn } from '../utils/cn';

const steps = [
  {
    number: '01',
    title: 'Ideação',
    description: 'Defina o conceito, o estilo visual e a mensagem espírita que quer comunicar.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Prompt',
    description: 'Escreva descrições detalhadas usando termos do glossário visual para guiar a IA.',
    icon: Pencil,
  },
  {
    number: '03',
    title: 'Geração',
    description: 'Use as ferramentas de IA para criar imagens ou vídeos baseados nos seus prompts.',
    icon: Wand2,
  },
  {
    number: '04',
    title: 'Refinamento',
    description: 'Ajuste, edite e aprimore os resultados até atingir o visual desejado.',
    icon: Image,
  },
  {
    number: '05',
    title: 'Finalização',
    description: 'Exporte em alta qualidade e integre ao seu projeto de comunicação espírita.',
    icon: Video,
  },
];

export default function CreativeFlow() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="creative-flow" ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Metodologia
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/90 leading-tight">
            Fluxo {' '}
            <span className="italic text-concafras-accent/80">Criativo</span>
            <br className="hidden md:block" /> com IA
          </h2>
        </motion.div>

        <div className="relative">
          {/* Fundo da Linha Vertical */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-concafras-blue/10" />

          {/* Linha de Progresso Animada */}
          <motion.div
            className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] -ml-[0.5px] bg-gradient-to-b from-concafras-gold via-concafras-accent to-concafras-blue shadow-[0_0_15px_rgba(212,168,83,0.5)] z-0 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="relative flex items-start gap-8 md:gap-16"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-concafras-dark border border-concafras-blue/30 flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-concafras-blue/5 group-hover:bg-concafras-gold/10 transition-colors duration-500" />
                  <span className="font-display text-xl md:text-2xl font-light text-concafras-gold/80 transition-transform duration-500 group-hover:scale-110">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 md:pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-concafras-navy/50 border border-concafras-blue/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 md:w-6 md:h-6 text-concafras-accent/80" />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white/95">
                      {step.title}
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-body text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-2xl pl-1"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
