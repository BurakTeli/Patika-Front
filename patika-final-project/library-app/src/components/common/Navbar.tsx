import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/common/navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Welcome" },
    { path: "/publishers", label: "Publishers" },
    { path: "/categories", label: "Categories" },
    { path: "/books", label: "Books" },
    { path: "/authors", label: "Authors" },
    { path: "/borrows", label: "Borrows" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Library App</div>

      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`navbar-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
