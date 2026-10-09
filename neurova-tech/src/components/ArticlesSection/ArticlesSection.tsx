import "./ArticlesSection.css";

import ArticleCard from "../ArticleCard/ArticleCard";
import { useArticles } from "../../hooks/useArticles";

interface ArticlesSectionProps {
  limit?: number;
}

const ArticlesSection = ({ limit }: ArticlesSectionProps) => {
  const { articles, loading } = useArticles();

  if (loading) {
    return <p>Loading articles...</p>;
  }

  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="articles-section">
      {displayedArticles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </section>
  );
};

export default ArticlesSection;
