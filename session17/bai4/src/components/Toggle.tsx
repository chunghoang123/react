import React, { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn tiêu đề" : "Hiện tiêu đề"}
      </button>

      {isVisible && <h1>Đây là tiêu đề</h1>}
    </div>
  );
}
