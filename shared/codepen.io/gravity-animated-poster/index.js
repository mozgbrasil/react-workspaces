import React, { Component } from "react";
import "./style.css";

export default class extends Component {
  constructor(props, context) {
    super(props, context);
    // console.log(
    //   `constructor ${Object.getOwnPropertyNames(window).sort().length}`
    // );
  }

  componentDidMount() {
    // console.log("componentDidMount: ", this);
    require("./script.js");
  }

  render() {
    return (
      <>
        <div id='parent-stars-gravity'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>

        {/* <div id="_horizon">
          <div className="glow"></div>
        </div>
        <div id="_earth"></div>
        <div id="title">GRAVITY</div>
        <div id="subtitle">
          <span>DONT</span>
          <span>LET</span>
          <span>GO</span>
        </div> */}
      </>
    );
  }
}
