const LastDecoders = ({ lastQueries, onSelect }) => {
  return (
    <div>
      <h2>Останні розшифровані коди:</h2>
      <ul>
        {lastQueries.map((query, index) => (
          <li key={index} onClick={() => onSelect(query)}>
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastDecoders;
