import { useEffect, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const prompts = [
  {
    text: 'A cinematic scene of a young Brazilian performing contemporary ballet in a dark studio, lit only by yellow slivers of light that cut through the space. He gives himself completely to the music, moving with intensity, freedom and emotion, in a choreography that mixes strength and delicacy. white clothes. Warm tones.',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=600&fit=crop',
  },
  {
    text: 'This is a photograph that presents a dynamic and action-packed scene. The subject is a woman, wearing a baby pink maximalist outfit. She is serious with a sensual gaze, as if she is being transported. She is positioned in the foreground, conveying a sense of movement towards the viewer. The background is all vivid green and high contrast.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
  },
  {
    text: 'Cinematic portrait of a woman, side profile, introspective expression, elegant curly hairstyle, soft dramatic lighting, shallow depth of field, warm tones, sophisticated interior background with ornate architectural details and vintage chandeliers, realistic photography, high detail, filmic look.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop',
  },
  {
    text: 'ARRI Alexa, 35mm Wide, Soft overhead lighting, Female, Eastern European, Dutch/Tilted Angle, Medium Shot composition, Cinematic Digital, Cinematic Grade, Cinematic Resolution, Cinematic Character makeup, Styled Professional hair, Dramatic expression, Architectural Interior.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
  },
  {
    text: 'A majestic shark swims freely in the depths of the ocean, as it is filmed amidst turbulent, stormy seas. The violent waves crash all around, creating a dramatic and wild scene, with sunlight filtering through the water, illuminating the predator with an ethereal glow. Shot in the style of Hasselblad X2D.',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&h=600&fit=crop',
  },
  {
    text: 'Cinematic, moody shot of a basketball player in a white jersey sitting alone in the locker room after a high-stakes championship final. His body is slightly slouched forward, elbows resting on his knees, as he stares at the floor in deep thought. Sweat glistens on his skin, showing exhaustion and reflection.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
  },
];

export default function ImagePrompts() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Exemplos práticos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6">
            Prompts
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/40 bg-concafras-navy/50">
            <span className="font-mono text-xs tracking-wider text-concafras-accent/80 uppercase">
              Imagem
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className={`group relative bg-concafras-navy/40 border border-concafras-blue/15 rounded-xl overflow-hidden
                hover:border-concafras-gold/25 transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={prompt.image}
                  alt={`Prompt example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-gray-400 line-clamp-4 leading-relaxed mb-4">
                  {prompt.text}
                </p>
                <button
                  onClick={() => handleCopy(prompt.text, index)}
                  className="flex items-center gap-2 font-body text-xs text-gray-500 hover:text-concafras-gold transition-colors"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
