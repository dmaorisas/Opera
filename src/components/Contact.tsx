import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 px-6 relative z-10 bg-tech-grid bg-opacity-10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">La diferencia no está en hacer más, sino en operar mejor</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Nos comprometemos contigo, porque tus resultados también son los nuestros.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Info Side */}
                    <div className="space-y-10">
                        <h2 className="text-3xl font-display font-bold text-white">conversemos</h2>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail size={24} />, label: "Email", value: "contacto@opera.com", color: "primary" },
                                { icon: <Phone size={24} />, label: "Teléfono", value: "+123 456 7890", color: "accent" },
                                { icon: <MapPin size={24} />, label: "Ubicación", value: "Remoto - Global", color: "primary" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                                    <div className={`p-4 rounded-xl unified-glass border-${item.color}/20 text-${item.color} group-hover:scale-110 transition-transform shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass-panel p-10 rounded-3xl relative overflow-hidden backdrop-blur-xl border-white/5 shadow-2xl">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-plasma animate-shimmer bg-[length:200%_100%]"></div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">nombre</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">mensaje</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white resize-none"
                                    placeholder="¿Cómo podemos ayudarte?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 bg-neon-orange text-white rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-3 neon-aura active:scale-95"
                            >
                                agendar llamada de diagnóstico
                                <span className="material-symbols-outlined">call_made</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
