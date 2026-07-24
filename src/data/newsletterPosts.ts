export interface NewsletterIssue {
    id: string;
    issueNumber: string;
    slug: string;
    title: string;
    subtitle: string;
    category: 'IA & Automatización' | 'Eficiencia Operativa' | 'Estrategia Tecnológica';
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    tags: string[];
    highlights: string[];
    featured?: boolean;
    coverGradient: string;
    content: string;
}

export const NEWSLETTER_ISSUES: NewsletterIssue[] = [
    {
        id: '1',
        issueNumber: 'Edición #01',
        slug: 'ia-generativa-en-procesos-de-negocio-2026',
        title: 'IA Generativa en Procesos de Negocio: Tendencias e Impacto Real en 2026',
        subtitle: 'Cómo las organizaciones están pasando de la experimentación con Inteligencia Artificial a la integración profunda en sus flujos operativos diarios.',
        category: 'IA & Automatización',
        author: {
            name: 'David Maori',
            role: 'Fundador & Consultor de Eficiencia',
            avatar: '⚡'
        },
        date: '24 de Julio, 2026',
        readTime: '5 min de lectura',
        tags: ['Inteligencia Artificial', 'Tendencias', 'Transformación Digital'],
        highlights: [
            'De chatbots pasivos a agentes autónomos de flujo',
            'La arquitectura "Human-in-the-Loop" para validación segura',
            'Cómo reducir tiempos de ciclo en un 40% sin rehacer el software'
        ],
        featured: true,
        coverGradient: 'from-primary/40 via-accent/30 to-neon-orange/20',
        content: `
            <p class="text-xl text-gray-300 mb-8 leading-relaxed font-body">
                La Inteligencia Artificial ha dejado de ser una simple herramienta de consulta para convertirse en el tejido conectivo de las operaciones corporativas modernas. En 2026, la diferencia competitiva ya no es usar IA, sino cómo se integra dinámicamente en los procesos del día a día.
            </p>

            <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4">De Chatbots pasivos a Agentes Autónomos de Flujo</h2>
            <p class="text-gray-300 mb-6 leading-relaxed font-body">
                Durante años, la interacción con la IA fue reactiva: el usuario hacía una pregunta y la IA respondía. Hoy presenciamos la transición hacia sistemas de agentes coordinados que ejecutan tareas complejas en segundo plano:
            </p>

            <div class="my-8 p-6 rounded-2xl bg-white/5 border border-primary/30 backdrop-blur-md">
                <h4 class="text-lg font-bold text-primary font-display mb-3">Aplicaciones clave en operaciones:</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-2 font-body">
                    <li><strong class="text-white">Procesamiento multiformato:</strong> Extracción instantánea de datos clave desde contratos, facturas y correos electrónicos hacia sistemas centrales.</li>
                    <li><strong class="text-white">Orquestación de aprobaciones:</strong> Agentes que validan reglas de negocio complejas antes de solicitar firma humana.</li>
                    <li><strong class="text-white">Detección de anomalías:</strong> Monitoreo continuo de variaciones en tiempos de ejecución o costos operativos.</li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4">El Enfoque Híbrido: Humano en el Bucle (Human-in-the-Loop)</h2>
            <p class="text-gray-300 mb-6 leading-relaxed font-body">
                El objetivo de la tecnología no es reemplazar el criterio humano, sino potenciarlo. La IA se encarga del 90% de la carga de trabajo repetitiva y estructuración de datos, permitiendo que el equipo humano se enfoque únicamente en decisiones estratégicas y casos de excepción.
            </p>

            <div class="my-10 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-surface to-accent/20 border border-white/10 text-center">
                <h3 class="text-2xl font-bold font-display text-white mb-3">¿Buscas integrar IA en la operación de tu empresa?</h3>
                <p class="text-gray-300 mb-6 font-body">Analizamos tus procesos actuales y diseñamos la arquitectura ideal para tu negocio.</p>
                <a href="#contacto" class="inline-block bg-neon-orange hover:bg-neon-orange/90 text-white font-bold px-8 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(255,107,0,0.4)] font-display">
                    Agendar diagnóstico estratégico
                </a>
            </div>
        `
    },
    {
        id: '2',
        issueNumber: 'Edición #02',
        slug: 'los-5-errores-mas-comunes-en-digitalizacion-operativa',
        title: 'Los 5 Errores Más Comunes en la Digitalización Operativa (y Cómo Evitarlos)',
        subtitle: 'Identifica las fallas habituales que hacen que los proyectos de optimización tecnológica fallen o se retrasen, y descubre la metodología para garantizar el éxito.',
        category: 'Eficiencia Operativa',
        author: {
            name: 'Equipo Opera',
            role: 'Especialistas en Procesos',
            avatar: '⚙️'
        },
        date: '20 de Julio, 2026',
        readTime: '6 min de lectura',
        tags: ['Optimización', 'Estrategia', 'Procesos', 'Buenas Prácticas'],
        highlights: [
            'Por qué automatizar el caos causa colapsos más rápidos',
            'La trampa del software a medida sobredimensionado',
            'Cómo estructurar entregables funcionales en sprints de 2 semanas'
        ],
        featured: false,
        coverGradient: 'from-accent/40 via-plasma/30 to-primary/20',
        content: `
            <p class="text-xl text-gray-300 mb-8 leading-relaxed font-body">
                Muchos proyectos de transformación digital no fallan por falta de presupuesto o de tecnología, sino por errores conceptuales en la etapa de diseño e implementación.
            </p>

            <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4">Los 5 Tropiezos Frecuentes</h2>

            <div class="space-y-6 my-6">
                <div class="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 class="text-lg font-bold text-accent font-display mb-2">1. Automatizar el caos</h3>
                    <p class="text-gray-300 font-body">Si un proceso manual es ineficiente y confuso, digitalizarlo solo provocará que el error ocurra más rápido. Primero se simplifica, luego se automatiza.</p>
                </div>

                <div class="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 class="text-lg font-bold text-accent font-display mb-2">2. Desarrollo a medida sobredimensionado</h3>
                    <p class="text-gray-300 font-body">Crear sistemas masivos desde cero requiere meses y genera deuda técnica. El enfoque moderno es conectar plataformas consolidadas mediante APIs y capas ligeras de código.</p>
                </div>

                <div class="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 class="text-lg font-bold text-accent font-display mb-2">3. Falta de foco en la adopción del equipo</h3>
                    <p class="text-gray-300 font-body">Una herramienta solo es tan buena como la frecuencia con la que se usa. La capacitación continua y la simplicidad de la interfaz son indispensables.</p>
                </div>

                <div class="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 class="text-lg font-bold text-accent font-display mb-2">4. No medir los tiempos de ciclo pre y post implementación</h3>
                    <p class="text-gray-300 font-body">Sin métricas claras (tiempo de respuesta, tasa de error, costo por transacción), es imposible evaluar objetivamente el retorno de la inversión.</p>
                </div>

                <div class="p-6 rounded-2xl bg-surface border border-white/10">
                    <h3 class="text-lg font-bold text-accent font-display mb-2">5. Intentar resolver todo el negocio en un solo despliegue</h3>
                    <p class="text-gray-300 font-body">Es preferible implementar entregables funcionales en sprints cortos de 2 semanas que esperar un megaproyecto de 8 meses.</p>
                </div>
            </div>

            <div class="my-10 p-8 rounded-2xl bg-gradient-to-r from-accent/20 via-surface to-primary/20 border border-white/10 text-center">
                <h3 class="text-2xl font-bold font-display text-white mb-3">Optimiza tu operación sin los riesgos habituales</h3>
                <p class="text-gray-300 mb-6 font-body">Diseñamos soluciones modulares y escalables para tu empresa.</p>
                <a href="#contacto" class="inline-block bg-neon-orange hover:bg-neon-orange/90 text-white font-bold px-8 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(255,107,0,0.4)] font-display">
                    Solicitar evaluación inicial
                </a>
            </div>
        `
    }
];
