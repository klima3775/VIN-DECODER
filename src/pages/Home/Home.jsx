import React, { useState } from "react";
import VinForm from "../../components/VinForm/VinForm";
import LastDecodes from "../../components/LastDecodes/LastDecodes";
import "./Home.scss";

const Home = () => {
  const [lastQueries, setLastQueries] = useState([]);

  // Copy Vin query to clipboard
  const handleCopy = (query) => {
    navigator.clipboard
      .writeText(query)
      .then(() => {
        alert("Скопійовано в буфер обміну");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  const handleVinSubmit = (vin) => {
    const updatedQueries = [vin, ...lastQueries.slice(0, 2)]; // save only the last 3 queries
    setLastQueries(updatedQueries);
  };

  return (
    <div className="Home">
      <h1>Розшифровка VIN-коду</h1>
      <VinForm onVinSubmit={handleVinSubmit} />
      <LastDecodes lastQueries={lastQueries} onCopy={handleCopy} />
    </div>
  );
};

export default Home;
