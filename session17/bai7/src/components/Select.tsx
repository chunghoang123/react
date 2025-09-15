import React, { useState } from "react";

export default function Select() {
  const [city, setCity] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Chọn thành phố</h2>
      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Cần Thơ">Cần Thơ</option>
      </select>

      {city && <h3>Bạn đã chọn: {city}</h3>}
    </div>
  );
}
