import { useState, useMemo } from 'react';
import projects from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  techStack: string[];
  category: string;
  client: string;
  year: string;
  status: string;
  featured: boolean;
  link: string;
}

const ALL_CATEGORIES = ['Semua', 'Instalasi', 'Service', 'Maintenance', 'Web App'];

const STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  Selesai: { bg: 'rgba(34,197,94,0.12)', text: '#22c55e', dot: '#22c55e' },
  Ongoing: { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', dot: '#fbbf24' },
  Development: { bg: 'rgba(6,182,212,0.12)', text: '#06b6d4', dot: '#06b6d4' },
};

const CATEGORY_ICONS: Record<string, string> = {
  Instalasi: '🔧',
  Service: '💻',
  Maintenance: '🛠️',
  'Web App': '🌐',
};

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const status = STATUS_COLORS[project.status] ?? STATUS_COLORS['Selesai'];

  if (featured) {
    return (
      <article className="proj-featured-card" id={`project-${project.id}`}>
        {/* Thumbnail */}
        <div className="proj-featured-thumb">
          {project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" />
          ) : (
            <div className="proj-thumb-placeholder">
              <span className="proj-category-icon">{CATEGORY_ICONS[project.category] ?? '📁'}</span>
            </div>
          )}
          <div className="proj-featured-overlay" />
          <span className="proj-featured-badge">⭐ Featured</span>
          <span className="proj-cat-tag">{project.category}</span>
        </div>

        {/* Info */}
        <div className="proj-featured-info">
          <div className="proj-meta-row">
            <span className="proj-year">📅 {project.year}</span>
            <span
              className="proj-status-pill"
              style={{ background: status.bg, color: status.text }}
            >
              <span className="proj-status-dot" style={{ background: status.dot }} />
              {project.status}
            </span>
          </div>

          <h3 className="proj-featured-title">{project.title}</h3>
          <p className="proj-client">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            {project.client}
          </p>
          <p className="proj-desc">{project.description}</p>

          <div className="proj-tech-row">
            {project.techStack.map((tech) => (
              <span key={tech} className="badge">{tech}</span>
            ))}
          </div>

          {project.link !== '#' && (
            <a href={project.link} className="btn btn-primary proj-btn" target="_blank" rel="noopener noreferrer">
              Lihat Detail
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="proj-card" id={`project-${project.id}`}>
      <div className="proj-card-thumb">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" className="proj-thumb-img" />
        ) : (
          <div className="proj-thumb-placeholder-sm">
            <span>{CATEGORY_ICONS[project.category] ?? '📁'}</span>
          </div>
        )}
        <span className="proj-cat-tag">{project.category}</span>
      </div>

      <div className="proj-card-body">
        <div className="proj-meta-row">
          <span className="proj-year">📅 {project.year}</span>
          <span
            className="proj-status-pill"
            style={{ background: status.bg, color: status.text }}
          >
            <span className="proj-status-dot" style={{ background: status.dot }} />
            {project.status}
          </span>
        </div>

        <h3 className="proj-card-title">{project.title}</h3>
        <p className="proj-client">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          {project.client}
        </p>
        <p className="proj-card-desc">{project.description}</p>

        <div className="proj-tech-row">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
          {project.techStack.length > 3 && (
            <span className="badge proj-badge-more">+{project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const typedProjects = projects as Project[];

  const stats = useMemo(() => ({
    total: typedProjects.length,
    selesai: typedProjects.filter((p) => p.status === 'Selesai').length,
    clients: new Set(typedProjects.map((p) => p.client)).size,
    categories: new Set(typedProjects.map((p) => p.category)).size,
  }), [typedProjects]);

  const featuredProjects = useMemo(
    () => typedProjects.filter((p) => p.featured),
    [typedProjects]
  );

  const filteredProjects = useMemo(() => {
    const nonFeatured = typedProjects.filter((p) => !p.featured);
    if (activeFilter === 'Semua') return nonFeatured;
    return nonFeatured.filter((p) => p.category === activeFilter);
  }, [typedProjects, activeFilter]);

  return (
    <section className="section" id="projects">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="section-header">
          <div className="proj-eyebrow">
            <span className="proj-eyebrow-dot" />
            Portfolio Proyek
          </div>
          <h2 className="section-title">Project yang Pernah Dikerjakan</h2>
          <p className="section-subtitle">
            Rekam jejak proyek nyata dari berbagai klien — mulai dari instalasi infrastruktur IT, service perangkat, hingga pengembangan aplikasi.
          </p>
        </div>

        {/* ── Stats Bar ── */}
        <div className="proj-stats-bar">
          <div className="proj-stat-item">
            <span className="proj-stat-number">{stats.total}+</span>
            <span className="proj-stat-label">Total Proyek</span>
          </div>
          <div className="proj-stat-divider" />
          <div className="proj-stat-item">
            <span className="proj-stat-number">{stats.selesai}</span>
            <span className="proj-stat-label">Selesai</span>
          </div>
          <div className="proj-stat-divider" />
          <div className="proj-stat-item">
            <span className="proj-stat-number">{stats.clients}</span>
            <span className="proj-stat-label">Klien</span>
          </div>
          <div className="proj-stat-divider" />
          <div className="proj-stat-item">
            <span className="proj-stat-number">{stats.categories}</span>
            <span className="proj-stat-label">Kategori</span>
          </div>
        </div>

        {/* ── Featured Projects ── */}
        <div className="proj-featured-section">
          <h3 className="proj-subsection-title">
            <span className="proj-subsection-accent"></span> Featured Projects
          </h3>
          <div className="proj-featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* ── All Projects ── */}
        <div className="proj-all-section">
          <div className="proj-all-header">
            <h3 className="proj-subsection-title">Semua Proyek</h3>
            {/* Filter Tabs */}
            <div className="proj-filter-tabs" role="tablist" aria-label="Filter kategori proyek">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeFilter === cat}
                  className={`proj-filter-btn${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat !== 'Semua' && <span>{CATEGORY_ICONS[cat]}</span>}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="proj-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="proj-empty">
              <span>🔍</span>
              <p>Tidak ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
