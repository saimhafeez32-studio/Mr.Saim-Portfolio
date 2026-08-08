import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import TipsModal from "../TipsModal/TipsModal";
import "./CTA.css";

const CTA = () => {

  const [openContact, setOpenContact] = useState(false);
  const [openTips, setOpenTips] = useState(false);

  return (
    <>
      <section className="cta-section">

        <div className="cta-overlay"></div>

        <div className="container">

          <div className="cta-content">

            <span className="cta-tag">
              READY TO START?
            </span>

            <h2 className="cta-title">
              Not Every Business Becomes a Brand.
              <br />
              <span>Let's Build One That Does.</span>
            </h2>

            <div className="cta-buttons">

              <button
                className="cta-secondary"
                onClick={() => setOpenContact(true)}
              >
                Contact Me
              </button>

            </div>

          </div>

          {/* Bottom Lead Magnet */}

          <div className="cta-download">

            <div className="cta-download-text">

              <h3>
                Want to turn your business into a <span>BRAND?</span>
              </h3>

              <p>
                Download my <strong>5 Proven Tips</strong> that actually work.
              </p>

            </div>

            <button
              className="cta-download-btn"
              onClick={() => setOpenTips(true)}
            >
              Get Tips
            </button>

          </div>

        </div>

      </section>

      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />

      <TipsModal
        open={openTips}
        onClose={() => setOpenTips(false)}
      />

    </>
  );
};

export default CTA;