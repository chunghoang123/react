import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Email hoặc mật khẩu không đúng!");
      return;
    }

    setError("");
    alert("Đăng nhập thành công!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Đăng nhập</button>
      </form>
      <p>
        Chưa có tài khoản? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
