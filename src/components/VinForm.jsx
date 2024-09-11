// import { useState } from "react";

// const VinForm = ({ onVinSubmit }) => {
//   const [vin, setVin] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (vin.length === 0 || vin.length > 17 || /[^A-Za-z0-9]/.test(vin)) {
//       setError(
//         "VIN має бути не порожнім, не більше 17 символів і без заборонених символів."
//       );
//     } else {
//       setError("");
//       onVinSubmit(vin);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={vin}
//         onChange={(e) => setVin(e.target.value)}
//         placeholder="Введіть VIN"
//         maxLength={17}
//       />
//       {error && <p>{error}</p>}
//       <button type="submit">Пошук</button>
//     </form>
//   );
// };

// export default VinForm;

import { useState } from "react";
import DecodeResults from "./DecodeResults";

const VinForm = () => {
  const [vin, setVin] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
    if (!vin || !vinRegex.test(vin)) {
      setError(
        "Введіть дійсний VIN (рівно 17 символів, латинські букви та цифри)."
      );
      return;
    }
    setError("");

    const decodedResults = await decodeVin(vin);
    if (decodedResults.length === 0) {
      setError("Не вдалося розшифрувати VIN. Спробуйте ще раз.");
    } else {
      setResults(decodedResults);
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
      {error && <p className="error">{error}</p>}
      {results.length > 0 && <DecodeResults results={results} />}
    </div>
  );
};

const decodeVin = async (vin) => {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
    );
    const data = await response.json();
    return data.Results.filter((result) => result.Value); // Повертаємо лише результати, де значення заповнено
  } catch (error) {
    console.error("Помилка при розшифровці VIN:", error);
    return [];
  }
};

export default VinForm;
