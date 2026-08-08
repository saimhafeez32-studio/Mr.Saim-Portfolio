import { useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";
import "./ContactModal.css";

const ContactModal = ({ open, onClose }) => {

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  // Detect Mobile Device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Email Link
  const emailLink = isMobile
    ? "mailto:growthwithsaim@gmail.com?subject=Project%20Inquiry"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=growthwithsaim@gmail.com&su=Project%20Inquiry";

  return (
    <div className="contact-modal">

      <div
        className="contact-overlay"
        onClick={onClose}
      ></div>

      <div className="contact-card">

        <button
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <span className="contact-tag">
          CONTACT
        </span>

        <h2>
          Let's Build Something Great
        </h2>

        <p>
          How would you like to get in touch?
          <br />
          Choose your preferred method below.
        </p>

        <div className="contact-options">

          <a
            href="https://wa.me/923150751701"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
            onClick={onClose}
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href={emailLink}
            target={isMobile ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="contact-option"
            onClick={onClose}
            aria-label="Contact by Gmail"
          >
            <FaEnvelope />
            <span>Gmail</span>
          </a>

        </div>

      </div>

    </div>
  );
};

export default ContactModal;