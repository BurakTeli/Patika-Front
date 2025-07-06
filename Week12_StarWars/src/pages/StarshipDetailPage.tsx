import React from "react";
import { useParams } from "react-router-dom";

const StarshipDetailPage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>Starship Details</h2>
      <p>Selected Starship ID: {id}</p>
    </div>
  );
};

export default StarshipDetailPage;
