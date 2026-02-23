import { useEffect, useRef, useState } from 'react';
import { Copy, Check, Play } from 'lucide-react';

const prompts = [
  {
    text: 'Animate the jazz drummer performing an intense, rapid drum solo. Add fast, precise hand and arm movements, simulating real drum hits. Include quick, cinematic camera movements: slight handheld shake, sudden push-ins, and whip pans, matching the energy of the solo.',
    thumbnail: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=450&fit=crop',
  },
  {
    text: 'Two women, side by side, emerge slowly from darkness. The camera begins in a close-up on the face of the lighter-skinned woman, then gently pans across to reveal the darker-skinned woman. Light dances across their faces, revealing texture, strength, and contrast. The motion is slow, elegant.',
    thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=450&fit=crop',
  },
  {
    text: 'The scene takes place inside a small, weathered wooden rowboat caught in the middle of a violent storm at sea. The ocean swells violently, crashing waves slam against the sides of the boat, sending water spraying into the frame. A rugged, bearded man wrapped in a wet cloak stands, shouting furiously.',
    thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=450&fit=crop',
  },
  {
    text: 'The red Lamborghini is speeding down the highway, rapidly overtaking other cars. Start with a dynamic top-down shot, then smoothly transition into a side tracking shot. Keep the car always centered. Add intense motion blur, fast road reflections, wind effects.',
    thumbnail: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=450&fit=crop',
  },
  {
    text: 'Begin with the woman standing centered in a golden wheat field under soft natural sunlight. Apply a dreamy aesthetic with halation on the highlights and warm lens glow. The camera slowly orbits around her in a smooth 360° rotation, keeping her in the center.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
  },
  {
    text: 'Tracking shot races alongside her as she glides low over the vibrant road — pink fabric whipping in the wind, her eyes locked forward. The background blurs violently, but her face stays razor sharp. Time bends around her.',
    thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=450&fit=crop',
  },
];

export default function VideoPrompts() {
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6">
            Prompts
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-blue/40 bg-concafras-navy/50">
            <Play className="w-4 h-4 text-concafras-gold" />
            <span className="font-mono text-xs tracking-wider text-concafras-gold/80 uppercase">
              Vídeo
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
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={prompt.thumbnail}
                  alt={`Video prompt example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-concafras-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-concafras-gold/20 backdrop-blur-sm flex items-center justify-center border border-concafras-gold/30">
                    <Play className="w-6 h-6 text-concafras-gold ml-0.5" />
                  </div>
                </div>
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
