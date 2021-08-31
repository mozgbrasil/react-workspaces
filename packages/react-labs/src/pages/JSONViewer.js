import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

export default class WebApis extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor");
    this.state = {
      json: false,
    };
  }

  receiveMessage = (event) => {
    // console.log("JSONViewer", "receiveMessage: ", event);

    if (!event.data.from) {
      return;
    }

    if (event.data.from !== "mozg_content_scripts") {
      return;
    }

    //

    var header = document.getElementsByTagName("header")[0];
    // console.log("header: ", header);
    header.style = "display: none;";

    var footer = document.getElementsByTagName("footer")[0];
    footer.style = "display: none;";

    //

    // if (event.origin.startsWith("chrome-extension://")) {
    // The data was sent from your site.
    // Data sent with postMessage is stored in event.data:
    console.log("event.data: ", event.data);

    let obj = event.data.data;
    var json = JSON.stringify(obj);
    this.setState({ json: json });
    // } else {
    // The data was NOT sent from your site!
    // Be careful! Do not use it. This else branch is
    // here just for clarity, you usually shouldn't need it.
    //   return;
    // }
  };

  componentDidMount() {
    // console.log("componentDidMount: ", this);

    //

    let message = {
      from: "mozg_jsonviewer",
    };

    let targetOrigin = "*";

    window.postMessage(message, targetOrigin);

    //

    window.addEventListener("message", this.receiveMessage, false);

    // window.top.onload = function() {
    //   console.log("window.top.onload: ", arguments);
    //   let body = document.body.textContent.trim();
    //   console.log("body: ", body);
    // };

    //

    let obj = { a: 1, b: 2 };

    var json = JSON.stringify(obj);
    this.setState({ json: json });
    //
  }

  render() {
    // console.log("render: ", this);
    let jsonData = this.state.json;
    return (
      <>
        <div class='container-fluid'>
          <div class='card '>
            <div class='card-header text-center'>JSON</div>
            <div class='card-body'>
              <JSONPretty id='json-pretty' data={jsonData}></JSONPretty>
            </div>
            <div class='card-footer text-muted'>&nbsp;</div>
          </div>
        </div>
        <p>&nbsp;</p>
      </>
    );
  }
}
