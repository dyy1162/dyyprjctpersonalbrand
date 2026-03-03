import projects from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  techStack: string[];
  category: string;
  link: string;
}

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Beberapa project terbaik yang telah kami kerjakan untuk klien kami
          </p>
        </div>

        <div className="projects-grid">
          {(projects as Project[]).map((project) => (
            <article key={project.id} className="project-card" id={`project-${project.id}`}>
              <div className="project-thumb-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumb"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-thumb-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                )}
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
