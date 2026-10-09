import "./Contact.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-hero">
          <span className="contact-tag">CONTACT US</span>

          <h1>
            Let's <span>Connect</span>
          </h1>

          <p>
            Have a question, feedback, or collaboration idea? We'd love to hear
            from you. Reach out through any of the platforms below.
          </p>
        </div>

        <div className="contact-cards">
          {/* Email */}
          <a href="mailto:support@neurovatech.com" className="contact-card">
            <MdEmail className="contact-icon" />

            <h3>Email</h3>

            <p>support@neurovatech.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/neurovatech"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />

            <h3>GitHub</h3>

            <p>github.com/neurovatech</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/neurovatech"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />

            <h3>LinkedIn</h3>

            <p>linkedin.com/company/neurovatech</p>
          </a>

          {/* Website */}
          <a
            href="https://www.neurovatech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGlobe className="contact-icon" />

            <h3>Website</h3>

            <p>www.neurovatech.com</p>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
