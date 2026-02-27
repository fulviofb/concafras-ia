import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'intro', label: 'Introdução' },
    { id: 'image-tools', label: 'Ferramentas de Imagem' },
    { id: 'video-tools', label: 'Ferramentas de Vídeo' },
    { id: 'creative-flow', label: 'Fluxo Criativo' },
    { id: 'ai-assistants', label: 'Assistentes IA' },
    { id: 'insights', label: 'Insights & Estudos' },
    { id: 'visual-styles', label: 'Estilos Visuais' },
    { id: 'visual-glossary', label: 'Glossário Visual' },
    { id: 'image-prompts', label: 'Prompts de Imagem' },
    { id: 'video-prompts', label: 'Prompts de Vídeo' },
    { id: 'ai-director', label: 'O Diretor' },
    { id: 'whats-new', label: 'Novidades' },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('hero');

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

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
            {sections.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="group relative flex items-center justify-end w-32 h-4 outline-none"
                    aria-label={`Scroll to ${label}`}
                >
                    <span
                        className={`
              absolute right-8 px-2.5 py-1 rounded bg-concafras-dark/90 backdrop-blur-md border border-white/5 text-white/90 text-[10px] font-mono whitespace-nowrap uppercase tracking-widest
              opacity-0 translate-x-4 pointer-events-none transition-all duration-300
              group-hover:opacity-100 group-hover:translate-x-0
              ${activeSection === id ? 'text-concafras-gold font-medium border-concafras-gold/20' : ''}
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
    );
}
