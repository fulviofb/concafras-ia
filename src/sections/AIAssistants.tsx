import { motion, Variants } from 'framer-motion';
import { ExternalLink, Sparkles, BookOpen, Presentation, Video, Wrench } from 'lucide-react';

const categories = [
    {
        title: 'Divulgação do Espiritismo',
        icon: <Sparkles className="w-5 h-5 text-concafras-gold" />,
        description: 'Ferramentas para criar conteúdo visual e campanhas de divulgação com linguagem doutrinária.',
        assistants: [
            {
                name: 'Analista Visual Espírita',
                description: 'Analisa e cria conteúdo visual com foco na doutrina espírita. Avalia composição, cores e mensagens visuais para comunicação eficaz.',
                link: 'https://chatgpt.com/g/g-68628607c5dc8191aff7d458384b1d46-analista-visual-espirita',
                platform: 'ChatGPT',
            },
            {
                name: 'Carrossel COPFY',
                description: 'Cria carrosséis para Instagram usando o método COPFY (Contexto, Objetivo, Público, Formato, Estilo). Ideal para posts educativos.',
                link: 'https://chatgpt.com/g/g-6842f3c344408191bba62bc7569bc025-carrossel-baseado-no-metodo-copfy',
                platform: 'ChatGPT',
            },
            {
                name: 'Planejamento de Conteúdo',
                description: 'Calendário editorial, legendas, hashtags, horários de postagem e estratégias de engajamento com linguagem doutrinária acessível.',
                link: '#',
                platform: 'Em Breve',
            },
        ]
    },
    {
        title: 'Estudos Doutrinários',
        icon: <BookOpen className="w-5 h-5 text-concafras-gold" />,
        description: 'Apoio especializado na Codificação Espírita para grupos de estudo e palestras.',
        assistants: [
            {
                name: 'Tutor da Codificação',
                description: 'Assistente especializado nas Obras Básicas. Auxilia no estudo, cria resumos, questões para grupos e relaciona temas.',
                link: '#',
                platform: 'Em Breve',
            },
            {
                name: 'Roteirista de Palestras',
                description: 'Monta roteiros de palestras públicas. Inclui citações das obras, estrutura didática e exemplos práticos para o dia a dia.',
                link: '#',
                platform: 'Em Breve',
            },
        ]
    },
    {
        title: 'Gestão do Centro Espírita',
        icon: <Presentation className="w-5 h-5 text-concafras-gold" />,
        description: 'Otimização de tarefas administrativas internas e eventos.',
        assistants: [
            {
                name: 'Organizador de Eventos',
                description: 'Organiza semanas espíritas, bazares beneficentes, campanhas. Gera cronogramas, checklists e plano de comunicação.',
                link: '#',
                platform: 'Em Breve',
            },
            {
                name: 'Redator Administrativo',
                description: 'Redige comunicados, atas de reunião, escalas de trabalho voluntário e mensagens para grupos com tom fraterno.',
                link: '#',
                platform: 'Em Breve',
            },
        ]
    },
    {
        title: 'Vídeo & Podcast',
        icon: <Video className="w-5 h-5 text-concafras-gold" />,
        description: 'Roteirização e geração de prompts avançados para mídias audiovisuais.',
        assistants: [
            {
                name: 'Diretor de Vídeo IA',
                description: 'Especialista em geração de vídeo. Pesquisa referências visuais e gera prompts otimizados para Runway, Kling e Sora.',
                link: 'https://gemini.google.com/gem/1LvsTeuhsmSR0LQ_PlGtL0rpOmhlsusfQ?usp=sharing',
                platform: 'Gemini',
            },
            {
                name: 'Roteirista de Podcast',
                description: 'Gera roteiros completos para podcasts espíritas: estrutura de episódio, introdução, perguntas e encerramento.',
                link: 'https://gemini.google.com/gem/1ci6dfBrlSDXPr5do-MomldD4EhgX6x4f?usp=sharing',
                platform: 'Gemini',
            },
            {
                name: 'Criador de Thumbnails',
                description: 'Cria prompts otimizados para gerar thumbnails e capas de YouTube/podcast com estética espírita que atraem cliques.',
                link: '#',
                platform: 'Em Breve',
            },
        ]
    },
    {
        title: 'Ferramentas & Utilitários',
        icon: <Wrench className="w-5 h-5 text-concafras-gold" />,
        description: 'Utilitários para criadores de prompts e construção de novos bots.',
        assistants: [
            {
                name: 'GPT Arquiteto 2.0',
                description: 'Meta-assistente especializado em projetar e construir outros GPTs personalizados para qualquer necessidade da casa espírita.',
                link: 'https://chatgpt.com/g/g-68ff70e5170881919c30c2fa62616edb-gpt-arquiteto-2-0',
                platform: 'ChatGPT',
            },
            {
                name: 'Prompt Master',
                description: 'Especialista em engenharia de prompts. Transforma instruções simples em prompts estruturados e otimizados.',
                link: 'https://chatgpt.com/g/g-6834bcfbbfc0819193f6f08bd505aaa6-prompt-master',
                platform: 'ChatGPT',
            },
            {
                name: 'Agente Autônomo',
                description: 'Executa tarefas complexas de ponta a ponta: pesquisa aprofundada, criação de documentos, análise de dados e automações.',
                link: 'https://manus.im/invitation/GIXLQSHXL82K7',
                platform: 'Manus',
            },
        ]
    },
];

