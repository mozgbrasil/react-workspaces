import React from "react";

export default class WebApis extends React.Component {
  componentDidMount() {
    console.log("componentDidMount: ", this);
  }

  render() {
    console.log("render: ", this);
    return <>Test</>;
  }
}
