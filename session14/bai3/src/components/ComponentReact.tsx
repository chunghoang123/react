import React, { Component } from "react";

type State = {
  message: string;
};

export default class ComponentReact extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      message: "Company: Rikkei Academy",
    };
  }

  handleClick = () => {
    this.setState({ message: "Company:RikkeiSoft" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Change state</button>
      </div>
    );
  }
}
