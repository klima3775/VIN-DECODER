// pages/Home.jsx
import React, { useState } from "react";
import VinForm from "../components/VinForm";
import LastDecodes from "../components/LastDecodes";
import DecodeResults from "../components/DecodeResults";

const Home = () => {
  const [results, setResults] = useState([]);
  const [lastQueries, setLastQueries] = useState([]);

  const handleVinDecode = (vin) => {
    // Ваш код для запиту до API і обробки результатів
    const decodedResults = [{ Variable: "Make", Value: "Toyota" }]; // Приклад результату
    setResults(decodedResults);
    setLastQueries([vin, ...lastQueries.slice(0, 2)]);
  };

  return (
    <div>
      <VinForm onDecode={handleVinDecode} />
      <LastDecodes lastQueries={lastQueries} onSelect={handleVinDecode} />
      <DecodeResults results={results} />
    </div>
  );
};

export default Home;
