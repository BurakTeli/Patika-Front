import React from "react";

interface NavbarProps {
  balance: number;
}

const Navbar: React.FC<NavbarProps> = ({ balance }) => {
  return (
    <nav className="navbar">
      {/* Diğer içerik */}
      <div className="navbar-balance">
        ${balance.toLocaleString()}
      </div>
    </nav>
  );
};

export default Navbar;
