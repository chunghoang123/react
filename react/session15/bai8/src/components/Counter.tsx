import React, { Component } from "react";

type StateType = {
  count: number;
};

export default class Counter extends Component<object, StateType> {
  private timerID?: ReturnType<typeof setInterval>;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // Sau khi component render -> bắt đầu chạy interval
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11, // từ 0 -> 10 rồi quay về 0
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Xoá interval khi component bị unmount
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div>
        <h2>Giá trị count: {this.state.count}</h2>
      </div>
    );
  }
}
