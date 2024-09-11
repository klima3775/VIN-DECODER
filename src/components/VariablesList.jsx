import React, { useEffect, useState } from "react";

const VariablesList = () => {
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const loadVariables = async () => {
      const variablesData = await fetchVariables();
      setVariables(variablesData);
    };

    loadVariables();
  }, []);

  return (
    <div>
      <h3>Список усіх змінних:</h3>
      <ul>
        {variables.map((variable) => (
          <li key={variable.ID}>{variable.Name}</li>
        ))}
      </ul>
    </div>
  );
};

const fetchVariables = async () => {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
    );
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error("Помилка при отриманні списку змінних:", error);
    return [];
  }
};

export default VariablesList;
