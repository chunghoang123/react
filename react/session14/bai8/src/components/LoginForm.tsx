import React, { Component } from "react";

type StateTypes = {
  email: string;
  password: string;
  message: string;
};

export default class LoginForm extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  componentDidMount() {
    // Tạo sẵn 1 tài khoản mẫu trong localStorage nếu chưa có
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.length === 0) {
      const defaultUser = {
        studentName: "Nguyễn Văn A",
        email: "admin@gmail.com",
        password: "123456",
        address: "Hà Nội",
      };

      users.push(defaultUser);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<StateTypes, keyof StateTypes>);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ message: "Email và mật khẩu không được để trống!" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (foundUser) {
      this.setState({ message: "Đăng nhập thành công" });
    } else {
      this.setState({ message: "Đăng nhập thất bại" });
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <h2>Đăng nhập</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Đăng nhập</button>
        </form>

        {message && <p>{message}</p>}
      </div>
    );
  }
}
