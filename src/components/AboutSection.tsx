export default function AboutSection() {
  const techStack = [
    { name: 'Microsoft', abbr: 'Ms' },
    { name: 'Lenovo Support', abbr: 'Ls' },
    { name: 'Acer Support', abbr: 'As' },
    { name: 'HP Support', abbr: 'HP' },
    { name: 'Asus Support', abbr: 'As' },
    { name: 'Winbox', abbr: 'Wb' },
    { name: 'Starlink', abbr: 'St' },
    { name: 'Dahua', abbr: 'Dh' },
    { name: 'Hikvision', abbr: 'Hk' },
    { name: 'Ruijie', abbr: 'Rj' },
    { name: 'Adobe Photoshop  ', abbr: 'PS' },
    { name: 'Adobe Premiere Pro', abbr: 'PR' },
    { name: 'Adobe After Effect', abbr: 'AE' },
    { name: 'Adobe Illustrator', abbr: 'Ai' },
    { name: 'PostgreSQL', abbr: 'PG' },
    { name: 'MongoDB', abbr: 'MG' },
    { name: 'Tailwind', abbr: 'TW' },
    { name: 'Docker', abbr: 'Dk' },
    { name: 'Git', abbr: 'Gt' },
    { name: 'Node JS', abbr: 'Nj' },
    { name: 'Figma', abbr: 'Fg' },
  ];

  const skills = [
    'Hardware & Instalasi', 'BlueScreen', 'Install Ulang', 'Recovery', 'Windows', 'Linux',
    'Troubleshooting', 'Computer & Laptop',
    'Upgrade',
    'Instalasi Jaringan', 'Access Door', 'CCTV', 'Server', 'Web/Apps Development',
    'Desain Grafis', 'Video Editing', 'Motion Graphics'
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Siapa Kami</h2>
          <p className="section-subtitle">
            "IT Support sana sini"
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Text & Skills */}
          <div className="about-text">
            <p>
              <strong style={{ color: 'var(--accent)' }}>dyyProject</strong> dibentuk sebagai layanan IT Service yang mampu menjangkau pelaku usaha dan pelajar agar memudahkan mereka dalam kebutuhan dan solusi yang tepat untuk keperluan IT mulai dari hardware dan instalasi. Dengan pengalaman dalam troubleshooting, upgrade, dan instalasi jaringan, kami siap menjadi partner IT Anda baik untuk kebutuhan personal, usaha umkm, perusahaan dan instansi pemerintahan.
            </p>
            <p>
              Kami hadir untuk meberikan Solusi IT yang cepat, tepat dan terpercaya.
            </p>
            <p>
              Kami telah bekerja sama dengan Service Centre Point dan Hub IT Store untuk memberikan layanan dan produk yang terbaik.
            </p>

            <div className="about-skills">
              <h3>Layanan Kami</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-lg)', color: 'var(--accent)' }}>
              Perangkat & Aplikasi yang Kami Gunakan
            </h3>
            <div className="tech-stack-grid">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-item">
                  <div className="tech-icon">{tech.abbr}</div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
