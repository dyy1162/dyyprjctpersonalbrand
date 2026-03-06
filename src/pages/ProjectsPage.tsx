import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectsSection from '../components/ProjectsSection';

export default function ProjectsPage() {
    useEffect(() => {
        document.title = 'Portfolio Proyek — dyyProject';
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
                        <span>Projects</span>
                    </nav>
                    <h1 className="page-hero-title">Portfolio <span className="text-accent">Proyek</span></h1>
                    <p className="page-hero-subtitle">
                        Rekam jejak pekerjaan nyata yang telah kami selesaikan untuk berbagai klien di Makassar dan sekitarnya.
                    </p>
                </div>
                <div className="page-hero-glow" />
            </div>

            {/* Projects Content */}
            <ProjectsSection />

            {/* CTA */}
            <div className="page-cta-band">
                <div className="container page-cta-inner">
                    <div>
                        <h3>Ada Proyek yang Ingin Dikerjakan?</h3>
                        <p>Konsultasikan kebutuhan IT Anda dengan kami secara gratis.</p>
                    </div>
                    <div className="page-cta-actions">
                        <Link to="/about" className="btn btn-secondary">Tentang Kami</Link>
                        <Link to="/#contact" className="btn btn-primary">Mulai Konsultasi</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
