import React, { Component } from "react";

type StateType = {
  message: string;
};

export default class ExampleComponent extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      message: "Học code để đi làm",
    };
  }

  handleClick = () => {
    this.setState({
      message: "Học code sẽ thành công. Cố lên!!!",
    });

    console.log("State sau khi click:", this.state.message);
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate được gọi => return false");
    return false; 
  }

  render() {
    console.log("Render với message:", this.state.message);
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
