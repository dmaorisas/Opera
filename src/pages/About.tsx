import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const About = () => {
    const values = [
        { title: "ROI operativo", desc: "No implementamos por moda. Cada hora que liberamos tiene un impacto directo en tus márgenes.", icon: <Zap className="text-primary" /> },
        { title: "Escalabilidad", desc: "Diseñamos para que tu empresa crezca sin que el costo operativo te detenga.", icon: <TrendingUp className="text-accent" /> },
        { title: "Simplicidad", desc: "Menos pasos, menos fricción. La tecnología debe simplificar, no complicar.", icon: <ShieldCheck className="text-plasma" /> }
    ];

    return (
        <section id="filosofía" className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] animate-pulse-slow"></div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 tracking-tight">
                            Nuestra <span className="text-primary">filosofía</span> de trabajo
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                            En Opera, creemos que la tecnología no es el fin, sino el vehículo. Nuestro foco no está en el software, sino en la <span className="text-white font-bold">fricción operativa</span> que detiene tu crecimiento.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">diagnóstico basado en datos</h4>
                                    <p className="text-sm text-gray-500">No adivinamos. Medimos cargas de trabajo y detectamos cuellos de botella reales.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                                    <span className="material-symbols-outlined text-accent">integration_instructions</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">implementación ágil</h4>
                                    <p className="text-sm text-gray-500">Soluciones de alto impacto en ciclos cortos de 5 semanas.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="unified-glass p-8 rounded-[40px] border-white/5 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-plasma animate-shimmer"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Team efficiency"
                                className="rounded-3xl w-full aspect-square object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale hover:grayscale-0"
                            />
                            <div className="mt-8 text-center">
                                <p className="text-gray-400 font-display italic">"La eficiencia es el motor oculto de las empresas que dominan su mercado."</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {values.map((v, i) => (
                        <div key={i} className="glass-panel p-10 rounded-3xl border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 group">
                            <div className="mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4 font-display">{v.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-display font-bold text-white mb-12">liderazgo operativo</h3>
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="text-center group">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary/30 group-hover:border-primary transition-all p-1 bg-white/5 backdrop-blur-md">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="CEO" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <h4 className="text-white font-bold">Maori David</h4>
                            <p className="text-primary text-sm font-display uppercase">ceo</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-accent/30 group-hover:border-accent transition-all p-1 bg-white/5 backdrop-blur-md">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="COO" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <h4 className="text-white font-bold">Valeria Gallo</h4>
                            <p className="text-accent text-sm font-display uppercase">coo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
