import { motion, Variants } from 'framer-motion';

export default function Intro() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="intro" className="relative min-h-screen w-full py-32 px-6 md:px-12 lg:px-24 flex items-center">
      {/* Subtle side accent */}
      <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-concafras-gold/20 to-transparent" />

      <motion.div
        className="max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-concafras-gold/60 mb-20 uppercase"
        >
          Sobre este material
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <motion.div
            className="lg:col-span-7 lg:pr-12"
            variants={itemVariants}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white/95 leading-tight font-light tracking-tight">
              A inteligência artificial abriu novas portas para a
              <span className="italic text-concafras-accent/90 block mt-2">comunicação visual,</span>
            </h2>
            <p className="font-body text-xl md:text-2xl text-gray-400 leading-relaxed mt-10 font-light max-w-2xl">
              seja na produção de imagens impactantes ou na construção de vídeos
              que amplificam a{' '}
              <span className="text-gradient-gold font-medium">mensagem espírita</span>.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 space-y-12 lg:mt-32"
            variants={itemVariants}
          >
            <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Este e-book é um guia rápido e prático para quem quer mergulhar
              nesse universo e explorar de forma criativa as ferramentas disponíveis hoje
              — aplicadas à divulgação e comunicação da Doutrina Espírita.
            </p>

            <div className="border-t border-concafras-blue/20 pt-10">
              <p className="font-mono text-xs tracking-widest text-concafras-gold/50 uppercase mb-6">
                Preparado por
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-concafras-blue to-concafras-gold/40 flex items-center justify-center shadow-lg shadow-concafras-blue/10 border border-white/5">
                  <span className="font-display text-2xl text-white font-medium">F</span>
                </div>
                <div>
                  <p className="text-white text-xl font-display font-medium tracking-wide">Fúlvio</p>
                  <p className="text-concafras-accent/50 text-sm tracking-wide mt-1">Concafras 2026</p>
                </div>
              </div>
              <p className="font-body text-gray-400 mt-8 leading-relaxed font-light text-base">
                Com foco em quem quer testar, experimentar e evoluir com IA
                na comunicação espírita — sem enrolação, só o que realmente funciona na prática.
              </p>
            </div>

            <div className="border-t border-concafras-blue/20 pt-8 mt-12">
              <p className="font-display text-lg text-concafras-gold/70 italic leading-relaxed">
                "Fora da caridade não há salvação. Fora da comunicação, não há divulgação."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
