import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchVariablesList } from "../../api/loadVariables";
import Loader from "../Loader/loader";

const VariablesList = () => {
  const [variables, setVariables] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVariables = async () => {
      setLoading(true);
      try {
        const data = await fetchVariablesList();
        setVariables(data);
      } catch (error) {
        console.error("Помилка при отриманні списку змінних:", error);
        setError("Не вдалося завантажити змінні.");
      } finally {
        setLoading(false);
      }
    };

    loadVariables();
  }, []);

  if (loading) {
    return <Loader message="Завантаження змінних..." />;
  }

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
