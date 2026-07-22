import { useState, useEffect } from 'react';
import { X, Zap, ArrowRight } from 'lucide-react';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasBeenShown) {
                setIsVisible(true);
                setHasBeenShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        const timer = setTimeout(() => {
            if (!hasBeenShown) {
                setIsVisible(true);
                setHasBeenShown(true);
            }
        }, 45000);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasBeenShown]);

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 500);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pt-24">
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                onClick={closePopup}
            ></div>
            <div className={`relative w-full max-w-lg bg-gray-100 rounded-2xl p-8 shadow-2xl transition-all duration-500 transform ${isClosing ? 'opacity-0 scale-95 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={closePopup}
                >
                    <X size={24} />
                </button>
                <div className="text-center">
                    <div className="w-16 h-16 bg-neon-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Zap className="text-neon-orange" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">¿Preferís empezar con algo más rápido?</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Llevate una automatización lista para usar desde solo <span className="font-bold text-neon-orange">$49</span>. <br />Sin reuniones, sin implementación compleja.
                    </p>
                    <a
                        href="#servicios"
                        className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-neon-orange text-white font-bold shadow-lg shadow-neon-orange/20 hover:shadow-neon-orange/40 transition-all hover:-translate-y-1"
                        onClick={closePopup}
                    >
                        Ver automatizaciones
                        <ArrowRight size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
