// Starship detail page placeholder
import React from "react";
import { useParams } from "react-router-dom";

const StarshipDetailPage = () => {
  // Access starship id from the route
  const { id } = useParams();

  // Placeholder content for detail page
  return (
    <div>
      <h2>Starship Detail Page</h2>
      <p>Details for starship with ID: {id}</p>
    </div>
  );
};

export default StarshipDetailPage;
