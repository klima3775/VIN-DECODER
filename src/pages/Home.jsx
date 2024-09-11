import React, { useState } from "react";
import VinForm from "../components/VinForm";
import LastDecodes from "../components/LastDecodes";

const Home = () => {
  const [lastQueries, setLastQueries] = useState([]);

  const handleVinSubmit = (vin) => {
    const updatedQueries = [vin, ...lastQueries.slice(0, 2)]; // Зберігаємо тільки останні 3 запити
    setLastQueries(updatedQueries);
  };

  return (
    <div>
      <h1>Розшифровка VIN-коду</h1>
      <VinForm onVinSubmit={handleVinSubmit} />
      <LastDecodes
        lastQueries={lastQueries}
        onSelect={(vin) => console.log(vin)}
      />
    </div>
  );
};

export default Home;
