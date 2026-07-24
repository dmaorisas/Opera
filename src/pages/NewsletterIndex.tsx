import { useState } from 'react';
import { motion } from 'framer-motion';
import { NEWSLETTER_ISSUES } from '../data/newsletterPosts';

interface NewsletterIndexProps {
    onSelectIssue: (slug: string) => void;
    onReturnHome: () => void;
}

const CATEGORIES = ['Todas', 'IA & Automatización', 'Eficiencia Operativa', 'Estrategia Tecnológica'] as const;

const NewsletterIndex = ({ onSelectIssue, onReturnHome }: NewsletterIndexProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const featuredIssue = NEWSLETTER_ISSUES.find(issue => issue.featured) || NEWSLETTER_ISSUES[0];
    const previousIssues = NEWSLETTER_ISSUES.filter(issue => {
        const matchesCategory = selectedCategory === 'Todas' || issue.category === selectedCategory;
        return matchesCategory;
    });

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 5000);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen bg-obsidian text-white font-body relative">
            {/* Top Navigation Bar for Newsletter */}
            <header className="sticky top-0 z-50 w-full bg-obsidian/80 backdrop-blur-md border-b border-white/10 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onReturnHome}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold font-display text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            <span>opera.dmaori.com</span>
                        </button>
                        <span className="hidden sm:inline text-gray-600">|</span>
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold font-display uppercase tracking-widest text-gray-300">
                                OPERA Editorial
                            </span>
                        </div>
                    </div>

                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            onReturnHome();
                            setTimeout(() => {
                                const el = document.getElementById('contacto');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}
                        className="glass-panel text-white bg-neon-orange/80 hover:bg-neon-orange px-5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all border border-neon-orange/50 shadow-[0_0_10px_rgba(255,107,0,0.4)] font-display"
                    >
                        Agendar diagnóstico
                    </a>
                </div>
            </header>

            {/* Newsletter Hero Banner */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
                <section className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                            <span className="material-symbols-outlined text-sm text-neon-orange">mark_email_unread</span>
                            <span className="text-xs font-bold font-display text-gray-300 uppercase tracking-widest">
                                Semanario de Eficiencia & IA
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white mb-6 leading-tight">
                            OPERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-neon-orange">Insights</span>
                        </h1>

                        <p className="text-lg text-gray-300 leading-relaxed font-body mb-8">
                            Análisis quincenales sobre cómo eliminar la fricción operativa, estructurar flujos ágiles e integrar Inteligencia Artificial en el corazón de las empresas.
                        </p>

                        {/* Integrated Newsletter Subscription Form */}
                        <form onSubmit={handleSubscribe} className="relative max-w-lg mx-auto flex flex-col sm:flex-row gap-2.5 p-2 rounded-2xl bg-surface border border-white/15 backdrop-blur-md shadow-2xl">
                            <input
                                type="email"
                                required
                                placeholder="Ingresa tu correo profesional..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none font-body"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl text-xs font-display tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)] whitespace-nowrap"
                            >
                                Suscribirme gratis
                            </button>
                        </form>

                        {subscribed && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-accent font-semibold mt-3"
                            >
                                ✓ ¡Gracias por suscribirte! Recibirás nuestras próximas publicaciones en tu bandeja.
                            </motion.p>
                        )}
                    </motion.div>
                </section>

                {/* Category Pills */}
                <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold font-display transition-all ${
                                selectedCategory === cat
                                    ? 'bg-white text-obsidian shadow-lg scale-105'
                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Latest Featured Newsletter Issue */}
                {selectedCategory === 'Todas' && featuredIssue && (
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold font-display uppercase tracking-widest text-primary flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                                Edición Más Reciente
                            </span>
                        </div>

                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => onSelectIssue(featuredIssue.slug)}
                            className="group cursor-pointer rounded-3xl bg-surface border border-white/15 hover:border-primary/50 transition-all duration-300 p-8 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl"
                        >
                            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${featuredIssue.coverGradient} opacity-20 blur-3xl pointer-events-none`}></div>

                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-body text-gray-400">
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-bold font-display border border-primary/30">
                                        {featuredIssue.issueNumber}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300">
                                        {featuredIssue.category}
                                    </span>
                                    <span>• {featuredIssue.date}</span>
                                    <span>• {featuredIssue.readTime}</span>
                                </div>

                                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {featuredIssue.title}
                                </h2>

                                <p className="text-gray-300 font-body mb-6 text-base leading-relaxed max-w-4xl">
                                    {featuredIssue.subtitle}
                                </p>

                                {/* Key Highlights Preview */}
                                <div className="mb-8 p-5 rounded-2xl bg-obsidian/60 border border-white/10">
                                    <p className="text-xs font-bold font-display text-accent uppercase tracking-wider mb-3">Puntos Clave de esta edición:</p>
                                    <ul className="space-y-2">
                                        {featuredIssue.highlights.map((h, i) => (
                                            <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                                                <span className="text-primary font-bold">→</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm">
                                            {featuredIssue.author.avatar}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white font-display">{featuredIssue.author.name}</p>
                                            <p className="text-[10px] text-gray-400 font-body">{featuredIssue.author.role}</p>
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider font-display group-hover:translate-x-2 transition-transform">
                                        <span>Leer Edición Completa</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </section>
                )}

                {/* Newsletter Archive Feed */}
                <section>
                    <h3 className="text-xl font-display font-bold text-white mb-8">
                        Todas las Ediciones
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {previousIssues.map((issue) => (
                            <motion.article
                                key={issue.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={() => onSelectIssue(issue.slug)}
                                className="group cursor-pointer rounded-2xl bg-surface/70 border border-white/10 hover:border-accent/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-mono text-accent font-bold">
                                            {issue.issueNumber}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-body">
                                            {issue.date}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-bold font-display text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                                        {issue.title}
                                    </h4>

                                    <p className="text-xs text-gray-400 font-body mb-4 line-clamp-3 leading-relaxed">
                                        {issue.subtitle}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                                    <span className="text-gray-400">{issue.readTime}</span>
                                    <span className="text-accent font-semibold font-display group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                        Leer <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>
            </main>

            {/* Simple Footer */}
            <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500 font-body">
                <p>© {new Date().getFullYear()} OPERA Insights. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default NewsletterIndex;
