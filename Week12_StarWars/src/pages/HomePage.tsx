// src/pages/Home/HomePage.tsx
import React, { useEffect, useState } from "react";

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

  // Fetch starships on mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getStarshipList();
      setStarships(data);
    };
    fetchData();
  }, []);

  // Filter results based on query
  const filteredStarships = starships.filter((ship) =>
    ship.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.homeWrapper}>
      <SearchBar value={query} onChange={setQuery} />
      <div className={styles.listContainer}>
        {filteredStarships.map((ship) => (
          <div key={ship.uid} className={styles.card}>
            <h3>{ship.name}</h3>
            <p>UID: {ship.uid}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
