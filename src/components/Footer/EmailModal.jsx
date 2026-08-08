import { useEffect } from "react";

const EmailModal = ({ open, onClose }) => {

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

  // Gmail Link
  const emailLink = isMobile
    ? "mailto:growthwithsaim@gmail.com?subject=Project%20Inquiry"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=growthwithsaim@gmail.com&su=Project%20Inquiry";

  return (
    <div className="email-modal">

      <div
        className="email-overlay"
        onClick={onClose}
      ></div>

      <div className="email-card">

        <span className="email-tag">
          CONTACT VIA EMAIL
        </span>

        <h2>
          Let's Build Something Amazing.
        </h2>

        <p>
          Have a project in mind?
          I'd love to hear your ideas.
        </p>

        <div className="email-box">
          growthwithsaim@gmail.com
        </div>

        <a
          href={emailLink}
          target={isMobile ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="email-btn"
          onClick={onClose}
        >
          Open Gmail
        </a>

        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>
  );
};

export default EmailModal;