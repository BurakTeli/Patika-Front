// src/components/Navbar/Navbar.tsx

import React from "react";
import "../../styles/components/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">📚 Library App</div>
      <nav className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/publisher">Publisher</a>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/book">Book</a>
          </li>
          <li>
            <a href="/author">Author</a>
          </li>
          <li>
            <a href="/borrow">Borrow</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
