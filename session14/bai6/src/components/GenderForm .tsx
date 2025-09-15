import React, { Component } from "react";

type StateType = {
  gender: string;
};

export default class GenderForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      gender: "", 
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.gender) {
      alert(`Giới tính bạn chọn: ${this.state.gender}`);
    } else {
      alert("Vui lòng chọn giới tính!");
    }
  };

  render() {
    return (
      <div style={{ maxWidth: "300px", margin: "30px auto" }}>
        <h3>Chọn giới tính</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Nam"
              onChange={this.handleChange}
              checked={this.state.gender === "Nam"}
            />
            <label htmlFor="male">Nam</label>
          </div>

          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Nữ"
              onChange={this.handleChange}
              checked={this.state.gender === "Nữ"}
            />
            <label htmlFor="female">Nữ</label>
          </div>

          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="Khác"
              onChange={this.handleChange}
              checked={this.state.gender === "Khác"}
            />
            <label htmlFor="other">Khác</label>
          </div>

          <button  style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
