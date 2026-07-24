import { motion } from 'framer-motion';
import { NEWSLETTER_ISSUES } from '../data/newsletterPosts';

interface NewsletterDetailProps {
    slug: string;
    onBackToNewsletter: () => void;
    onSelectIssue: (slug: string) => void;
    onReturnHome: () => void;
}

const NewsletterDetail = ({ slug, onBackToNewsletter, onSelectIssue, onReturnHome }: NewsletterDetailProps) => {
    const issue = NEWSLETTER_ISSUES.find(i => i.slug === slug) || NEWSLETTER_ISSUES[0];
    const otherIssues = NEWSLETTER_ISSUES.filter(i => i.id !== issue.id);

    return (
        <div className="min-h-screen bg-obsidian text-white font-body relative">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full bg-obsidian/80 backdrop-blur-md border-b border-white/10 py-4">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={onBackToNewsletter}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold font-display text-gray-300 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span>Todas las ediciones</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-accent">{issue.issueNumber}</span>
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                        <span className="px-3 py-0.5 rounded-full bg-primary/20 text-primary font-bold font-display border border-primary/30">
                            {issue.category}
                        </span>
                        <span>• {issue.date}</span>
                        <span>• {issue.readTime}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mb-6 leading-tight">
                        {issue.title}
                    </h1>

                    <p className="text-lg text-gray-300 font-body leading-relaxed mb-6">
                        {issue.subtitle}
                    </p>

                    {/* Author Badge */}
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-white/10 max-w-fit">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                            {issue.author.avatar}
                        </div>
                        <div>
                            <p className="text-xs font-bold font-display text-white">{issue.author.name}</p>
                            <p className="text-[10px] text-gray-400 font-body">{issue.author.role}</p>
                        </div>
                    </div>
                </motion.header>

                {/* Key Takeaways Box */}
                {issue.highlights && issue.highlights.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-10 p-6 rounded-2xl bg-surface/80 border border-primary/30 backdrop-blur-md"
                    >
                        <h4 className="text-xs font-bold font-display text-primary uppercase tracking-widest mb-3">En esta edición aprenderás:</h4>
                        <ul className="space-y-2">
                            {issue.highlights.map((h, index) => (
                                <li key={index} className="text-xs sm:text-sm text-gray-200 flex items-start gap-2">
                                    <span className="text-accent font-bold">✓</span>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Article Body Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert max-w-none text-gray-200 font-body text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: issue.content }}
                />

                {/* Article Footer & Return Links */}
                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                        onClick={onBackToNewsletter}
                        className="text-xs font-bold font-display text-primary hover:text-white transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span>Ver más ediciones de OPERA Insights</span>
                    </button>

                    <button
                        onClick={() => navigator.clipboard?.writeText(window.location.href)}
                        className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 transition-colors inline-flex items-center gap-1.5"
                    >
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                        <span>Copiar enlace de esta edición</span>
                    </button>
                </div>

                {/* Read Next Section */}
                {otherIssues.length > 0 && (
                    <section className="mt-16 pt-10 border-t border-white/10">
                        <h3 className="text-lg font-display font-bold text-white mb-6">Otras Ediciones</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {otherIssues.map(o => (
                                <div
                                    key={o.id}
                                    onClick={() => onSelectIssue(o.slug)}
                                    className="group cursor-pointer p-5 rounded-2xl bg-surface border border-white/10 hover:border-accent/40 transition-all flex items-center justify-between"
                                >
                                    <div>
                                        <span className="text-[10px] font-mono text-accent font-bold block mb-1">{o.issueNumber}</span>
                                        <h4 className="text-sm font-bold font-display text-white group-hover:text-accent transition-colors">{o.title}</h4>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all text-sm">
                                        arrow_forward
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default NewsletterDetail;
