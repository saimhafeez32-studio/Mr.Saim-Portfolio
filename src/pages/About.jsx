import { Link } from "react-router-dom";

import {
  ArrowRight,
  Code2,
  Palette,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import "./About.css";


const About = () => {
  return (
    <main className="about-page">

      {/* =================================
          SECTION 01 — ABOUT HERO
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-glow"></div>

        <div className="container about-hero-container">

          {/* =================================
              HERO CONTENT
          ================================= */}

          <div className="about-hero-content">

            <span className="about-tag">
              ABOUT MR.SAIM
            </span>

            <h1 className="about-hero-title">
              <span className="hero-line">
                More then
              </span>

              <span className="hero-line">
              <span>just code.</span>
              </span>
            </h1>

            <p className="about-hero-description">
              I create digital experiences that combine
              design, technology and purpose — built with
              precision, simplicity and a premium mindset.
            </p>

            <div className="about-hero-actions">

              <Link
                to="/contact"
                className="about-primary-btn"
              >
                Let's Work Together

                <ArrowRight size={18} />
              </Link>


              <a
                href="#about-me"
                className="about-secondary-btn"
              >
                Explore About Me
              </a>

            </div>

          </div>


          {/* =================================
              HERO VISUAL
          ================================= */}

          <div className="about-hero-visual">

            {/* Background Name */}

            <div
              className="about-name-bg"
              aria-hidden="true"
            >
            </div>


            {/* Subtle Orbit */}

            <div className="about-orbit orbit-one"></div>

            <div className="about-orbit orbit-two"></div>


            {/* Profile Image */}

            <div className="about-profile-image">

              <img
                src="/saim.png"
                alt="Mr.Saim"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          SECTION 02 — ABOUT ME + EXPERTISE
      ================================= */}

      <section
        className="about-me-section"
        id="about-me"
      >

        <div className="container">

          {/* Section Heading */}

          <div className="about-section-heading">

            <span className="about-tag">
              WHO I AM
            </span>

            <h2>
              Creativity backed by
              <br />
              <span>technology.</span>
            </h2>

          </div>


          {/* About Grid */}

          <div className="about-me-grid">

            {/* About Content */}

            <div className="about-me-content">

              <p className="about-lead">
                My Journey
              </p>

              <p>
                My journey started with a simple curiosity about how digital experiences are created. Over time, that curiosity turned into a passion for design, technology, and creativity.

                I began exploring web development and gradually expanded my skills into UI/UX design, graphic design, and digital marketing. Every project became an opportunity to learn something new, solve problems creatively, and improve my craft.

                Today, I focus on creating modern, meaningful, and high-quality digital experiences that combine clean design, thoughtful functionality, and strong visual identity.

              </p>

              <p>
                This is not just a journey of learning — it’s a journey of building, creating, and constantly becoming better.
              </p>

            </div>


            {/* Expertise */}

            <div className="expertise-grid">

              {/* 01 */}

              <div className="expertise-card">

                <Code2
                  className="expertise-icon"
                />

                <span>01</span>

                <h3>
                  Web Development
                </h3>

                <p>
                  Modern, responsive and performance-focused
                  websites built for today's digital world.
                </p>

              </div>


              {/* 02 */}

              <div className="expertise-card">

                <Palette
                  className="expertise-icon"
                />

                <span>02</span>

                <h3>
                  UI / UX Design
                </h3>

                <p>
                  Clean interfaces designed around usability,
                  clarity and premium visual experiences.
                </p>

              </div>


              {/* 03 */}

              <div className="expertise-card">

                <TrendingUp
                  className="expertise-icon"
                />

                <span>03</span>

                <h3>
                  Digital Marketing
                </h3>

                <p>
                  Digital strategies focused on visibility,
                  engagement and sustainable growth.
                </p>

              </div>


              {/* 04 */}

              <div className="expertise-card">

                <Sparkles
                  className="expertise-icon"
                />

                <span>04</span>

                <h3>
                  Graphic Design
                </h3>

                <p>
                  Modern visual identities and creative designs
                  that help brands stand out.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          SECTION 03 — PHILOSOPHY + CTA
      ================================= */}

      <section className="about-philosophy">

        <div className="about-philosophy-bg"></div>


        <div className="container about-philosophy-container">

          <span className="about-tag about-tag-light">
            MY PHILOSOPHY
          </span>


          <h2>
            I don't just build websites.
            <br />
            <span>I build experiences.</span>
          </h2>


          <p>
            Every project is an opportunity to turn an idea
            into something useful, beautiful and memorable.
            My goal is to create digital experiences that
            people enjoy using and brands are proud to own.
          </p>


          <Link
            to="/contact"
            className="about-cta-btn"
          >
            Start a Project

            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
};


export default About;