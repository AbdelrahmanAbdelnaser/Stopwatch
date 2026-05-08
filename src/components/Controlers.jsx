import React, { Component, createElement } from "react";

class Controlers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  number = 1;

  toggleAnimation() {
    let animation = document.querySelector(".dot");
    animation.classList.toggle("animation");
  }
  startStopWatch = () => {
    this.props.start();
  };
  startWithAnimation = () => {
    this.toggleAnimation();
    this.startStopWatch();
    let startBtn = document.querySelector("#startBtn");
    startBtn.setAttribute("disabled", "true");
  };
  reset = () => {
    let container = document.querySelector("#container");
    container.innerHTML = "";
    let animation = document.querySelector(".dot");
    animation.classList.remove("animation");
    this.props.stopInterval();
    let startBtn = document.querySelector("#startBtn");
    startBtn.removeAttribute("disabled");

    document.querySelector(".number").textContent = `LAPS`;
    this.number = 1;
  };

  createLaps = () => {
    let lap = this.props.lap();
    let container = document.querySelector("#container");
    let div = document.createElement("div");
    div.classList.add("lap");
    div.innerHTML = `
    <div class="num-contain"><div class="num">${this.number}</div> LAP${this.number}</div>
    <div> ${lap}</div>
    `;
    container.prepend(div);
    document.querySelector(".number").textContent = `
    ${this.number} LAPS
    `;
    this.number = this.number + 1;
  };
  pause = () => {
    this.props.pause();
    let startBtn = document.querySelector("#startBtn");
    startBtn.removeAttribute("disabled");
    let animation = document.querySelector(".dot");
    animation.classList.remove("animation");
  };
  render() {
    return (
      <div className="Controllers">
        <button id="startBtn" onClick={this.startWithAnimation}>
          ▶ Start
        </button>
        <button id="stop" onClick={this.pause}>
          ⏸ Stop
        </button>
        <button id="lap" onClick={this.createLaps}>
          ⚑ Lap
        </button>
        <button id="restBtn" onClick={this.reset}>
          ⟳ Rest
        </button>
      </div>
    );
  }
}
export default Controlers;
