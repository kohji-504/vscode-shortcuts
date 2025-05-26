import React from "react";

function ShortcutList({ shortcuts, os }) {
  if (shortcuts.length === 0) {
    return <p>該当するショートカットが見つかりませんでした。</p>;
  }

  return (
    <div>
      {shortcuts.map((item, index) => (
        <div key={index} style={{ marginBottom: "1em" }}>
          <strong>{item.description}</strong>
          <div style={{ fontSize: "0.9em", color: "#555" }}>
            {os === "mac" ? item.mac : item.windows}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShortcutList;
