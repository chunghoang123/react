import React, { Component } from "react";

type StateType = {
  time: Date;
};

export default class Clock extends Component<object, StateType> {
private timerID?: ReturnType<typeof setInterval>;

  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return (
      <div style={{ padding: "10px", border: "1px solid #ccc", display: "inline-block" }}>
        Thời gian hiện tại: {hours} : {minutes} : {seconds}
      </div>
    );
  }
}
