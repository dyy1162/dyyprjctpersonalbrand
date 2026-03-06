import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';

export default function AboutPage() {
    useEffect(() => {
        document.title = 'Tentang Kami — dyyProject';
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <main className="page-main">
            {/* Page Hero Banner */}
            <div className="page-hero">
                <div className="container">
                    <nav className="page-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>About</span>
                    </nav>
                    <h1 className="page-hero-title">Tentang <span className="text-accent">dyyProject</span></h1>
                    <p className="page-hero-subtitle">
                        Kenali lebih jauh siapa kami, apa yang kami kerjakan, dan teknologi yang kami kuasai.
                    </p>
                </div>
                <div className="page-hero-glow" />
            </div>

            {/* Section Content */}
            <AboutSection />

            {/* CTA */}
            <div className="page-cta-band">
                <div className="container page-cta-inner">
                    <div>
                        <h3>Siap Berkolaborasi?</h3>
                        <p>Hubungi kami sekarang untuk konsultasi kebutuhan IT Anda.</p>
                    </div>
                    <div className="page-cta-actions">
                        <Link to="/projects" className="btn btn-secondary">Lihat Portfolio</Link>
                        <Link to="/#contact" className="btn btn-primary">Hubungi Kami</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
