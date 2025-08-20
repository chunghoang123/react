import React, { Component } from "react";
interface State {
  name: string;
}
    class Exercises01 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = { name: "Hoàng Văn Chung" };
    }
  render() {
    return (
      <div>
        <h1>Họ và tên: {this.state.name}</h1>
      </div>
    );
  }
}
export default Exercises01;
