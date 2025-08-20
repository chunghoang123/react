import React, { Component } from "react";
import "./ex3.css";

interface User {
  id: number;
  name: string;
  address: string;
}

interface State {
  users: User[];
}

export default class Exercise03 extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: "Nguyễn Văn A", address: "Hà Nội" },
        { id: 2, name: "Trần Thị B", address: "Hải Phòng" },
        { id: 3, name: "Lê Văn C", address: "Đà Nẵng" },
      ],
    };
  }

  render() {
    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h2>Danh sách Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Họ tên</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}