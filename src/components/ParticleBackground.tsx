import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let currentY = 0;
        let currentVel = 0;
        let lastScrollTop = window.scrollY;
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX / window.innerWidth - 0.5) * 40;
            targetMouseY = (e.clientY / window.innerHeight - 0.5) * 40;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const loop = () => {
            const scrollTop = window.scrollY;
            const scrollVel = scrollTop - lastScrollTop;
            lastScrollTop = scrollTop;

            currentVel += (scrollVel - currentVel) * 0.08;
            currentY += currentVel * 2;

            const height = window.innerHeight;
            const offset = ((currentY % height) + height) % height;
            const stretch = Math.min(Math.abs(currentVel) * 0.05, 3);
            const scaleY = 1 + stretch;

            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            if (container) {
                container.style.transform = `translate3d(${mouseX}px, ${-offset + mouseY}px, 0) scaleY(${scaleY})`;
            }

            requestAnimationFrame(loop);
        };

        const animationId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div className="liquid-background">
                <div className="liquid-blob w-[60vw] h-[60vw] top-[-10%] left-[-10%] bg-primary opacity-[0.15]" style={{ animationDuration: '25s' }}></div>
                <div className="liquid-blob w-[50vw] h-[50vw] top-[20%] right-[-15%] bg-accent opacity-[0.1]" style={{ animationDuration: '30s', animationDelay: '-5s' }}></div>
                <div className="liquid-blob w-[55vw] h-[55vw] top-[50%] left-[-10%] bg-plasma opacity-[0.1]" style={{ animationDuration: '28s', animationDelay: '-10s' }}></div>
                <div className="liquid-blob w-[70vw] h-[70vw] bottom-[-20%] right-[10%] bg-primary opacity-[0.12]" style={{ animationDuration: '35s', animationDelay: '-2s' }}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div ref={containerRef} className="particles-container">
                {/* Dynamic Static Particles from reference */}
                <div className="data-particle w-1 h-1 top-[10%] left-[10%] opacity-50 animate-drift-1"></div>
                <div className="data-particle w-1.5 h-1.5 top-[15%] left-[80%] bg-primary opacity-40 animate-drift-2"></div>
                <div className="data-particle w-1 h-1 top-[25%] left-[20%] bg-accent opacity-30 animate-drift-3"></div>
                <div className="data-particle w-2 h-2 top-[35%] left-[90%] opacity-20 animate-drift-1"></div>
                <div className="data-particle hex top-[12%] left-[60%] animate-float-delayed"></div>
                <div className="data-particle hex top-[32%] left-[10%] animate-float-slow"></div>
                <div className="data-particle cross top-[8%] right-[15%] opacity-30 animate-spin"></div>
                <div className="data-particle cross top-[40%] right-[40%] opacity-20 animate-pulse"></div>
                {/* Add more for density */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="data-particle w-[0.5px] h-[0.5px] bg-white absolute opacity-20"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 2}s infinite`
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default ParticleBackground;
