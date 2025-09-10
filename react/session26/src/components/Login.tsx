import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const userData = {
    email: "hvc@gmail.com",
    password: "123456",
    role: "Admin",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      form.email === userData.email &&
      form.password === userData.password &&
      form.role === userData.role
    ) {
      alert("Đăng nhập thành công!");
      navigate("/account");
    } else {
      alert("Thông tin đăng nhập không chính xác!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "0 auto" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          value={form.password}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        >
          <option value="">-- Chọn quyền --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
