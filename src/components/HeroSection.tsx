import contact from '../config/contact';

export default function HeroSection() {
  return (
    <section className="hero section" id="home">
      {/* Decorative Orbs */}
      <div className="hero-decoration">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for Projects
          </div>

          <h1>
            Solusi Service{' '}
            <span className="highlight">IT</span> untuk
            <br />
            Anda
          </h1>

          <p>{contact.brand.description}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" id="cta-projects">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Lihat Project
            </a>
            <a href="#services" className="btn btn-secondary" id="cta-services">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="highlight-cards">
          <div className="card highlight-card">
            <div className="highlight-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div>
              <h3>Service Laptop/Komputer</h3>
              <p>Troubleshooting, install software, upgrade hardware, dll</p>
            </div>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div>
              <h3>Instalasi Jaringan</h3>
              <p>Instalasi jaringan LAN, WiFi, dll</p>
            </div>
          </div>

          <div className="card highlight-card">
            <div className="highlight-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div>
              <h3>IT Consulting</h3>
              <p>Konsultasi teknologi untuk solusi IT yang tepat & efisien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
