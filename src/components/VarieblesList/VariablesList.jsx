import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchVariablesList } from "../../api/loadVariables";
import Loader from "../Loader/loader";
import "./VariablesList.scss";

const VariablesList = () => {
  const [variables, setVariables] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // fetch variables list
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
  //  ERROR: The variableId is not defined
  if (loading) {
    return <Loader message="Завантаження змінних..." />;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="variables-list">
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
