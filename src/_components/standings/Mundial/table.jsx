import * as React from "react";

export default function MundialTable() {
  function guruh(nom, [a, b, c, d]) {
    return (
      <div>
        <h2>{nom}-GURUHI</h2>
        <span>{a}</span>
        <span>{b}</span>
        <span>{c}</span>
        <span>{d}</span>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: "1",
      }}
    >
      <h4>Working!</h4>
      {guruh("A", ["1-JAMOA", "2-JAMOA", "3-JAMOA", "4-JAMOA"])}
    </div>
  );
}
