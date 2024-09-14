import "./LastDecodes.scss";

const LastDecodes = ({ lastQueries, onCopy }) => {
  return (
    <div className="last-decodes">
      <h4>Останні запити:</h4>
      <ul>
        {lastQueries.map((query, index) => (
          <li key={index}>
            <button onClick={() => onCopy(query)}>{query}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastDecodes;
