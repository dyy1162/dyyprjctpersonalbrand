import contact from '../config/contact.ts';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        <span className="footer-logo">{contact.brand.name}</span>

        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p className="footer-text">
          © {currentYear} {contact.brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
