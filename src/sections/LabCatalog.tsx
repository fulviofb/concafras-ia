import { useEffect, useMemo, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, ExternalLink, Star } from 'lucide-react';

interface PublicCatalogItem {
  id: string;
  name: string;
  url: string;
  category: string;
  category_label: string;
  priority: string;
  priority_label: string;
  status_label: string;
  recommendation: string;
  technical_level_label: string;
  audience: string;
  public_summary: string;
  license: string;
  stars_observed?: number;
}

interface PublicCatalogCategory {
  id: string;
  label: string;
  description: string;
  item_count: number;
}

interface PublicCatalog {
  schema_version: string;
  generated_at: string;
  metadata: {
    description: string;
  };
  categories: PublicCatalogCategory[];
  items: PublicCatalogItem[];
}

const priorityOrder = ['essential', 'high', 'medium', 'low'];
const categoryOrder = ['video_programatico', 'edicao_video', 'voz_tts_clonagem', 'imagem_design_prompts'];

export default function LabCatalog() {
  const [catalog, setCatalog] = useState<PublicCatalog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`/data/catalog.public.json?v=${Date.now()}`, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data: PublicCatalog) => {
        if (isMounted) setCatalog(data);
      })
      .catch((err: Error) => {
        if (isMounted) setError(err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredItems = useMemo(() => {
    if (!catalog) return [];

    return [...catalog.items]
      .filter((item) => categoryOrder.includes(item.category))
      .sort((a, b) => {
        const categoryDiff = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
        if (categoryDiff !== 0) return categoryDiff;
        const priorityDiff = priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
        if (priorityDiff !== 0) return priorityDiff;
        return (b.stars_observed || 0) - (a.stars_observed || 0);
      })
      .slice(0, 12);
  }, [catalog]);

  const featuredCategories = useMemo(() => {
    if (!catalog) return [];
    return categoryOrder
      .map((id) => catalog.categories.find((category) => category.id === id))
      .filter(Boolean) as PublicCatalogCategory[];
  }, [catalog]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="lab-catalog" className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-concafras-blue/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mb-14"
        >
          <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-concafras-gold/30 bg-concafras-dark/40 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 text-concafras-gold" />
            <span className="font-mono text-xs tracking-wider text-concafras-gold/80 uppercase">
              Laboratório vivo
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-light text-white/95 leading-[1.1] tracking-tight mb-6">
            Catálogo prático do <span className="italic text-concafras-gold/80">Lab Mídia IA</span>
          </h2>

          <p className="font-body text-xl text-gray-400 font-light leading-relaxed">
            Esta seção é alimentada pelo repositório público de curadoria. A ideia é evitar listas soltas de ferramentas e mostrar caminhos com status, nível técnico e recomendação.
          </p>
        </motion.div>

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-red-100 font-body">
            Não foi possível carregar o catálogo agora. O conteúdo principal do site continua disponível.
          </div>
        )}

        {!catalog && !error && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-gray-300 font-body">
            Carregando catálogo público...
          </div>
        )}

        {catalog && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {featuredCategories.map((category) => (
                <div key={category.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-concafras-gold/70 mb-3">
                    {category.item_count} itens
                  </div>
                  <h3 className="font-display text-2xl text-white/90 mb-3">{category.label}</h3>
                  <p className="font-body text-sm text-gray-400 leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
            >
              {featuredItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="group block rounded-2xl border border-concafras-blue/20 bg-gradient-to-br from-concafras-navy/30 to-concafras-dark/80 p-6 hover:border-concafras-gold/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-concafras-gold/70 mb-2">
                        {item.category_label}
                      </div>
                      <h3 className="font-display text-2xl text-white/90 group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-concafras-gold transition-colors shrink-0" />
                  </div>

                  <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">
                    {item.public_summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full bg-concafras-gold/10 border border-concafras-gold/20 text-concafras-gold/90 text-xs font-mono uppercase tracking-wide">
                      {item.technical_level_label}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono uppercase tracking-wide">
                      {item.priority_label}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono uppercase tracking-wide">
                      {item.license}
                    </span>
                  </div>

                  <p className="font-body text-xs text-gray-500 leading-relaxed mb-4">
                    {item.recommendation}
                  </p>

                  <div className="flex items-center justify-between gap-3 text-xs text-gray-500 font-mono">
                    <span>{item.status_label}</span>
                    {typeof item.stars_observed === 'number' && (
                      <span className="inline-flex items-center gap-1 text-concafras-gold/70 shrink-0">
                        <Star className="w-3.5 h-3.5" />
                        {item.stars_observed.toLocaleString('pt-BR')}
                      </span>
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-body text-sm text-gray-400">
                Dados gerados pelo <code className="text-concafras-gold">lab-midia-ia</code>. Última geração: {new Date(catalog.generated_at).toLocaleString('pt-BR')}.
              </p>
              <a
                href="https://github.com/fulviofb/lab-midia-ia/blob/master/public-data/catalog.public.json"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-concafras-gold hover:text-white transition-colors"
              >
                Ver JSON público
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
