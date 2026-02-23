import { useState } from 'react';

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

  return (
    <section className="relative min-h-screen w-full py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase">
            Vocabulário
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6">
            Glossário{' '}
            <span className="italic text-concafras-accent/80">Visual</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-2xl leading-relaxed">
            Uma lista de termos que podem ser usados nos prompts para controlar
            visual, estilo, qualidade e emoção das suas criações:
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {terms.map((term) => (
            <span
              key={term}
              className={`px-5 py-2.5 rounded-full font-mono text-sm border transition-all duration-300 cursor-default
                ${hoveredTerm === term
                  ? 'bg-concafras-gold text-concafras-dark border-concafras-gold font-medium'
                  : 'bg-transparent text-gray-400 border-concafras-blue/30 hover:border-concafras-accent/40 hover:text-concafras-accent/80'
                }`}
              onMouseEnter={() => setHoveredTerm(term)}
              onMouseLeave={() => setHoveredTerm(null)}
            >
              {term}
            </span>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-concafras-blue/20">
          <p className="font-body text-sm text-gray-600 italic">
            Dica: Combine diferentes termos para criar descrições mais ricas e específicas
            nos seus prompts. Pense na mensagem espírita que quer transmitir e escolha
            o estilo que melhor a representa.
          </p>
        </div>
      </div>
    </section>
  );
}
