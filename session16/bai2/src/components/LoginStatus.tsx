import React, { Component } from "react";
type StatusType = {
  status: boolean;
};

export default class LoginStatus extends Component<object, StatusType> {
  constructor(props: object) {
    super(props);
    this.state = {
      status: false,
    };
  }
  handleLoginLogout = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
            width: "500px",
            height: "150px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            {this.state.status
              ? "Xin chào User"
              : "Vui lòng đăng nhập để tiếp tục"}
          </h1>
          <button
            onClick={this.handleLoginLogout}
            style={{
              textAlign: "center",
              display: "block",
              margin: "0 auto",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "white",
            }}
          >
            {this.state.status ? "Đăng xuất" : "Đăng nhập"}
          </button>
        </div>
      </div>
    );
  }
}
