import { Mail, Instagram, Youtube, ArrowUpRight, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Email', icon: Mail, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-t border-concafras-blue/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - CTA */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white/90 mb-6">
              Ficou com{' '}
              <span className="italic text-concafras-accent/80">dúvidas?</span>
            </h2>
            <p className="font-body text-lg text-gray-500 mb-8">
              Entre em contato com o Fúlvio para saber mais sobre este material
              e sobre como usar IA na comunicação espírita.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-concafras-gold to-concafras-gold/80 text-concafras-dark rounded-full font-display font-medium hover:from-concafras-warm hover:to-concafras-gold transition-all duration-300 shadow-lg shadow-concafras-gold/10 group"
            >
              <Mail className="w-5 h-5" />
              Falar com o Fúlvio
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right side - Links */}
          <div className="lg:text-right">
            <p className="font-body text-sm text-gray-600 mb-6">Acompanhe a Concafras</p>
            <div className="flex lg:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-12 h-12 rounded-full bg-concafras-navy border border-concafras-blue/30 flex items-center justify-center hover:bg-concafras-blue/20 hover:border-concafras-gold/30 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-gray-400 hover:text-concafras-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-concafras-blue/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-body">
            <span className="text-white/80 font-display font-medium">Concafras</span>
            <span className="text-concafras-blue/40">·</span>
            <span className="text-gray-500 text-sm">2026</span>
            <span className="text-concafras-blue/40">·</span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              Feito com <Heart className="w-3 h-3 text-concafras-gold/60 inline" /> por Fúlvio
            </span>
          </div>

          <div className="flex items-center gap-6 font-body text-sm text-gray-600">
            <a href="https://portal.concafras.com" target="_blank" rel="noopener noreferrer" className="hover:text-concafras-accent transition-colors">
              Portal Concafras
            </a>
          </div>
        </div>

        {/* Large brand text */}
        <div className="mt-20 overflow-hidden select-none">
          <p className="text-[6vw] md:text-[5vw] font-display font-light text-concafras-navy leading-none tracking-tight">
            CONCAFRAS 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
