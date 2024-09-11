// Припустимо, що це ваш компонент VariableDetails
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VariableDetails = () => {
  const { id } = useParams();
  const [variableDetails, setVariableDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVariableDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.example.com/variables/${id}`);
        const data = await response.json();
        setVariableDetails(data);
      } catch (error) {
        setError("Не вдалося завантажити дані.");
      } finally {
        setLoading(false);
      }
    };

    fetchVariableDetails();
  }, [id]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Деталі змінної</h1>
      {variableDetails && (
        <div>
          <p>
            <strong>ID:</strong> {variableDetails.id}
          </p>
          <p>
            <strong>Назва:</strong> {variableDetails.name}
          </p>
          <p>
            <strong>Опис:</strong> {variableDetails.description}
          </p>
          {/* Додайте інші поля, які потрібно відобразити */}
        </div>
      )}
    </div>
  );
};

export default VariableDetails;
