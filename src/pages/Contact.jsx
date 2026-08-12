import "./Contact.css";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const skills = [
    "Web Development",
    "UI / UX Design",
    "Frontend Engineering",
    "Graphic Design",
    "Digital Marketing",
    "Branding & Creative Design",
    "Responsive Websites",
    "Performance Optimization",
  ];

  return (
    <main className="contact-page">

      {/* =================================
          CONTACT MAIN SECTION
      ================================= */}

      <section className="contact-main">

        <div className="contact-container">

          {/* =================================
              LEFT — PERSONAL INFORMATION
          ================================= */}

          <div className="contact-profile">

            <div className="contact-logo">
              Mr.<span>Saim</span>
            </div>

            <div className="contact-profile-tag">
              LET'S WORK TOGETHER
            </div>

            <h1 className="contact-title">
              Let’s create
              <br />
              something <span>meaningful.</span>
            </h1>

            <p className="contact-description">
              I create premium digital experiences that combine
              thoughtful design, modern technology and a strong
              focus on performance.
            </p>

            {/* Personal Information */}

            <div className="contact-info-list">

              {/* WhatsApp */}

              <a
                href="https://wa.me/923150751701"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <MessageCircle size={21} strokeWidth={1.8} />
                </div>

                <div className="contact-info-content">
                  <span>WHATSAPP</span>
                  <strong>+92 315 0751701</strong>
                </div>

                <ArrowUpRight
                  className="contact-info-arrow"
                  size={19}
                />
              </a>

              {/* Email */}

              <a
                href="mailto:growthwithsaim@gmail.com"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <Mail size={21} strokeWidth={1.8} />
                </div>

                <div className="contact-info-content">
                  <span>EMAIL</span>
                  <strong>growthwithsaim@gmail.com</strong>
                </div>

                <ArrowUpRight
                  className="contact-info-arrow"
                  size={19}
                />
              </a>

              {/* Location */}

              <div className="contact-info-item contact-location">

                <div className="contact-info-icon">
                  <MapPin size={21} strokeWidth={1.8} />
                </div>

                <div className="contact-info-content">
                  <span>LOCATION</span>
                  <strong>Toba Tek Singh, Punjab</strong>
                </div>

              </div>

            </div>

          </div>


          {/* =================================
              RIGHT — WHAT WE BUILD
          ================================= */}

          <div className="contact-build">

            <div className="contact-build-header">

              <span className="contact-section-tag">
                EXPERTISE
              </span>

              <h2>
                What I <span>build.</span>
              </h2>

              <p>
                Digital solutions designed with clarity,
                precision and a premium visual experience.
              </p>

            </div>


            {/* Skills */}

            <div className="contact-skills">

              {skills.map((skill, index) => (
                <div
                  className="contact-skill"
                  key={skill}
                >

                  <div className="contact-skill-check">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                    />
                  </div>

                  <span>{skill}</span>

                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                </div>
              ))}

            </div>


            {/* Small CTA */}

            <div className="contact-build-footer">

              <span>
                Available for selected projects
              </span>

              <ArrowDown size={18} />

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          INSTRUCTIONS SECTION
      ================================= */}

      <section className="contact-instructions">

        <div className="contact-instructions-container">

          <div className="contact-instructions-heading">

            <span className="contact-section-tag dark-tag">
              HOW TO START
            </span>

            <h2>
              Simple process.
              <br />
              <span>Clear communication.</span>
            </h2>

          </div>


          {/* Black Laptop Screen */}

          <div className="instruction-screen">

            {/* Screen Top */}

            <div className="instruction-screen-top">

              <div className="instruction-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="instruction-screen-title">
                MR.SAIM / PROJECT BRIEF
              </div>

              <div className="instruction-screen-number">
                01 — 04
              </div>

            </div>


            {/* Screen Content */}

            <div className="instruction-content">

              <div className="instruction-number">
                01
              </div>

              <div className="instruction-text">

                <h3>
                  Tell me about your idea.
                </h3>

                <p>
                  Send a short message explaining what you
                  want to build, improve or design. You don't
                  need a technical explanation — just tell me
                  what you have in mind.
                </p>

              </div>

            </div>


            <div className="instruction-content">

              <div className="instruction-number">
                02
              </div>

              <div className="instruction-text">

                <h3>
                  Share your requirements.
                </h3>

                <p>
                  Mention the type of website, design or digital
                  solution you need, along with any important
                  features, references or goals.
                </p>

              </div>

            </div>


            <div className="instruction-content">

              <div className="instruction-number">
                03
              </div>

              <div className="instruction-text">

                <h3>
                  We discuss the direction.
                </h3>

                <p>
                  I'll review your idea, understand your goals
                  and suggest the right creative and technical
                  direction for the project.
                </p>

              </div>

            </div>


            <div className="instruction-content last">

              <div className="instruction-number">
                04
              </div>

              <div className="instruction-text">

                <h3>
                  Let's build something great.
                </h3>

                <p>
                  Once everything is clear, we move forward
                  with a focused plan and start turning your
                  idea into a polished digital experience.
                </p>

              </div>

            </div>


            {/* Screen Bottom */}

            <div className="instruction-screen-bottom">

              <span>
                READY WHEN YOU ARE
              </span>

              <a
                href="https://wa.me/923150751701"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Conversation
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;