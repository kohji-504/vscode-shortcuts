import React, { useState, useEffect } from "react";
import OSSelector from "./components/OSSelector";
import ShortcutList from "./components/ShortcutList";
import SearchBar from "./components/SearchBar";


function App() {
  const [shortcuts, setShortcuts] = useState([]);
  const [os, setOs] = useState("mac");
  const [query, setQuery] = useState(""); // 検索キーワード


  // データを読み込む処理
  useEffect(() => {
    fetch("/shortcuts.json")
      .then((res) => res.json())
      .then((data) => setShortcuts(data));
  }, []);

  const filtered = shortcuts.filter((item) =>
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div style={{ padding: "2em" }}>
      <h1>VSCode ショートカット早見表</h1>
      <OSSelector os={os} setOs={setOs} />
      <SearchBar query={query} setQuery={setQuery} />
      <ShortcutList shortcuts={filtered} os={os} />
    </div>
  );
}

export default App;
