// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img
        src="src/assets/billgates.jpg "
        alt="Bill Gates"
        className="navbar-avatar"
      />
      <h1 className="navbar-title">Spend Bill Gates' Money</h1>
      <div className="navbar-balance">$100,000,000,000</div>
    </nav>
  );
};

export default Navbar;
