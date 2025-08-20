import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

interface State {
  name: string;
}

export default class Parent_Comp extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Hoàng Văn Chung", 
    };
  }

  render() {
    return (
     <div>
        <h1>Họ và tên component cha: {this.state.name}</h1>
        {/* Truyền dữ liệu xuống component con */}
        <Children_Comp name={this.state.name} />
      </div>
    )
  }
}
