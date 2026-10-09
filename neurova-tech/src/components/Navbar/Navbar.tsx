import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";
import { Search, Moon } from "lucide-react";
import { FaBrain } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <FaBrain className="logo-icon" />

        <Link to="/" className="logo-text">
          <span className="logo-neurova">Neurova</span>{" "}
          <span className="logo-tech">Tech</span>
        </Link>
      </div>

      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/articles">Articles</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="navbar-right">
        <div className="search-box">
          <input type="text" placeholder="Search articles..." />
          <Search size={18} />
        </div>

        <button className="theme-btn">
          <Moon size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
