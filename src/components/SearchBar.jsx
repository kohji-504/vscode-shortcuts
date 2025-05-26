import React from "react";

function SearchBar({ query, setQuery }) {
  return (
    <div style={{ marginBottom: "1em" }}>
      <input
        type="text"
        placeholder="説明で検索（例: コピー）"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5em", width: "100%" }}
      />
    </div>
  );
}

export default SearchBar;
