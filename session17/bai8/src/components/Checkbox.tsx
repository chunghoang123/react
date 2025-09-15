import React, { useState } from "react";

export default function Checkbox() {
  const [selected, setSelected] = useState([]);

  const options = ["Bóng đá", "Bóng rổ", "Cầu lông", "Bơi lội"];

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Chọn môn thể thao yêu thích</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
            checked={selected.includes(option)}
          />
          {option}
        </div>
      ))}

      <h3>Giá trị đã chọn:</h3>
      <ul>
        {selected.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
