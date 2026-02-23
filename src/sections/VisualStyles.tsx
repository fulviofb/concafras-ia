import { useEffect, useRef, useState } from 'react';

const styles = [
  { name: 'Comercial Photo', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop' },
  { name: 'Product Still', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop' },
  { name: 'Cinematic', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=800&fit=crop' },
  { name: '3D Render', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop' },
  { name: 'Analogic', image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=800&fit=crop' },
  { name: 'Futuristic', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=800&fit=crop' },
  { name: 'Portrait', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop' },
  { name: 'Illustration', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=800&fit=crop' },
  { name: 'Animation', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=800&fit=crop' },
  { name: 'Infrared', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop' },
];

export default function VisualStyles() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Referências
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6">
            Estilos{' '}
            <span className="italic text-concafras-accent/80">Visuais</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-2xl leading-relaxed">
            Cada estilo visual comunica uma ideia, desperta emoções e fortalece narrativas.
            Conheça diferentes estilos que irão potencializar as suas criações com IA
            para a comunicação espírita.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {styles.map((style, index) => (
            <div
              key={style.name}
              className={`group relative aspect-[3/4] overflow-hidden rounded-xl bg-concafras-navy cursor-pointer transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <img
                src={style.image}
                alt={style.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concafras-dark/90 via-concafras-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-sm font-medium text-white/90 group-hover:text-concafras-gold transition-colors duration-300">
                  {style.name}
                </h3>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-concafras-gold/30 transition-colors duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
