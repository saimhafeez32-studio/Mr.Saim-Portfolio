import { useState } from "react";
import { Link } from "react-router-dom";

import ContactModal from "../ContactModal/ContactModal";
import "./Hero.css";

const Hero = () => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">

            <h1>
              Hello, I'm
              <br />
              <span>Saim</span>
            </h1>

            <div className="hero-subtitle">
              <span>Modern Web Developer</span>
              <span>UI/UX Designer</span>
              <span>Graphic Designer</span>
              <span>Digital Marketing Specialist</span>
            </div>

            <div className="hero-buttons">

              <Link
                to="/projects"
                className="primary-btn"
                aria-label="View Projects"
              >
                View Projects
              </Link>

              <button
                type="button"
                className="secondary-btn"
                aria-label="Let's Connect"
                onClick={() => setOpenContact(true)}
              >
                Let's Connect
              </button>

            </div>

          </div>
        </div>
      </section>

      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
};

export default Hero;