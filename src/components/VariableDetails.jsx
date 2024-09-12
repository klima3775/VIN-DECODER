import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVariableDetails } from "../api/variableApi";
import Loader from "../components/loader";

const VariableDetail = () => {
  const { variableId } = useParams();
  const [variable, setVariable] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVariable = async () => {
      setLoading(true);
      setError(null);
      try {
        const variableDetail = await fetchVariableDetails(variableId);
        setVariable(variableDetail);
      } catch (error) {
        setError("Не вдалося завантажити деталі змінної.");
      } finally {
        setLoading(false);
      }
    };

    fetchVariable();
  }, [variableId]);

  if (loading) {
    return <Loader message={"Завантаження..."} />;
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
        </div>
      )}
    </div>
  );
};

export default VariableDetail;
