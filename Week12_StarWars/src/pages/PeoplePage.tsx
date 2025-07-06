// src/pages/PeoplePage.tsx
import React, { useEffect, useState } from "react";
import { getPeopleList } from "../services/PeopleService";
import styles from "../styles/pages/PeoplePage.module.css";

interface Person {
  name: string;
  uid: string;
  url: string;
}

const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPeople = async () => {
      const result = await getPeopleList();
      setPeople(result);
      setLoading(false);
    };
    fetchPeople();
  }, []);

  if (loading) return <p className={styles.loading}>Loading characters...</p>;

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.pageTitle}>Star Wars Characters</h2>
      <div className={styles.cardContainer}>
        {people.map((person) => (
          <div key={person.uid} className={styles.card}>
            <h3>{person.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage ;
