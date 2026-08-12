import { useState, memo } from "react";

import ContactModal from "../ContactModal/ContactModal";

import "./Hero.css";

const Hero = () => {
  const [openContact, setOpenContact] = useState(false);

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  return (
    <>
      {/* ===================================
          HERO SECTION
      =================================== */}

      <section className="hero" aria-labelledby="hero-title">

        {/* Background Overlay */}
        <div
          className="hero-overlay"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="hero-container">

          <div className="hero-content">

            {/* Main Heading */}
            <h1 id="hero-title">
              Hello I'm
              <br />
              <span>Saim.</span>
            </h1>

            {/* Subtitle */}
            <div
              className="hero-subtitle"
              aria-label="Professional skills"
            >
              <span>Modern Web Developer</span>
              <span>UI/UX Designer</span>
              <span>Graphic Designer</span>
              <span>Digital Marketing Specialist</span>
            </div>

            {/* CTA */}
            <div className="hero-buttons">

              <button
                type="button"
                className="secondary-btn"
                onClick={handleOpenContact}
                aria-label="Open contact information"
              >
                Let's Connect
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================
          CONTACT MODAL
      =================================== */}

      <ContactModal
        open={openContact}
        onClose={handleCloseContact}
      />
    </>
  );
};

/*
  Prevent unnecessary re-renders when
  parent components update without changing
  Hero's props.
*/
export default memo(Hero);