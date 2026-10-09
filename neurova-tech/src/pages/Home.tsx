import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionHeader />
      <ArticlesSection limit={3} />
      <Footer />
    </>
  );
};

export default Home;
