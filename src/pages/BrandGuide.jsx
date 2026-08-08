import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import "./BrandGuide.css";

const BrandGuide = () => {
  return (
    <section className="brand-guide">
      <div className="brand-header">
        <Link to="/" className="back-btn">
          <FaArrowLeft />
          <span>Back to Website</span>
        </Link>

        <a
          href="/branding-guide.pdf"
          download
          className="download-btn"
        >
          <FaDownload />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="pdf-container">
        <iframe
          src="/branding-guide.pdf"
          title="Brand Guide"
          className="pdf-viewer"
        />
      </div>
    </section>
  );
};

export default BrandGuide;