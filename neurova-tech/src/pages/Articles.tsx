import "./Articles.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import SectionHeader from "../components/SectionHeader/SectionHeader";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";

const Articles = () => {
  return (
    <>
      <Navbar />

      <main className="articles-page">
        <SectionHeader showButton={false} />

        <ArticlesSection />
      </main>

      <Footer />
    </>
  );
};

export default Articles;
