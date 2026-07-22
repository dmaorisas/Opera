import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-obsidian/30 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-tr from-primary to-accent text-2xl relative z-10">bolt</span>
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                        Operación <span className="font-light text-gray-400 group-hover:text-gray-200">eficiente</span>
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {['beneficios', 'método', 'servicios'].map((item) => (
                        <a
                            key={item}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            href={`#${item}`}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <a
                    className="glass-panel text-white bg-neon-orange/80 hover:bg-neon-orange px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all border border-neon-orange/50 shadow-[0_0_10px_rgba(255,107,0,0.4)] hover:shadow-[0_0_20px_rgba(255,107,0,0.6)] hover:scale-105 active:scale-95 neon-aura inline-flex items-center justify-center"
                    href="#contacto"
                >
                    Agendar diagnóstico
                </a>
            </div>
        </header>
    );
};

export default Navbar;
