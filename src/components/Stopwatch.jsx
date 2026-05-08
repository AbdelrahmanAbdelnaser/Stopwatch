import React, { Component } from "react";
import Screen from "./Screen";
import Header from "./Header";
import Controlers from "./Controlers";
import Laps from "./Laps";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: `00:00:00:00` };
  }

  interval = null;
  startTime = 0;
  pausedTime = 0;

  reset = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.pausedTime = 0;

    this.setState({
      timer: "00:00:00:00",
    });
  };

  stopwatch = () => {
    if (this.interval) return;

    if (this.pausedTime > 0) {
      this.resume();
      return;
    }

    this.startTime = Date.now();

    this.interval = setInterval(() => {
      const now = Date.now();
      const time = now - this.startTime;

      const h = String(Math.floor(time / 3600000)).padStart(2, "0");
      const m = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
      const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

      this.setState({
        timer: `${h}:${m}:${s}:${ms}`,
      });
    }, 10);
  };

  pause = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.pausedTime = Date.now() - this.startTime;
  };
  resume = () => {
    this.startTime = Date.now() - this.pausedTime;
    this.interval = setInterval(() => {
      const now = Date.now();
      const time = now - this.startTime;
      const h = String(Math.floor(time / 3600000)).padStart(2, "0");
      const m = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
      const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
      let result = `${h}:${m}:${s}:${ms}`;

      this.setState({ timer: result });
    }, 10);
    this.pausedTime = 0;
  };

  lap = () => {
    let lap = this.state.timer;
    return lap;
  };

  render() {
    return (
      <>
        <Header />
        <Screen recieveData={this.state.timer} />
        <Controlers
          start={this.stopwatch}
          stopInterval={this.reset}
          lap={this.lap}
          pause={this.pause}
          resume={this.resume}
        />
        <Laps />
      </>
    );
  }
}

export default Stopwatch;
