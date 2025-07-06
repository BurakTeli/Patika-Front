// src/pages/HomePage.tsx
import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./HomePage.module.css"; 

const HomePage = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Star Wars Starships</h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>
    </div>
  );
};

export default HomePage;
