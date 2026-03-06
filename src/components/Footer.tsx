import { Link } from 'react-router-dom';
import contact from '../config/contact.ts';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-logo">{contact.brand.name}</Link>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <p className="footer-text">
          © {currentYear} {contact.brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
