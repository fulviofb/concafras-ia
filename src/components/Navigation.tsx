import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { List, X } from 'lucide-react';

type Item = { id: string; label: string };

const groups: { title: string; items: Item[] }[] = [
    {
        title: 'Comece',
        items: [
            { id: 'hero', label: 'Início' },
            { id: 'intro', label: 'Introdução' },
            { id: 'start-here', label: 'Comece por aqui' },
        ],
    },
    {
        title: 'Ferramentas',
        items: [
            { id: 'image-tools', label: 'Ferramentas de Imagem' },
            { id: 'video-tools', label: 'Ferramentas de Vídeo' },
            { id: 'lab-catalog', label: 'Lab Mídia IA' },
            { id: 'creative-flow', label: 'Fluxo Criativo' },
            { id: 'ai-assistants', label: 'Assistentes IA' },
        ],
    },
    {
        title: 'Referências',
        items: [
            { id: 'insights', label: 'Insights & Estudos' },
            { id: 'visual-styles', label: 'Estilos Visuais' },
            { id: 'visual-glossary', label: 'Glossário Visual' },
            { id: 'image-prompts', label: 'Prompts de Imagem' },
            { id: 'video-prompts', label: 'Prompts de Vídeo' },
        ],
    },
    {
        title: 'Mais',
        items: [
            { id: 'ai-director', label: 'O Diretor' },
            { id: 'whats-new', label: 'Novidades' },
        ],
    },
];

const sections = groups.flatMap((group) => group.items);

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px', // Adjust to trigger when relatively centered
                threshold: 0
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);
        panelRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    };

    const closeAndScrollTo = (id: string) => {
        setIsOpen(false);
        // O painel trava o scroll do body enquanto aberto. Esperar o fechamento
        // ser aplicado antes de rolar, senao o scroll e engolido.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                triggerRef.current?.focus({ preventScroll: true });
                scrollTo(id);
            });
        });
    };

    const activeLabel = sections.find(({ id }) => id === activeSection)?.label ?? 'Início';

    return (
        <>
            <nav
                aria-label="Índice das seções"
                className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5"
            >
                {sections.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="group relative flex items-center justify-end w-40 h-4 outline-none"
                        aria-label={`Ir para ${label}`}
                        aria-current={activeSection === id ? 'true' : undefined}
                    >
                        <span
                            className={`
              absolute right-8 px-2.5 py-1 rounded bg-concafras-dark/90 backdrop-blur-md border text-[10px] font-mono whitespace-nowrap uppercase tracking-widest
              pointer-events-none transition-all duration-300
              ${activeSection === id
                                    ? 'opacity-100 translate-x-0 text-concafras-gold font-medium border-concafras-gold/25'
                                    : 'opacity-0 translate-x-4 text-white/90 border-white/5 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0'
                                }
            `}
                        >
                            {label}
                        </span>

                        <div className="relative flex items-center justify-center w-4 h-4">
                            <motion.div
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${activeSection === id ? 'bg-concafras-gold' : 'bg-white/20 group-hover:bg-white/60'
                                    }`}
                                animate={{
                                    scale: activeSection === id ? 1.5 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                            {activeSection === id && (
                                <motion.div
                                    layoutId="active-dot-outline"
                                    className="absolute inset-0 rounded-full border border-concafras-gold/60"
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                            )}
                        </div>
                    </button>
                ))}
            </nav>

            <button
                ref={triggerRef}
                onClick={() => setIsOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                className="lg:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-concafras-gold/30 bg-concafras-dark/90 backdrop-blur-md pl-3.5 pr-4 py-2.5 shadow-lg shadow-black/40"
            >
                <List className="w-4 h-4 text-concafras-gold" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                    Índice
                </span>
                <span className="sr-only">— seção atual: {activeLabel}</span>
            </button>

            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-[60]">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    <div
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Índice das seções"
                        tabIndex={-1}
                        className="absolute inset-x-0 bottom-0 max-h-[82vh] overflow-y-auto rounded-t-2xl border-t border-concafras-gold/20 bg-concafras-dark outline-none"
                    >
                        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-white/5 bg-concafras-dark/95 backdrop-blur-md px-5 py-4">
                            <div className="min-w-0">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-concafras-gold/60">
                                    Índice
                                </p>
                                <p className="font-body text-sm text-gray-500 truncate">
                                    Você está em {activeLabel}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Fechar índice"
                                className="flex-shrink-0 rounded-full border border-white/10 p-2 text-white/70"
                            >
                                <X className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="px-5 pt-2 pb-8">
                            {groups.map((group) => (
                                <div key={group.title} className="pt-4">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-concafras-gold/40 pb-1">
                                        {group.title}
                                    </p>
                                    <ul className="flex flex-col">
                                        {group.items.map(({ id, label }) => (
                                            <li key={id}>
                                                <button
                                                    onClick={() => closeAndScrollTo(id)}
                                                    aria-current={activeSection === id ? 'true' : undefined}
                                                    className={`flex w-full items-center gap-3 border-b border-white/5 py-3 text-left font-body text-[15px] transition-colors ${activeSection === id
                                                            ? 'text-concafras-gold'
                                                            : 'text-gray-400'
                                                        }`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${activeSection === id ? 'bg-concafras-gold' : 'bg-white/20'
                                                            }`}
                                                        aria-hidden="true"
                                                    />
                                                    {label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
