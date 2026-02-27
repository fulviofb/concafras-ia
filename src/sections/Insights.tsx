import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, CalendarDays } from 'lucide-react';

const mockPosts = [
    {
        id: 1,
        title: 'A Geração de Imagens com IA respeitando a Doutrina',
        excerpt: 'Como usar ferramentas como Midjourney e Gemini para criar material ilustrativo sem perder a fidelidade aos princípios espíritas e evitando o esoterismo.',
        category: 'Geração de Imagem',
        coverImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=500&fit=crop',
        date: '26 Fev 2026',
        readTime: '4 min',
        link: '#',
    },
    {
        id: 2,
        title: 'Automatizando a Gestão de Palestras',
        excerpt: 'Descubra como estruturar assistentes na casa espírita para criar roteiros, planejar eventos e simplificar a comunicação interna entre voluntários.',
        category: 'Gestão Inteligente',
        coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop',
        date: '25 Fev 2026',
        readTime: '6 min',
        link: '#',
    },
    {
        id: 3,
        title: 'O Estudo de "O Livro dos Espíritos" via Prompts',
        excerpt: 'Criamos um guia de prompts para você interagir com a IA focando no entendimento aprofundado e pesquisa cruzada nas obras de Allan Kardec.',
        category: 'Estudo Dinâmico',
        coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop',
        date: '22 Fev 2026',
        readTime: '5 min',
        link: '#',
    },
];

export default function Insights() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="insights" className="relative w-full py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto position-relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                >
                    <div className="max-w-xl">
                        <motion.p variants={itemVariants} className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase flex items-center justify-start gap-3">
                            <span className="w-12 h-px bg-concafras-gold/30"></span>
                            Atualizações Diárias
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/90 leading-[1.1]">
                            Insights & <span className="italic font-normal text-concafras-accent/80">Estudos</span>
                        </motion.h2>
                    </div>
                    <motion.div variants={itemVariants}>
                        <button className="group relative px-6 py-3 rounded-full bg-transparent border border-white/20 text-white/80 overflow-hidden flex items-center gap-2 hover:border-concafras-gold/50 transition-colors duration-300">
                            <span className="relative z-10 font-body text-sm font-medium tracking-wider">Ver todos os artigos</span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-concafras-gold/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-5%" }}
                    variants={containerVariants}
                >
                    {mockPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={itemVariants}
                            className="group flex flex-col bg-concafras-navy/30 rounded-2xl overflow-hidden border border-white/10 hover:bg-concafras-navy/50 hover:border-concafras-gold/30 hover:shadow-xl hover:shadow-concafras-navy/30 transition-all duration-500 cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-xs font-mono tracking-wider px-3 py-1.5 rounded-full uppercase">
                                        {post.category}
                                    </span>
                                </div>
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-concafras-dark to-transparent opacity-60" />
                            </div>

                            <div className="flex flex-col flex-grow p-6 md:p-8">
                                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <CalendarDays className="w-3.5 h-3.5" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="font-display text-2xl text-white/90 leading-snug mb-4 group-hover:text-concafras-gold transition-colors duration-300">
                                    {post.title}
                                </h3>

                                <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-concafras-accent/90 text-sm font-medium tracking-wide group-hover:text-concafras-gold transition-colors duration-300">
                                    Ler Artigo Completo
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
