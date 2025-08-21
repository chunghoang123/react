import React, { Component } from "react";
import ChildrentComponent from "./ChildrentComponent";

type StateTypes = {
  isShow: boolean;
};

export default class ParentComponent extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    return (
      <div>
        <h2>ParentComponent</h2>
        <button onClick={this.handleToggle}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>

        {this.state.isShow && <ChildrentComponent />}
      </div>
    );
  }
}
