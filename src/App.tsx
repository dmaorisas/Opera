import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ExitIntentPopup from './components/ExitIntentPopup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './components/Contact';

import NewsletterIndex from './pages/NewsletterIndex';
import NewsletterDetail from './pages/NewsletterDetail';

function App() {
    const [currentRoute, setCurrentRoute] = useState<'home' | 'blog' | 'blog-detail'>('home');
    const [activeSlug, setActiveSlug] = useState<string>('');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#blog/')) {
                const slug = hash.replace('#blog/', '');
                setActiveSlug(slug);
                setCurrentRoute('blog-detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (hash === '#blog') {
                setCurrentRoute('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setCurrentRoute('home');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSelectIssue = (slug: string) => {
        window.location.hash = `#blog/${slug}`;
    };

    const handleBackToNewsletter = () => {
        window.location.hash = '#blog';
    };

    const handleReturnHome = () => {
        window.location.hash = '';
    };

    if (currentRoute === 'blog') {
        return (
            <NewsletterIndex
                onSelectIssue={handleSelectIssue}
                onReturnHome={handleReturnHome}
            />
        );
    }

    if (currentRoute === 'blog-detail') {
        return (
            <NewsletterDetail
                slug={activeSlug}
                onBackToNewsletter={handleBackToNewsletter}
                onSelectIssue={handleSelectIssue}
                onReturnHome={handleReturnHome}
            />
        );
    }

    return (
        <div className="app">
            <ParticleBackground />
            <ExitIntentPopup />
            <Navbar />

            <Home />
            <About />
            <Services />
            <Contact />

            <Footer />
        </div>
    );
}

export default App;
