import React from "react";
import "./DecodeResults.scss";

const DecodeResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <p className="no-results">Результати відсутні.</p>;
  }

  return (
    <div className="decode-results">
      <h3>Результати розшифровки:</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong>{result.Variable}:</strong> {result.Value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DecodeResults;
