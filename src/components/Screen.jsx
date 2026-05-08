import React, { Component } from "react";

class Screen extends Component {
  render() {
    return (
      <section className="screen">
        <img src="/hour-marks.png" alt="" />
        <div className="wrapper">
          <div className="timer"></div> <div className="dot"></div>
        </div>
        <div className="time">{this.props.recieveData}</div>
      </section>
    );
  }
}

export default Screen;
