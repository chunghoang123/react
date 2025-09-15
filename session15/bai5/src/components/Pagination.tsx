import React from "react";

export default function Pagination() {
  return (
    <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
      <button>{"<"}</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>{" > "}</button>
    </div>
  );
}
