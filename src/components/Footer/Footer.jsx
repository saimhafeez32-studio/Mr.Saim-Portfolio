import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

import EmailModal from "./EmailModal";
import "./Footer.css";

const Footer = () => {
  const [openEmail, setOpenEmail] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">

            {/* Logo */}

            <h2 className="footer-logo">
              Mr.Saim
            </h2>

            {/* Description */}

            <p className="footer-description">
              Creating premium digital experiences that help businesses
              build trust, attract more customers, and grow with confidence.
            </p>

            {/* Main CTA */}

            <h3 className="footer-title">
              Every Successful Brand Starts With
              <br />
              One Great Decision.
              <br />
              <span>Make Yours Today.</span>
            </h3>

            {/* Navigation */}

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Contact Text */}

            <p className="footer-contact-title">
              Ready to discuss your next project?
            </p>

            {/* Contact Icons */}

            <div className="footer-social">

              <a
                href="https://wa.me/923150751701"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <button
                type="button"
                onClick={() => setOpenEmail(true)}
                aria-label="Open Email"
                title="Email"
              >
                <FaEnvelope />
              </button>

            </div>

            {/* Copyright */}

            <p className="footer-copy">
              © 2026 Mr.Saim. Crafted with Precision & Passion.
            </p>

          </div>
        </div>
      </footer>

      <EmailModal
        open={openEmail}
        onClose={() => setOpenEmail(false)}
      />
    </>
  );
};

export default Footer;