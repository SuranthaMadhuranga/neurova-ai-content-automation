import "./ArticleDetails.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { CalendarDays, ArrowLeft } from "lucide-react";

import { useArticle } from "../hooks/useArticle";

const ArticleDetails = () => {
  const { id } = useParams();

  const { article, loading } = useArticle(id || "");

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="article-details">
          <div className="article-loading">
            <h2>Loading article...</h2>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />

        <main className="article-details">
          <div className="article-loading">
            <h2>Article not found.</h2>

            <Link to="/articles" className="back-link">
              <ArrowLeft size={18} />
              Back to Articles
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="article-details">
        {/* Header */}

        <section className="article-header">
          <span className="article-category">AI</span>

          <div className="article-meta">
            <CalendarDays size={18} />

            <span>
              Published • {new Date(article.published_at).toLocaleDateString()}
            </span>
          </div>

          <h1 className="article-title">{article.title}</h1>
        </section>

        {/* Hero Image */}

        <img
          src={article.image_url}
          alt={article.title}
          className="article-Dimage"
        />

        {/* Markdown */}

        <article className="article-markdown">
          <ReactMarkdown>{article.article}</ReactMarkdown>
        </article>

        {/* Back Button */}

        <Link to="/articles" className="back-link">
          <ArrowLeft size={18} />
          Back to Articles
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default ArticleDetails;
