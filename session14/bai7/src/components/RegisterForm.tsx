import React, { Component, createRef } from "react";

interface User {
  name: string;
  email: string;
  password: string;
  address: string;
}

type StateType = {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
  messageType: 'success' | 'error' | '';
  users: User[];
};


export default class RegisterForm extends Component<object, StateType> {
  nameInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      message: "",
      messageType: '',
      users: []
    };

    this.nameInputRef = createRef();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<StateType, keyof StateType>);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { name, email, password, address, users } = this.state;

    if (!name || !email || !password) {
      this.setState({
        message: "Tên sinh viên, Email và Mật khẩu không được để trống!",
        messageType: 'error'
      });
      return;
    }

    const isEmailExist = users.some((user: User) => user.email === email);
    if (isEmailExist) {
      this.setState({ 
        message: "Email đã tồn tại. Vui lòng chọn email khác!",
        messageType: 'error'
      });
      return;
    }

    const newUser: User = { name, email, password, address };
    const updatedUsers = [...users, newUser];

    console.log("Danh sách users:", updatedUsers);

    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công!",
      messageType: 'success',
      users: updatedUsers
    });

    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }

    setTimeout(() => {
      this.setState({ message: "", messageType: '' });
    }, 3000);
  };

  render() {
    return (
      <>
        <div className="register-container">
          <div className="register-card">
            <h2 className="form-title">Form Đăng Ký</h2>
            
            <div className="form-wrapper">
              <div className="input-group">
                <label className="form-label">Tên sinh viên</label>
                <input
                  type="text"
                  name="name"
                  ref={this.nameInputRef}
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="form-input"
                  placeholder="Nhập tên sinh viên"
                />
              </div>

              <div className="input-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-input"
                  placeholder="example@email.com"
                />
              </div>

              <div className="input-group">
                <label className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-input"
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <div className="input-group">
                <label className="form-label">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  className="form-input"
                  placeholder="Nhập địa chỉ (tùy chọn)"
                />
              </div>

              <button
                type="submit"
                onClick={this.handleSubmit}
                className="submit-button"
              >
                <span>Đăng ký</span>
              </button>
            </div>

            {this.state.message && (
              <div className={`message ${this.state.messageType}`}>
                {this.state.message}
              </div>
            )}

            {this.state.users.length > 0 && (
              <div className="users-list">
                <div className="users-title">
                  Danh sách người dùng đã đăng ký ({this.state.users.length})
                </div>
                {this.state.users.map((user, index) => (
                  <div key={index} className="user-item">
                    <div><strong>{user.name}</strong></div>
                    <div className="user-email">{user.email}</div>
                    {user.address && <div>{user.address}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}