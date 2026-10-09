import "./About.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { Brain, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="about-hero">
          <span className="about-tag">ABOUT NEUROVA TECH</span>

          <h1>
            Learn. Build. <span>Grow.</span>
          </h1>

          <p>
            Neurova Tech is a modern technology platform dedicated to Artificial
            Intelligence, Data Science, Machine Learning, Python programming,
            and emerging technologies. Our goal is to make learning simple,
            practical, and accessible for everyone.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <Brain className="about-icon" />

            <h3>Our Mission</h3>

            <p>
              To simplify complex technologies through high-quality tutorials,
              practical guides, and industry insights.
            </p>
          </div>

          <div className="about-card">
            <BookOpen className="about-icon" />

            <h3>What We Cover</h3>

            <p>
              Artificial Intelligence, Data Science, Python, Machine Learning,
              Generative AI, and modern software technologies.
            </p>
          </div>

          <div className="about-card">
            <Lightbulb className="about-icon" />

            <h3>Our Vision</h3>

            <p>
              To become a trusted learning platform that helps students,
              developers, and professionals stay ahead in technology.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
