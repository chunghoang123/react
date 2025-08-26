import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(value);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Nhập gì đó..." 
      />
      <button type="submit">Gửi</button>
      {submitted && <h1>{submitted}</h1>}
    </form>
  );
}
