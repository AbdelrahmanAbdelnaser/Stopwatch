import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <i className="fa-solid fa-stopwatch " style={{ color: "rgba(47, 98, 192, 0.95)", fontSize: "1.5rem" }}></i>
        <p>STOP WATCH</p>
        <span>Track Your Time With Precision</span>
      </header>
    );
  }
}

export default Header;
