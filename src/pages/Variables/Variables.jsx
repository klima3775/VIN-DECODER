import React from "react";
import VariablesList from "../../components/VarieblesList/VariablesList";
import "./Variables.scss";

const Variables = () => {
  return (
    <div className="Variables">
      <h1>Список усіх змінних</h1>
      <VariablesList />
    </div>
  );
};

export default Variables;
