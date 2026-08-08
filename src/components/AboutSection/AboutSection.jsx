import "./AboutSection.css";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-container">

        {/* Left Side */}
        <div className="about-left">

          <span className="about-tag">
            ABOUT ME
          </span>

          <h2 className="about-title">
            Building Digital Experiences
            <br />
            With Purpose & Precision
          </h2>

          <p className="about-text">
            I'm <strong>Saim</strong>, a passionate Modern Web Developer,
            UI/UX Designer, Graphic Designer and Digital Marketing Specialist.
            I create premium digital experiences that combine aesthetics,
            performance and usability.
          </p>

          <p className="about-text">
            My focus is building modern websites, intuitive interfaces and
            scalable digital products that help businesses grow while delivering
            an exceptional user experience.
          </p>

          <Link
            to="/about"
            className="about-btn"
        >
            More About Me
          </Link>

        </div>

        {/* Right Side */}
        <div className="about-right">

          <div className="about-card">
            <h3>3+</h3>
            <span>Years Experience</span>
          </div>

          <div className="about-card">
            <h3>50+</h3>
            <span>Projects Completed</span>
          </div>

          <div className="about-card">
            <h3>UI/UX</h3>
            <span>Premium Design</span>
          </div>

          <div className="about-card">
            <h3>24/7</h3>
            <span>Client Support</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;