import { motion } from 'framer-motion';
import { Settings, Cpu, Zap, ShoppingCart, ArrowRight } from 'lucide-react';

const Services = () => {
    const products = [
        {
            title: "Expense Desk",
            desc: "Asistente financiero que centraliza y ordena tus gastos para darte visibilidad y un registro listo para control y seguimiento.",
            price: "$399",
            icon: <Settings className="text-primary" size={32} />,
            color: "primary"
        },
        {
            title: "Clip Factory",
            desc: "Con ese editor de video convierte contenido largo en clips listos para publicar, para mantener consistencia y aumentar producción sin ampliar equipo.",
            price: "$679",
            icon: <Cpu className="text-accent" size={32} />,
            color: "accent"
        },
        {
            title: "Nutrición Pro",
            desc: "Un asesor especializado en fitness que define un plan de alimentación personalizado y accionable, alineado a tus objetivos para avanzar con claridad y constancia.",
            price: "$679",
            icon: <Zap className="text-plasma" size={32} />,
            color: "plasma"
        },
        {
            title: "News Pro",
            desc: "Un asistente que filtra y resume lo más relevante de tus temas de interés para que te mantengas informado pero sin ruido ni exceso de información.",
            price: "$399",
            icon: <Settings className="text-white" size={32} />,
            color: "white"
        },
        {
            title: "Calendar Desk",
            desc: "Un asistente que mantiene tu calendario ordenado y actualizado para proteger tu tiempo y reducir fricciones de coordinación.",
            price: "$399",
            icon: <Cpu className="text-accent" size={32} />,
            color: "accent"
        },
        {
            title: "Video Studio",
            desc: "Genera videos promocionales con IA coherentes con tu marca para lanzar campañas más rápido y probar mensajes con agilidad.",
            price: "$679",
            icon: <Zap className="text-plasma" size={32} />,
            color: "plasma"
        }
    ];

    return (
        <section id="servicios" className="py-24 px-6 relative z-10 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
                        Diseñamos e implementamos soluciones tecnológicas que ayuden a las empresas a tener operaciones eficientes, predecibles, fluidas y enfocadas en generar valor.
                    </p>
                    <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Servicios</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">Consultoría e implementación de soluciones de eficiencia</h2>
                </div>

                <div className="text-center mb-12">
                    <h3 className="text-2xl font-display text-white mb-2">Eficiencia operativa implementada, con automatizaciones listas para usar</h3>
                    <p className="text-gray-500">Eficiencia operativa implementada con soluciones prediseñadas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <div key={i} className="group unified-glass p-8 rounded-3xl flex flex-col relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05]">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                                {product.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-display">{product.title}</h3>
                            <div className="text-2xl font-bold text-neon-orange mb-4">{product.price}</div>
                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">{product.desc}</p>

                            <button className="w-full py-4 rounded-xl bg-neon-orange/80 text-white font-bold hover:bg-neon-orange transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-neon-orange/20">
                                Comprar ahora
                                <ShoppingCart size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
