import React, { Component } from "react";

type StateType = {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
};

export default class UserForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as unknown as Pick<
      StateType,
      keyof StateType
    >);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }
    if (parseInt(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }

    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "30px auto", textAlign: "left" }}>
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tuổi: </label>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset} style={{ marginLeft: "10px" }}>
            Xóa tất cả
          </button>
        </form>

        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}

        {this.state.submitted && !this.state.error && (
          <div style={{ marginTop: "20px" }}>
            <h3>Thông tin người dùng:</h3>
            <p><strong>Tên:</strong> {this.state.name}</p>
            <p><strong>Email:</strong> {this.state.email}</p>
            <p><strong>Tuổi:</strong> {this.state.age}</p>
          </div>
        )}
      </div>
    );
  }
}
