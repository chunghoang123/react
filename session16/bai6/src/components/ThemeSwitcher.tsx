import React, { Component } from "react";

type StateType = {
  isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false, // giá trị ban đầu
    };
  }

  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    const { isDarkMode } = this.state;

    const styles: React.CSSProperties = {
      backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.3s ease",
    };

    return (
      <div style={styles}>
        <h1>
          {isDarkMode
            ? "🌙 Chế độ Tối đang bật"
            : "☀️ Chế độ Sáng đang bật"}
        </h1>
        <button
          onClick={this.toggleTheme}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}
