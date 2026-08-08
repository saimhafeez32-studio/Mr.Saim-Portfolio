import "./SkillsSection.css";
import { Link } from "react-router-dom";

import {
  Globe,
  Palette,
  MonitorSmartphone,
  PenTool,
  TrendingUp,
  Rocket,
} from "lucide-react";

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="container">

        {/* Header */}

        <div className="skills-header">

          <span className="skills-tag">
            EXPERTISE
          </span>

          <h2 className="skills-title">
            Transforming ideas into
            <br />
            premium digital experiences.
          </h2>

          <p className="skills-description">
            Combining creativity, design and modern technologies
            to build elegant digital products that are fast,
            scalable and crafted with precision.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="skills-grid">

          <div className="skill-card">
            <Globe className="skill-icon" />

            <h3>Web Development</h3>

            <p>
              Responsive websites built with modern technologies
              for performance and scalability.
            </p>
          </div>

          <div className="skill-card">
            <Palette className="skill-icon" />

            <h3>UI / UX Design</h3>

            <p>
              Clean user interfaces focused on usability,
              simplicity and premium experiences.
            </p>
          </div>

          <div className="skill-card">
            <MonitorSmartphone className="skill-icon" />

            <h3>Frontend Engineering</h3>

            <p>
              Modern React applications with smooth interactions
              and clean architecture.
            </p>
          </div>

          <div className="skill-card">
            <PenTool className="skill-icon" />

            <h3>Graphic Design</h3>

            <p>
              Branding, social media creatives and visual identity
              with modern aesthetics.
            </p>
          </div>

          <div className="skill-card">
            <TrendingUp className="skill-icon" />

            <h3>Digital Marketing</h3>

            <p>
              SEO strategies and digital campaigns focused
              on sustainable business growth.
            </p>
          </div>

          <div className="skill-card">
            <Rocket className="skill-icon" />

            <h3>Performance</h3>

            <p>
              Optimized websites delivering fast loading,
              accessibility and excellent user experience.
            </p>
          </div>

        </div>

        {/* Button */}

        <div className="skills-button">

          <Link
            to="/projects"
            className="skills-btn"
          >
            View Projects
          </Link>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;