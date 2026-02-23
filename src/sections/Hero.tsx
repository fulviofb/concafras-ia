import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const draw = () => {
      time += 0.004;
      ctx.fillStyle = '#050a14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Celestial flowing lines in blue/gold
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        const hue = i % 2 === 0 ? '59, 130, 246' : '212, 168, 83';
        ctx.strokeStyle = `rgba(${hue}, ${0.08 - i * 0.01})`;
        ctx.lineWidth = 1.5;

        for (let x = 0; x < canvas.width; x += 4) {
          const y = canvas.height * 0.45 +
            Math.sin(x * 0.002 + time + i * 0.7) * 120 +
            Math.sin(x * 0.005 + time * 1.2 + i * 0.3) * 60 +
            Math.cos(x * 0.001 + time * 0.5) * 40;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Stars / particles
      for (let i = 0; i < 40; i++) {
        const x = (Math.sin(time * 0.3 + i * 2.1) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.2 + i * 1.7) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time * 0.8 + i) * 1.5 + 2;
        const alpha = 0.2 + Math.sin(time + i * 0.5) * 0.15;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        const isGold = i % 5 === 0;
        ctx.fillStyle = isGold
          ? `rgba(212, 168, 83, ${alpha})`
          : `rgba(100, 181, 246, ${alpha * 0.7})`;
        ctx.fill();
      }

      // Subtle radial glow center
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.4, 0,
        canvas.width / 2, canvas.height * 0.4, canvas.width * 0.4
      );
      gradient.addColorStop(0, 'rgba(26, 58, 110, 0.12)');
      gradient.addColorStop(0.5, 'rgba(212, 168, 83, 0.04)');
      gradient.addColorStop(1, 'rgba(5, 10, 20, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center">
          <p className="font-body text-xs tracking-[0.4em] text-concafras-gold/60 mb-4 uppercase">
            Concafras · 2026
          </p>

          <h1 className="font-display tracking-tight mb-6">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-medium text-white/95">
              IA
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light italic text-concafras-accent/70 my-2">
              na Comunicação
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-semibold text-gradient-gold">
              Espírita
            </span>
          </h1>

          <div className="mt-12 space-y-3">
            <p className="font-body text-sm tracking-wide text-concafras-accent/40">
              Um guia prático de ferramentas de IA para a divulgação espírita
            </p>
            <p className="font-body text-xs tracking-[0.2em] text-white/20 uppercase">
              por Fúlvio
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-float">
            <div className="w-px h-16 bg-gradient-to-b from-concafras-gold/40 to-transparent mx-auto" />
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-concafras-dark to-transparent" />
    </section>
  );
}
