import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { cn } from '../utils/cn';

const prompts = [
  {
    text: 'A cinematic scene of a young Brazilian performing contemporary ballet in a dark studio, lit only by yellow slivers of light that cut through the space. He gives himself completely to the music, moving with intensity, freedom and emotion, in a choreography that mixes strength and delicacy. white clothes. Warm tones.',
    image: '/images/prompts/img_prompt_ballet.png',
  },
  {
    text: 'This is a photograph that presents a dynamic and action-packed scene. The subject is a woman, wearing a baby pink maximalist outfit. She is serious with a sensual gaze, as if she is being transported. She is positioned in the foreground, conveying a sense of movement towards the viewer. The background is all vivid green and high contrast.',
    image: '/images/prompts/img_prompt_maximalist.png',
  },
  {
    text: 'Cinematic portrait of a woman, side profile, introspective expression, elegant curly hairstyle, soft dramatic lighting, shallow depth of field, warm tones, sophisticated interior background with ornate architectural details and vintage chandeliers, realistic photography, high detail, filmic look.',
    image: '/images/prompts/img_prompt_portrait.png',
  },
  {
    text: 'ARRI Alexa, 35mm Wide, Soft overhead lighting, Female, Eastern European, Dutch/Tilted Angle, Medium Shot composition, Cinematic Digital, Cinematic Grade, Cinematic Resolution, Cinematic Character makeup, Styled Professional hair, Dramatic expression, Architectural Interior.',
    image: '/images/prompts/img_prompt_arri.png',
  },
  {
    text: 'A majestic shark swims freely in the depths of the ocean, as it is filmed amidst turbulent, stormy seas. The violent waves crash all around, creating a dramatic and wild scene, with sunlight filtering through the water, illuminating the predator with an ethereal glow. Shot in the style of Hasselblad X2D.',
    image: '/images/prompts/img_prompt_shark.png',
  },
  {
    text: 'Cinematic, moody shot of a basketball player in a white jersey sitting alone in the locker room after a high-stakes championship final. His body is slightly slouched forward, elbows resting on his knees, as he stares at the floor in deep thought. Sweat glistens on his skin, showing exhaustion and reflection.',
    image: '/images/prompts/img_prompt_basketball.png',
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

export default function ImagePrompts() {
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
    <section id="image-prompts" className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
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
            Prompts
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/40 bg-concafras-navy/50">
            <span className="font-mono text-xs tracking-wider text-concafras-accent/80 uppercase">
              Imagem
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
              <div className="aspect-[4/3] overflow-hidden relative">
                <motion.img
                  src={prompt.image}
                  alt={`Prompt example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
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
