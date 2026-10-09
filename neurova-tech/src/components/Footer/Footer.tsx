import "./Footer.css";

import { Link } from "react-router-dom";
import { FaBrain, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-column">
          <div className="footer-logo">
            <FaBrain className="footer-logo-icon" />

            <Link to="/" className="footer-logo-text">
              <span className="logo-neurova"> Neurova</span>
              <span className="logo-tech">&nbsp;Tech</span>
            </Link>
          </div>

          <p className="footer-description">
            Your trusted destination for AI, Data Science, Generative AI, and
            Python News.
          </p>

          <div className="footer-socials">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Topics */}

        <div className="footer-column">
          <h3>Topics</h3>

          <a href="#">Artificial Intelligence</a>
          <a href="#">Data Science</a>
          <a href="#">Python</a>
          <a href="#">Machine Learning</a>
        </div>

        {/* Connect */}

        <div className="footer-column">
          <h3>Connect</h3>

          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Neurova Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
