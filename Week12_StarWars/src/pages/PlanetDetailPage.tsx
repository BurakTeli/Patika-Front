// src/pages/PlanetDetailPage.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlanetDetail } from "../services/PlanetsService";

interface PlanetDetail {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  population: string;
  terrain: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  [key: string]: any;
}

const PlanetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<PlanetDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔧 Added: Fetch planet details
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const result = await getPlanetDetail(id);
        setPlanet(result);
      } catch (err) {
        setError("Failed to fetch planet detail.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDetail();
  }, [id]);

  if (loading)
    return <p style={{ color: "white", padding: "2rem" }}>Loading...</p>;
  if (error) return <p style={{ color: "red", padding: "2rem" }}>{error}</p>;
  if (!planet) return null;

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>{planet.name}</h2>
      <p>
        <strong>Climate:</strong> {planet.climate}
      </p>
      <p>
        <strong>Terrain:</strong> {planet.terrain}
      </p>
      <p>
        <strong>Diameter:</strong> {planet.diameter} km
      </p>
      <p>
        <strong>Gravity:</strong> {planet.gravity}
      </p>
      <p>
        <strong>Population:</strong> {planet.population}
      </p>
      <p>
        <strong>Orbital Period:</strong> {planet.orbital_period} days
      </p>
      <p>
        <strong>Rotation Period:</strong> {planet.rotation_period} hours
      </p>
      <p>
        <strong>Surface Water:</strong> {planet.surface_water}%
      </p>
    </div>
  );
};

export default PlanetDetailPage;