export default function AIAssistants() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="ai-assistants" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-concafras-dark border-t border-white/5">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-concafras-navy/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto position-relative z-10">
                <motion.div
                    className="mb-20 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                >
                    <motion.p variants={itemVariants} className="font-mono text-xs tracking-[0.3em] text-concafras-gold/50 mb-6 uppercase flex items-center justify-center md:justify-start gap-3">
                        <span className="w-12 h-px bg-concafras-gold/30"></span>
                        Ferramentas Customizadas
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white/90 mb-6 leading-[1.1]">
                        Assistentes de Inteligência{' '}
                        <span className="italic font-normal text-concafras-accent/80">Artificial</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="font-body text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-light mt-6 mx-auto md:mx-0">
                        Ferramentas criativas configuradas com IA para potencializar a divulgação, gestão e estudos na casa espírita. Explore nossos assistentes especializados.
                    </motion.p>
                </motion.div>

                <div className="space-y-24">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-5%" }}
                            variants={containerVariants}
                            className="relative"
                        >
                            {/* Category Header */}
                            <motion.div variants={itemVariants} className="flex items-start gap-4 mb-10 border-b border-white/10 pb-6">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-display text-white/90 mb-2">{category.title}</h3>
                                    <p className="text-gray-400 font-body text-sm md:text-base">{category.description}</p>
                                </div>
                            </motion.div>

                            {/* Assistants Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.assistants.map((assistant, index) => (
                                    <motion.a
                                        key={assistant.name}
                                        variants={itemVariants}
                                        href={assistant.link !== '#' ? assistant.link : undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block group relative h-full rounded-2xl p-8 transition-all duration-500 overflow-hidden
                      ${assistant.link === '#'
                                                ? 'bg-concafras-navy/30 border border-white/5 cursor-default'
                                                : 'bg-concafras-navy/50 hover:bg-concafras-navy/80 border border-white/10 hover:border-concafras-gold/30 hover:shadow-2xl hover:shadow-concafras-navy/20 cursor-pointer'
                                            }`}
                                    >
                                        {/* Hover Glow */}
                                        {assistant.link !== '#' && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-concafras-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        )}

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className="font-display text-xl text-white/95 group-hover:text-concafras-gold transition-colors duration-300 pr-4">
                                                    {assistant.name}
                                                </h4>
                                                {assistant.link !== '#' && (
                                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-concafras-gold/10 transition-colors shrink-0">
                                                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-concafras-gold" />
                                                    </div>
                                                )}
                                            </div>

                                            <p className="font-body text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                                {assistant.description}
                                            </p>

                                            <div className="mt-auto flex items-center gap-2">
                                                <span className={`text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded-full border
                          ${assistant.platform === 'Em Breve'
                                                        ? 'bg-white/5 text-gray-500 border-white/10'
                                                        : 'bg-concafras-accent/10 text-concafras-accent/90 border-concafras-accent/20'
                                                    }`}>
                                                    {assistant.platform}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
