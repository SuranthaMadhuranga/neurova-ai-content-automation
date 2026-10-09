import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticleDetails from "./pages/ArticleDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/articles" element={<Articles />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/article/:id" element={<ArticleDetails />} />
    </Routes>
  );
}

export default App;
