import React, { Component } from "react";

type StateType = {
  progress: number;
  submittedProgress: number | null;
};

export default class ComponentRange extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      progress: 0,
      submittedProgress: null,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: Number(event.target.value) });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.setState({ submittedProgress: this.state.progress });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tiến độ hoàn thành: {this.state.submittedProgress ?? ""}%
            <br />
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.progress}
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
