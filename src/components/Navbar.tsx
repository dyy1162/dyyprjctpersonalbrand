import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import contact from '../config/contact.ts';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', to: '/', exact: true },
    { label: 'About', to: '/about', exact: false },
    { label: 'Projects', to: '/projects', exact: false },
    { label: 'Services', to: '/#services', exact: false, isHash: true },
    { label: 'Testimonials', to: '/#testimonials', exact: false, isHash: true },
    { label: 'Contact', to: '/#contact', exact: false, isHash: true },
  ];

  const handleNavClick = () => setMenuOpen(false);

  // Helper: hash links need special handling
  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.href = hash;
    } else {
      const id = hash.replace('/#', '').replace('/', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">{contact.brand.name}</Link>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.isHash ? (
                  <a
                    href={link.to}
                    onClick={(e) => handleHashLink(e, link.to)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.exact}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <button
            className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            id="navbar-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {navLinks.map((link) =>
          link.isHash ? (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleHashLink(e, link.to)}
            >
              {link.label}
            </a>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              onClick={handleNavClick}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
            >
              {link.label}
            </NavLink>
          )
        )}
      </div>
    </>
  );
}
