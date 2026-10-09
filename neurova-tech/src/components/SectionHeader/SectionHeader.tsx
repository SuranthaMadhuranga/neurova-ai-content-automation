import "./SectionHeader.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title?: string;
  showButton?: boolean;
}

const SectionHeader = ({
  title = "Latest Articles",
  showButton = true,
}: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        <div className="section-line"></div>
      </div>

      {showButton && (
        <Link to="/articles" className="view-all">
          View All Articles
          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
