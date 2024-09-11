// pages/VariableDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import VariableDetails from "../components/VariableDetails";

const VariableDetail = () => {
  const { variableId } = useParams(); // Отримання параметру з URL

  return (
    <div>
      <h2>Деталі змінної</h2>
      <VariableDetails variableId={variableId} />
    </div>
  );
};

export default VariableDetail;
