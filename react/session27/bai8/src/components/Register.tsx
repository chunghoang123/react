import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate dữ liệu
    if (!email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }

    // Lấy danh sách users từ localStorage
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    // Check email trùng
    const exists = users.find((u) => u.email === email);
    if (exists) {
      setError("Email đã tồn tại!");
      return;
    }

    // Lưu user mới
    const newUser: User = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Reset form
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    alert("Đăng ký thành công!");
    navigate("/login"); // chuyển hướng về Login
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Nhập lại mật khẩu:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p>
        Đã có tài khoản? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
