import React from 'react';
import "../styles/Footer.css";
// If you're using React Router for internal links
// import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", label: "Facebook", iconClass: "fa-facebook" },
    { href: "#", label: "Twitter", iconClass: "fa-x-twitter" },
    { href: "#", label: "Mastodon", iconClass: "fa-mastodon" },
    { href: "#", label: "Instagram", iconClass: "fa-instagram" },
  ];

  const footerLinks = [
    { href: "#", text: "Site Home" },
    { href: "#", text: "Playground" },
    { href: "#", text: "About" },
    { href: "#", text: "Sitemap" },
    { href: "#", text: "Contents" },
  ];

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
      {/* Social Media Links */}
      <div className="footer__social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        {socialLinks.map(({ href, label, iconClass }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__social-link ${iconClass}`}
          >
            <i className={`fa-brands ${iconClass}`} />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>

      <hr className="footer__break" />

      {/* Footer Links */}
      <ul className="footer__links" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Footer Links</h3>
        {footerLinks.map(({ href, text }) => (
          <li key={text}>
            {/* Use <Link> if it's an internal route */}
            {/* <Link to={href}>{text}</Link> */}
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="footer__copyright">
        © {currentYear} SDavidPrince. Demo of a footer. Some Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
