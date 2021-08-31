import React from "react";
// import { SpinnerFlexButton as Loading } from "./components/Util";

var arrConsole = [];
var orig = console.log;
console.log = function log() {
  orig.apply(console, [
    `[${new Date().toISOString().replace("T", " ").replace(/\..+/, "")}]`,
    ...arguments,
  ]);
  arrConsole.push(...arguments);
};

export default class WebApis extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor");
    this.state = {
      json: false,
    };
  }

  componentDidMount() {
    // console.log("componentDidMount: ", this);

    //

    var ChromeSamples = {
      log: function () {
        var line = Array.prototype.slice
          .call(arguments)
          .map(function (argument) {
            return typeof argument === "string"
              ? argument
              : JSON.stringify(argument);
          })
          .join(" ");

        document.querySelector("#log").textContent += line + "\n";
      },

      clearLog: function () {
        document.querySelector("#log").textContent = "";
      },

      setStatus: function (status) {
        document.querySelector("#status").textContent = status;
      },

      setContent: function (newContent) {
        var content = document.querySelector("#content");
        while (content.hasChildNodes()) {
          content.removeChild(content.lastChild);
        }
        content.appendChild(newContent);
      },
    };

    // Add a global error event listener early on in the page load, to help ensure that browsers
    // which don't support specific functionality still end up displaying a meaningful message.
    window.addEventListener("error", function (error) {
      if (ChromeSamples && ChromeSamples.setStatus) {
        console.error(error);
        ChromeSamples.setStatus(
          error.message + " (Your browser may not support this feature.)"
        );
        error.preventDefault();
      }
    });

    // https://developer.mozilla.org/en-US/docs/Web/API

    // https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events

    if ("ondevicelight" in window) {
      window.addEventListener("devicelight", function (event) {
        var body = document.querySelector("body");
        if (event.value < 50) {
          body.classList.add("darklight");
          body.classList.remove("brightlight");
        } else {
          body.classList.add("brightlight");
          body.classList.remove("darklight");
        }
      });
    } else {
      console.log("devicelight event not supported");
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API

    // https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice

    if ("bluetooth" in navigator && navigator.bluetooth.requestDevice) {
      // Discovery options match any devices advertising:
      // . The standard heart rate service.
      // . Both 16-bit service IDs 0x1802 and 0x1803.
      // . A proprietary 128-bit UUID service c48e6067-5295-48d3-8d5c-0395f61792b1.
      // . Devices with name "ExampleName".
      // . Devices with name starting with "Prefix".
      //
      // And enables access to the battery service if devices
      // include it, even if devices do not advertise that service.
      let options = {
        filters: [
          { services: ["heart_rate"] },
          { services: [0x1802, 0x1803] },
          { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
          { name: "ExampleName" },
          { namePrefix: "Prefix" },
        ],
        optionalServices: ["battery_service"],
      };

      navigator.bluetooth
        .requestDevice(options)
        .then(function (device) {
          console.log("Name: " + device.name);
          // Do something with the device.
        })
        .catch(function (error) {
          console.log("Something went wrong. " + error);
        });
    } else {
      console.log("Fail: navigator.bluetooth.requestDevice");
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Request

    var request = "https://express.mozgbrasil.now.sh/";
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

    function geoFindMe() {
      const geo_status = document.querySelector("#geo_status");
      const geo_map_link = document.querySelector("#geo_map_link");

      geo_map_link.href = "";
      geo_map_link.textContent = "";

      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        geo_status.textContent = "";
        geo_map_link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        geo_map_link.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      }

      function error() {
        geo_status.textContent = "Unable to retrieve your location";
      }

      if (!navigator.geolocation) {
        geo_status.textContent = "Geolocation is not supported by your browser";
      } else {
        geo_status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }

    document.querySelector("#find-me").addEventListener("click", geoFindMe);

    // https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture

    var imageCapture;

    function onGetUserMediaButtonClick() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          document.querySelector("video").srcObject = mediaStream;

          const track = mediaStream.getVideoTracks()[0];
          imageCapture = new ImageCapture(track);
        })
        .catch((error) => console.log(error));
    }

    function onGrabFrameButtonClick() {
      imageCapture
        .grabFrame()
        .then((imageBitmap) => {
          const canvas = document.querySelector("#grabFrameCanvas");
          drawCanvas(canvas, imageBitmap);
        })
        .catch((error) => console.log(error));
    }

    function onTakePhotoButtonClick() {
      imageCapture
        .takePhoto()
        .then((blob) => createImageBitmap(blob))
        .then((imageBitmap) => {
          const canvas = document.querySelector("#takePhotoCanvas");
          drawCanvas(canvas, imageBitmap);
        })
        .catch((error) => console.log(error));
    }

    function drawCanvas(canvas, img) {
      canvas.width = getComputedStyle(canvas).width.split("px")[0];
      canvas.height = getComputedStyle(canvas).height.split("px")[0];
      let ratio = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      let x = (canvas.width - img.width * ratio) / 2;
      let y = (canvas.height - img.height * ratio) / 2;
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      canvas
        .getContext("2d")
        .drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          x,
          y,
          img.width * ratio,
          img.height * ratio
        );
    }

    document
      .querySelector("#getUserMediaButton")
      .addEventListener("click", onGetUserMediaButtonClick);
    document
      .querySelector("#grabFrameButton")
      .addEventListener("click", onGrabFrameButtonClick);
    document
      .querySelector("#takePhotoButton")
      .addEventListener("click", onTakePhotoButtonClick);

    // https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API

    function handlePermission() {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            report(result.state);
            // geoBtn.style.display = "none";
          } else if (result.state === "prompt") {
            report(result.state);
            // geoBtn.style.display = "none";
            // navigator.geolocation.getCurrentPosition(
            //   revealPosition,
            //   positionDenied,
            //   geoSettings
            // );
          } else if (result.state === "denied") {
            report(result.state);
            // geoBtn.style.display = "inline";
          }
          result.onchange = function () {
            report(result.state);
          };
        });
    }

    function report(state) {
      console.log("Permission " + state);
    }

    handlePermission();

    // https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events

    window.addEventListener("userproximity", function (event) {
      if (event.near) {
        // let's power off the screen
        navigator.mozPower.screenEnabled = false;
      } else {
        // Otherwise, let's power on the screen
        navigator.mozPower.screenEnabled = true;
      }
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API

    if ("vibrate" in window.navigator || "mozVibrate" in window.navigator) {
      window.navigator.vibrate(200); // vibrate for 200ms
    }

    // Write Json Console

    var obj = arrConsole;

    var filterConsole = [];

    // for (var prop in obj) {
    Object.entries(obj).forEach((entry) => {
      // let key = entry[0];
      let value = entry[1];
      // console.log("key: " + key + " = " + value + " / " + typeof value);
      var condition = typeof value === "string";
      // console.log("condition: ", condition);
      if (condition) {
        filterConsole.push(value);
      }
    });

    // console.log("filterConsole: ", filterConsole);

    obj = filterConsole;

    var json = JSON.stringify(obj);
    this.setState({ json: json });
    //
  }

  render() {
    // console.log("this: ", this);
    return (
      <>
        {(() => {
          // var object = Object.getOwnPropertyNames(window).sort();
          // console.log("object: ", object);
          // console.log("typeof object: ", typeof object);
          // var json = JSON.stringify(object);
          // console.log("json: ", json);
          // this.setState({ json: json });
        })()}
        <span>
          <hr />
        </span>
        Console
        <span>
          <hr />
        </span>
        <code>{this.state.json}</code>
        <span>
          <hr />
        </span>
        Geolocation
        <span>
          <hr />
        </span>
        <button id='find-me'>Show my location</button>
        <br />
        <p id='geo_status'>&nbsp;</p>
        <a
          id='geo_map_link'
          href='#top'
          target='_blank'
          rel='noopener noreferrer'
        >
          &nbsp;
        </a>
        <span>
          <hr />
        </span>
        ImageCapture
        <span>
          <hr />
        </span>
        <h1>Image Capture / Grab Frame - Take Photo Sample</h1>
        <div id='results'>
          <div>
            <video autoPlay=''></video>
            <button id='getUserMediaButton'>Get User Media</button>
          </div>
          <div>
            <canvas id='grabFrameCanvas' width='264' height='198'></canvas>
            <button id='grabFrameButton'>Grab Frame</button>
          </div>
          <div>
            <canvas id='takePhotoCanvas' width='264' height='198'></canvas>
            <button id='takePhotoButton'>Take Photo</button>
          </div>
        </div>
        <h3>Live Output</h3>
        <div id='output' className='output'>
          <div id='content'></div>
          <div id='status'></div>
          <pre id='log'></pre>
        </div>
        <span>
          <hr />
        </span>
      </>
    );
  }
}
