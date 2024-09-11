import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VariableDetail = () => {
  const { variableId } = useParams();
  const [variable, setVariable] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVariable = async () => {
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const variableDetail = data.Results.find(
          (v) => v.ID === parseInt(variableId)
        );
        setVariable(variableDetail);
      } catch (error) {
        console.error("Помилка при отриманні деталей змінної:", error);
        setError("Не вдалося завантажити деталі змінної.");
      } finally {
        setLoading(false);
      }
    };

    fetchVariable();
  }, [variableId]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Деталі змінної</h1>
      {variable && (
        <div>
          <p>
            <strong>ID:</strong> {variable.ID}
          </p>
          <p>
            <strong>Назва:</strong> {variable.Name}
          </p>
          <p>
            <strong>Опис:</strong> {variable.Description}
          </p>
          {/* Додайте інші поля, які потрібно відобразити */}
        </div>
      )}
    </div>
  );
};

export default VariableDetail;
