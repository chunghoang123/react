import React, { Component } from "react";

type StateType = {
  birthday: string;
  submittedDate: string;
};

export default class ComponentDate extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      birthday: "",
      submittedDate: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.setState({ submittedDate: this.state.birthday });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        {this.state.submittedDate && (
          <div style={{ marginBottom: "10px" }}>
            <strong>Ngày sinh: {this.state.submittedDate}</strong>
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <label>
            Ngày sinh:{" "}
            <input
              type="date"
              value={this.state.birthday}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
