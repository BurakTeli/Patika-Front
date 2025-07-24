import React, { useEffect, useState } from "react";
import { getAllPublishers } from "../../services/publisherService";
import { Publisher } from "../../types";

const PublisherPage: React.FC = () => {
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPublishers();
        setPublishers(data);
      } catch (err) {
        setError("Failed to fetch publishers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="publisher-page">
      <h2>Publisher List</h2>

      {loading && <p>Loading publishers...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && publishers.length === 0 && (
        <p>No publishers found.</p>
      )}

      <ul>
        {publishers.map((publisher) => (
          <li key={publisher.id}>
            <strong>{publisher.name}</strong> — {publisher.address} (
            {publisher.establishmentYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublisherPage;
