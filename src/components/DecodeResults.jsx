const DecodersResults = ({ results }) => {
  return (
    <div>
      <h3>Результати розшифровки:</h3>
      <ul>
        {results
          .filter((result) => result.Value)
          .map((result, index) => (
            <li key={index}>
              {result.Variable}: {result.Value}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default DecodersResults;
