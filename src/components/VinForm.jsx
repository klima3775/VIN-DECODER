import React, { useState } from "react";
import DecodeResults from "./DecodeResults";
import { decodeVin } from "../api/vinCode";
import Loader from "../components/loader";

const VinForm = ({ onVinSubmit }) => {
  const [vin, setVin] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

    // Vin Validation
    if (!vin || !vinRegex.test(vin)) {
      setError(
        "Введіть дійсний VIN (рівно 17 символів, латинські букви та цифри)."
      );
      return;
    }

    setError(""); // Reset error message
    setLoading(true);
    try {
      const decodedResults = await decodeVin(vin);

      if (decodedResults.length === 0) {
        setError("Не вдалося розшифрувати VIN. Спробуйте ще раз.");
      } else {
        setResults(decodedResults);
        onVinSubmit(vin); // Add the VIN to the list of submitted VINs
      }
    } catch (error) {
      setError("Не вдалося розшифрувати VIN. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="Введіть VIN-код"
          maxLength={17}
        />
        <button type="submit">Розшифрувати</button>
      </form>
      {loading && <Loader message="Завантаження..." />}{" "}
      {error && <p className="error">{error}</p>}
      {results.length > 0 && <DecodeResults results={results} />}
    </div>
  );
};

export default VinForm;
