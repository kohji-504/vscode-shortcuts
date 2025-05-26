import React from "react";

function OSSelector({ os, setOs }) {
  return (
    <div style={{ marginBottom: "1em" }}>
      <label htmlFor="os-select" style={{ marginRight: "0.5em" }}>
        OS選択：
      </label>
      <select
        id="os-select"
        value={os}
        onChange={(e) => setOs(e.target.value)}
        style={{ padding: "0.3em" }}
      >
        <option value="mac">Mac</option>
        <option value="windows">Windows</option>
      </select>
    </div>
  );
}

export default OSSelector;
