import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VariablesList = () => {
  const [variables, setVariables] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVariables = async () => {
      try {
        const response = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
        );
        const data = await response.json();
        setVariables(data.Results);
      } catch (error) {
        console.error("Помилка при отриманні списку змінних:", error);
        setError("Не вдалося завантажити змінні.");
      }
    };

    loadVariables();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h3>Список усіх змінних:</h3>
      <ul>
        {variables.map((variable) => (
          <li key={variable.ID}>
            <Link to={`/variables/${variable.ID}`}>
              <strong>{variable.Name}:</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VariablesList;
