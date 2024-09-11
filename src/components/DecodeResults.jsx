const DecodeResults = ({ results }) => {
  return (
    <div>
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
