import "./ArticleCard.css";

import { Clock3, ArrowRight } from "lucide-react";

import type { Article } from "../../types/article";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="article-card">
      <img
        src={article.image_url}
        alt={article.title}
        className="article-image"
      />

      <div className="article-content">
        <p className="article-date">
          {new Date(article.published_at).toLocaleDateString()}
        </p>

        <h3>{article.title}</h3>

        <p className="article-description">{article.excerpt}</p>

        <div className="article-footer">
          <div className="read-time">
            <Clock3 size={16} />
            <span>5 min read</span>
          </div>

          <Link to={`/article/${article._id}`} className="read-more">
            Read More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
