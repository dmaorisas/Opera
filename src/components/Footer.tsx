const Footer = () => {
    return (
        <footer className="py-12 glass border-0 border-t border-solid border-border mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <a href="#inicio" className="text-2xl font-bold gradient-text mb-4 inline-block">
                        OPERA
                    </a>
                    <p className="text-text-muted max-w-sm">
                        Diseñamos e implementamos soluciones tecnológicas para que las empresas operen con eficiencia, velocidad y previsibilidad.
                    </p>
                </div>

                <div>
                    <h4 className="text-text font-bold mb-6">Empresa</h4>
                    <ul className="space-y-4 list-none p-0">
                        <li><a href="#nosotros" className="text-text-muted hover:text-text transition-colors">Nosotros</a></li>
                        <li><a href="#servicios" className="text-text-muted hover:text-text transition-colors">Servicios</a></li>
                        <li><a href="#contacto" className="text-text-muted hover:text-text transition-colors">Contacto</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-text font-bold mb-6">Legal</h4>
                    <ul className="space-y-4 list-none p-0">
                        <li><a href="#" className="text-text-muted hover:text-text transition-colors">Privacidad</a></li>
                        <li><a href="#" className="text-text-muted hover:text-text transition-colors">Términos</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 pt-8 border-0 border-t border-solid border-border text-center text-text-muted text-sm">
                <p>© {new Date().getFullYear()} Opera. Todos los derechos reservados.</p>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { 
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
        }
        .gap-12 { gap: 3rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-12 { margin-top: 3rem; }
        .mt-20 { margin-top: 5rem; }
        .pt-8 { padding-top: 2rem; }
        .inline-block { display: inline-block; }
        .text-center { text-align: center; }
        .list-none { list-style: none; }
      `}} />
        </footer>
    );
};

export default Footer;
