import React from "react";
import "../../styles/navbar.css";
import Logo from "./Logo";
import JoinButton from "./JoinButton";
import NavLinks from "./NavLinks";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Logo />
        <nav className="nav-links">
          <NavLinks />
          <JoinButton />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
