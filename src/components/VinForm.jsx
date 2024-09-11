import { useState } from "react";

const VinForm = ({ onVinSubmit }) => {
  const [vin, setVin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vin.length === 0 || vin.length > 17 || /[^A-Za-z0-9]/.test(vin)) {
      setError(
        "VIN має бути не порожнім, не більше 17 символів і без заборонених символів."
      );
    } else {
      setError("");
      onVinSubmit(vin);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        placeholder="Введіть VIN"
        maxLength={17}
      />
      {error && <p>{error}</p>}
      <button type="submit">Пошук</button>
    </form>
  );
};

export default VinForm;
