import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Copy, Check, Play } from 'lucide-react';
import { cn } from '../utils/cn';

const prompts = [
  {
    text: 'A close up shot of a Brazilian man dancing capoeira in a sunlit dusty courtyard. The camera focuses on the intricate movements of his feet and sweat drops flying from his brow. 4k resolution, cinematic lighting, slow motion 120fps.',
    image: '/images/prompts/vid_prompt_capoeira.png',
  },
  {
    text: 'Drone tracking shot following a white dove flying through a majestic gothic cathedral, sun rays piercing through stained glass windows creating volumetric light rays. Ethereal atmosphere, highly detailed architecture.',
    image: '/images/prompts/vid_prompt_dove.png',
  },
  {
    text: 'Time-lapse of a blooming lotus flower in surrounded by gentle morning mist. Soft pastel colors, macro photography, 8k resolution, nature documentary style.',
    image: '/images/prompts/vid_prompt_lotus.png',
  },
  {
    text: 'Medium shot of an elderly woman with kind eyes holding a glowing ethereal orb in her hands. The light illuminates her face with a warm, comforting glow. Cinematic portrait, anamorphic lens flare.',
    image: '/images/prompts/vid_prompt_orb.png',
  },
  {
    text: 'Wide establishing shot of a futuristic but peaceful city integrated with lush green nature, flying vehicles leaving soft light trails in the twilight sky. Cyber-renaissance aesthetic, unreal engine 5 render style.',
    image: '/images/prompts/vid_prompt_city.png',
  },
  {
    text: 'Slow continuous pan across a diverse group of people holding hands in a circle around a campfire under a starry night sky. Warm firelight flickering on their faces, sense of unity and peace. Shot on ARRI Alexa 65.',
    image: '/images/prompts/vid_prompt_campfire.png',
  },
];

const getEditorialOffset = (index: number) => {
  const isMdEven = index % 2 === 0;
  const colLg = index % 3;

  let baseClass = isMdEven ? "md:mt-0" : "md:mt-12";

  if (colLg === 0) baseClass += " lg:mt-0";
  else if (colLg === 1) baseClass += " lg:mt-16";
  else if (colLg === 2) baseClass += " lg:mt-32";

  return baseClass;
};

export default function VideoPrompts() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="video-prompts" className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Exemplos práticos
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-6">
            Vídeos
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/40 bg-concafras-navy/50">
            <span className="font-mono text-xs tracking-wider text-concafras-accent/80 uppercase">
              Video
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {prompts.map((prompt, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative bg-concafras-dark border border-concafras-navy overflow-hidden rounded-2xl",
                "hover:border-concafras-gold/30 hover:shadow-[0_10px_40px_rgba(212,168,83,0.1)] transition-all duration-700",
                getEditorialOffset(index)
              )}
            >
              <div className="aspect-video overflow-hidden relative">
                <motion.img
                  src={prompt.image}
                  alt={`Prompt example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-concafras-dark/40 group-hover:bg-concafras-dark/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-concafras-gold/90 flex items-center justify-center transform scale-90 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,168,83,0.4)]">
                    <Play className="w-5 h-5 text-concafras-dark fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-concafras-dark/90 to-transparent opacity-80" />
              </div>
              <div className="relative p-6 md:p-8 bg-concafras-dark/95 backdrop-blur-sm -mt-16">
                <p className="font-mono text-xs md:text-sm text-gray-400 line-clamp-4 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {prompt.text}
                </p>
                <button
                  onClick={() => handleCopy(prompt.text, index)}
                  className="flex items-center gap-2 font-body text-xs md:text-sm text-gray-500 hover:text-concafras-gold transition-colors font-medium"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar prompt
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
