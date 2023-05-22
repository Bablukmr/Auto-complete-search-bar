import "./SearchList.css";

export default function SearchResults({ results }) {
  return (
    <div className="results">
      {results.map((result, id) => {
        return (
          <div
           
            key={id}
            className="itemslist"
          >
            {result.state_name}{" "}
          </div>
        );
      })}
    </div>
  );
}
