import React, { Component } from "react";

class Laps extends Component {
  render() {
    return (
      <div className="container">
        <div className="laps">
          <div className="lap-title">
            <div>
              <i className="fa-solid fa-stopwatch " style={{ color: "white" }}></i> LAP HISTORY
            </div>
            <div className="number"> LAPS</div>
          </div>
          <div id="container"></div>
        </div>
      </div>
    );
  }
}

export default Laps;
