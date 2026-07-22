import { motion } from 'framer-motion';

const Home = () => {
    const carouselPhrases = ["Optimiza", "Digitaliza", "Automatiza", "Transforma"];

    const operationalBenefits = [
        {
            title: "Actividades de valor",
            problem: "El equipo invierte tiempo en ejecución y seguimiento manual, dejando poco espacio para mejorar resultados.",
            solveTitle: "Ingesta automática",
            solution: "El tiempo se dedica a decidir, optimizar y crecer. La operación no lo consume.",
            icon: "content_paste_off",
            solveIcon: "auto_fix_high",
            color: "primary"
        },
        {
            title: "Más velocidad",
            problem: "El trabajo se frena por aprobaciones, retrabajo y esperas entre etapas.",
            solveTitle: "Flujos instantáneos",
            solution: "El flujo es simple y predecible. Baja el tiempo de ciclo y se ejecuta más rápido.",
            icon: "hourglass_disabled",
            solveIcon: "rocket_launch",
            color: "accent"
        },
        {
            title: "Calidad",
            problem: "La falta de controles provoca retrabajo, inconsistencias y pérdida de confianza del cliente.",
            solveTitle: "Claridad total",
            solution: "La calidad se asegura desde el proceso. Los resultados son consistentes y el retrabajo es mínimo.",
            icon: "visibility_off",
            solveIcon: "monitoring",
            color: "plasma"
        },
        {
            title: "Estabilidad operativa",
            problem: "La operación depende de personas clave y el desempeño varía según quién ejecute.",
            solveTitle: "Ingesta automática",
            solution: "El proceso es estándar y robusto. Funciona con continuidad, sin depender de una persona.",
            icon: "content_paste_off",
            solveIcon: "auto_fix_high",
            color: "primary"
        },
        {
            title: "Fluidez",
            problem: "La coordinación interna ralentiza el avance y obliga a destrabar bloqueos constantemente.",
            solveTitle: "Flujos instantáneos",
            solution: "Los roles y estados son claros. El trabajo avanza sin interrupciones innecesarias.",
            icon: "hourglass_disabled",
            solveIcon: "rocket_launch",
            color: "accent"
        },
        {
            title: "Control",
            problem: "Se opera de forma reactiva, con prioridades poco claras y baja visibilidad.",
            solveTitle: "Claridad total",
            solution: "Métricas y seguimiento sostienen prioridades claras y una ejecución consistente.",
            icon: "visibility_off",
            solveIcon: "monitoring",
            color: "plasma"
        }
    ];

    const methodItems = [
        { title: "Optimización", desc: "de los procesos que tienen potencial de mejora.", icon: "settings_suggest" },
        { title: "Priorización", desc: "de aquellos que tienen mayor retorno de impacto.", icon: "star" },
        { title: "Ejecución", desc: "diseño e implementación de la solución personalizada.", icon: "bolt" },
        { title: "Revisión", desc: "análisis del desempeño de la implementación y mejoramientos necesarios.", icon: "analytics" },
        { title: "Acompañamiento", desc: "a los equipos para que usen correctamente la solución y las herramientas vinculadas a ella.", icon: "handshake" },
    ];

    const timeline = [
        { week: "01", title: "Diagnóstico profundo", desc: "Entrevistas con el equipo, mapeo de procesos actuales y detección de fugas de dinero.", icon: "search", color: "primary" },
        { week: "02", title: "Diseño de solución", desc: "Presentación del nuevo mapa operativo y selección del stack tecnológico ideal.", icon: "draw", color: "accent" },
        { week: "03", title: "Construcción", desc: "Configuración de software, integración de APIs y desarrollo de automatizaciones.", icon: "construction", color: "plasma" },
        { week: "04", title: "Capacitación", desc: "Talleres en vivo para asegurar que tu equipo domine las nuevas herramientas.", icon: "school", color: "white" },
        { week: "05", title: "Lanzamiento", desc: "Despliegue total, monitoreo de errores y entrega de documentación.", icon: "rocket", color: "green-400" },
    ];

    return (
        <main className="relative z-10">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest font-display">Fluid v2.1 + ai grid</span>
                    </div>

                    <p className="text-xl md:text-2xl text-white font-medium font-display tracking-wide mb-12 opacity-0 animate-reveal-up" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.2)', animationDelay: '0.2s' }}>
                        Ayudamos a empresas a aumentar su eficiencia operativa
                    </p>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 relative w-full text-center mx-auto max-w-[95vw]">
                        <div className="block transition-all duration-1000 ease-in-out py-1 md:py-2">
                            <span className="block animate-carousel opacity-20 scale-90 blur-[2px] text-gray-600 whitespace-nowrap" style={{ animationDelay: '0s' }}>Digitaliza</span>
                        </div>
                        <div className="block transition-all duration-1000 ease-in-out py-1 md:py-2 -mt-2 md:-mt-6">
                            <span className="block animate-carousel opacity-20 scale-90 blur-[2px] text-gray-600 whitespace-nowrap" style={{ animationDelay: '2.5s' }}>Optimiza</span>
                        </div>
                        <div className="block transition-all duration-1000 ease-in-out py-1 md:py-2 -mt-2 md:-mt-6">
                            <span className="block animate-carousel opacity-20 scale-90 blur-[2px] text-gray-600 whitespace-nowrap" style={{ animationDelay: '5s' }}>Automatiza</span>
                        </div>
                    </h1>

                    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block text-white mt-4 italic font-light tracking-widest text-center">..... tus operaciones</span>

                    <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-gray-400 font-light leading-relaxed opacity-0 animate-[reveal-up_1s_ease-out_0.6s_forwards]">
                        Transforma el presupuesto operativo en crecimiento estructurado con automatizaciones e IA de última generación.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="w-full sm:w-auto neon-aura bg-neon-orange text-white px-8 py-4 rounded-full font-bold text-lg flex justify-center items-center gap-2 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,107,0,0.4)]">
                            Agendar diagnóstico
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 backdrop-blur-sm flex justify-center items-center gap-2">
                            <span className="material-symbols-outlined text-accent">play_circle</span>
                            ver servicios
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 relative z-10" id="beneficios">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Así se ve la eficiencia operativa</h2>
                        <p className="text-gray-400">Pasa el cursor sobre las tarjetas para descubrir la transformación</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operationalBenefits.map((benefit, i) => (
                            <div key={i} className="group perspective-1000 w-full h-[400px] cursor-pointer">
                                <div className="relative w-full h-full text-center transition-all duration-700 preserve-3d group-hover:rotate-y-180 shadow-2xl rounded-2xl">
                                    {/* Front Side - Red Side */}
                                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-red-500/10 to-surface/90 border border-red-500/20 p-8 rounded-2xl flex flex-col items-center justify-center gap-6">
                                        <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-red-500 text-3xl">{benefit.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-display mb-2">{benefit.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.problem}</p>
                                        </div>
                                        <span className="text-xs text-red-400 uppercase tracking-widest mt-4 border border-red-500/30 px-3 py-1 rounded-full">El problema</span>
                                    </div>
                                    {/* Back Side - Solution Side */}
                                    <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-${benefit.color === 'white' ? 'white' : benefit.color}/20 via-surface/90 to-surface/90 border border-${benefit.color === 'white' ? 'white' : benefit.color}/30 p-8 rounded-2xl flex flex-col items-center justify-center gap-6 overflow-hidden backdrop-blur-xl`}>
                                        <div className={`w-16 h-16 rounded-xl bg-${benefit.color === 'white' ? 'white' : benefit.color}/10 flex items-center justify-center border border-${benefit.color === 'white' ? 'white' : benefit.color}/50 relative z-10`}>
                                            <span className={`material-symbols-outlined text-${benefit.color === 'white' ? 'white' : benefit.color} text-3xl`}>{benefit.solveIcon}</span>
                                        </div>
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold text-white font-display mb-2">{benefit.solveTitle}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{benefit.solution}</p>
                                        </div>
                                        <span className={`text-xs text-${benefit.color === 'white' ? 'white' : benefit.color} uppercase tracking-widest mt-4 font-bold relative z-10 border border-${benefit.color === 'white' ? 'white' : benefit.color}/50 px-3 py-1 rounded-full bg-${benefit.color === 'white' ? 'white' : benefit.color}/10`}>La solución</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Method Opera Section */}
            <section className="py-24 relative z-10 bg-white/5" id="método">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Método Opera</h2>
                    <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Todo lo necesario en una solución de eficiencia que genera resultados</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {methodItems.map((item, i) => (
                            <div key={i} className="unified-glass p-6 rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:border-primary">
                                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                </div>
                                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 overflow-hidden relative" id="método-timeline">
                <div className="container mx-auto px-4 mb-10 relative z-20 flex justify-between items-end">
                    <div>
                        <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">Método Opera</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2">Resultados</h2>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="absolute top-[40%] left-0 w-full h-[2px] bg-white/5 z-0 block">
                        <div className="timeline-beam-active w-full animate-beam-progress"></div>
                    </div>

                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-16 pt-8 px-4 md:px-[max(1rem,calc((100vw-80rem)/2))] hide-scrollbar relative z-10">
                        {timeline.map((step, i) => (
                            <div key={i} className="snap-center shrink-0 w-[300px] md:w-[350px] p-8 rounded-3xl unified-glass flex flex-col justify-between relative group hover:border-primary transition-all duration-500 hover:-translate-y-2 animate-card-pop-sequence" style={{ animationDelay: `${i * 3}s` }}>
                                <div className={`absolute -top-4 left-8 bg-obsidian px-4 py-1 border border-${step.color}/50 rounded-full text-${step.color} text-xs font-bold uppercase tracking-wider z-20`}>Semana {step.week} — {step.title}</div>
                                <div>
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-all duration-500">
                                        <span className="material-symbols-outlined">{step.icon}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-12 text-center text-xl text-gray-300 font-light italic max-w-3xl">
                    "Nos aseguramos de darte los mayores resultados con la menor inversión de tiempo y esfuerzo posible de tu parte"
                </div>
            </section>

            {/* Final Quote Section */}
            <section className="py-32 px-6 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-bold italic mb-8 max-w-4xl mx-auto leading-tight text-white">
                        "La diferencia no está en hacer más, sino en <span className="text-primary">operar mejor</span>"
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </section>
        </main>
    );
};

export default Home;
