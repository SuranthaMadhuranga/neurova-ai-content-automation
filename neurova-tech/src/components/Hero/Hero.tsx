import "./Hero.css";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">AI • DATA SCIENCE • TECHNOLOGY</span>

        <h1>
          Learn <span>AI.</span> Build the Future.
        </h1>

        <p>
          Discover the stories driving the future of Artificial Intelligence,
          Data Science, and modern technology
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Articles →</button>

          <button className="secondary-btn">Browse All Articles</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
