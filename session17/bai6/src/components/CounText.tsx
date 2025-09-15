import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setCount(value.length); // tính cả khoảng trắng
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Đếm ký tự (tính cả khoảng trắng)</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Nhập văn bản..."
          rows={5}
          cols={40}
        />
      </form>
      <p>Số ký tự: {count}</p>
    </div>
  );
}
