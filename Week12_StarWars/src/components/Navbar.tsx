import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components/Navbar.module.css"; // 🔧 Added: CSS module import

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* 🔧 Added: Navigation links */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Starships
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Characters
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
