import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    setColor((prevColor) => (prevColor === "black" ? "red" : "black"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p style={{ color: color, fontSize: "20px" }}>
        Đây là văn bản có thể đổi màu
      </p>
      <button onClick={handleChangeColor}>Đổi màu chữ</button>
    </div>
  );
}
