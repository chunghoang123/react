import React, { Component } from "react";
import "./Timer.css";

type StateType = {
  time: number;
  isRunning: boolean;
};

export default class Timer extends Component<object, StateType> {
  private timerId: NodeJS.Timeout | null = null;

  constructor(props: object) {
    super(props);

    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  // Bắt đầu
  handleStart = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timerId = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time + 1 }));
      }, 1000);
    }
  };

  // Dừng
  handlePause = () => {
    if (this.state.isRunning && this.timerId) {
      clearInterval(this.timerId);
      this.setState({ isRunning: false });
    }
  };

  // Đặt lại
  handleEnd = () => {
    if (this.timerId) clearInterval(this.timerId);
    this.setState({ time: 0, isRunning: false });
  };

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <div className="timer-container">
          <div className="timer-header">
            <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
          </div>
          <div className="mode-selector">
            <button className="mode-btn active" data-mode="stopwatch">
              Bấm Giờ
            </button>
          </div>
          <div className="time-display" id="timeDisplay">
            {this.state.time}s
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill" />
          </div>
          <div className="controls">
            <button
              onClick={this.handleStart}
              className="control-btn start-btn"
              id="startBtn"
            >
              Bắt Đầu
            </button>
            <button
              onClick={this.handlePause}
              className="control-btn pause-btn"
              id="pauseBtn"
            >
              Tạm Dừng
            </button>
            <button
              onClick={this.handleEnd}
              className="control-btn reset-btn"
              id="resetBtn"
            >
              Đặt Lại
            </button>
          </div>
          <div className="status-message" id="statusMessage" />
        </div>
      </>
    );
  }
}
