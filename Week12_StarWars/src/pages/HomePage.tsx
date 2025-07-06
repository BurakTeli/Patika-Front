// src/pages/Home/HomePage.tsx
import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { getStarshipList } from "../services/starshipService";

interface Starship {
  name: string;
  uid: string;
  url: string;
}

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStarships = async () => {
      setLoading(true);
      const result = await getStarshipList();
      setStarships(result);
      setLoading(false);
    };
    fetchStarships();
  }, []);

  const filteredStarships = starships.filter((ship) =>
    ship.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.homeWrapper}>
      <SearchBar value={query} onChange={setQuery} />

      {loading ? (
        <p>Loading starships...</p>
      ) : filteredStarships.length === 0 ? (
        <p>No starships found.</p>
      ) : (
        <div className={styles.listContainer}>
          {filteredStarships.map((ship) => (
            <div key={ship.uid} className={styles.card}>
              <h3>{ship.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
