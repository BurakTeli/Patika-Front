// src/pages/StarshipDetail/StarshipDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStarshipDetail } from "../services/starshipService";

interface StarshipDetail {
  name: string;
  model: string;
  manufacturer: string;
  crew: string;
  [key: string]: any;
}

const StarshipDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [starship, setStarship] = useState<StarshipDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const detail = await getStarshipDetail(id);
        setStarship(detail);
      } catch (err) {
        setError("Failed to fetch starship detail.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDetail();
  }, [id]);

  if (loading)
    return <p style={{ color: "white", padding: "2rem" }}>Loading...</p>;
  if (error) return <p style={{ color: "red", padding: "2rem" }}>{error}</p>;
  if (!starship) return null;

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>{starship.name}</h2>
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Crew:</strong> {starship.crew}
      </p>
    </div>
  );
};

export default StarshipDetailPage;
