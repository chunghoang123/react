import React, { Component } from "react";

type StateTypes = {
  email: string;
  password: string;
};

export default class ControlledForm extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    // Khai báo State
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // chặn reload trang
    const userInfo = {
        email:this.state.email,
        password:this.state.password,
    }
    console.log("userInfo: ",userInfo)
  };

  render() {
    return (
      <div>
        <h3>ControlledForm</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChangeEmail}
              type="text"
              placeholder="Enter email"
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChangePassword}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
