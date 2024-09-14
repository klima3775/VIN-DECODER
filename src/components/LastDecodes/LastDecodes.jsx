import "./LastDecodes.scss";

const LastDecodes = ({ lastQueries, onSelect }) => {
  return (
    <div className="last-decodes">
      <h4>Останні запити:</h4>
      <ul>
        {lastQueries.map((query, index) => (
          <li key={index}>
            <button onClick={() => onSelect(query)}>{query}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastDecodes;
