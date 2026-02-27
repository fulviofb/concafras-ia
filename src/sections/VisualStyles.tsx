import { motion, Variants } from 'framer-motion';

const styles = [
  { name: 'Comercial Photo', image: '/images/styles/img_style_commercial.png' },
  { name: 'Product Still', image: '/images/styles/img_style_product.png' },
  { name: 'Cinematic', image: '/images/styles/img_style_cinematic.png' },
  { name: '3D Render', image: '/images/styles/img_style_3drender.png' },
  { name: 'Analogic', image: '/images/styles/img_style_analogic.png' },
  { name: 'Futuristic', image: '/images/styles/img_style_futuristic.png' },
  { name: 'Portrait', image: '/images/styles/img_style_portrait.png' },
  { name: 'Illustration', image: '/images/styles/img_style_illustration.png' },
  { name: 'Animation', image: '/images/styles/img_style_animation.png' },
  { name: 'Infrared', image: '/images/styles/img_style_infrared.png' },
];

const getAspectClass = (index: number) => {
  const aspects = [
    'aspect-[3/4]',
    'aspect-[4/5]',
    'aspect-square',
    'aspect-[2/3]',
    'aspect-[4/3]'
  ];
  return aspects[index % aspects.length];
};

export default function VisualStyles() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="visual-styles" className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Referências
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white/90 mb-6 leading-[1.1]">
            Estilos{' '}
            <span className="italic font-normal text-concafras-accent/80 block mt-2">Visuais</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-light mt-6">
            Cada estilo visual comunica uma ideia, desperta emoções e fortalece narrativas.
            Conheça diferentes estilos que irão potencializar as suas criações com IA
            para a comunicação espírita.
          </p>
        </motion.div>

        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
        >
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-concafras-navy cursor-pointer break-inside-avoid block w-full ${getAspectClass(index)}`}
            >
              {/* Parallax / Scale inside element */}
              <div className="absolute inset-[-10%] w-[120%] h-[120%]">
                <motion.img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-concafras-dark/90 via-concafras-dark/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-lg tracking-wide font-medium text-white/95 group-hover:text-concafras-gold transition-colors duration-300">
                  {style.name}
                </h3>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-concafras-gold/30 transition-colors duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
