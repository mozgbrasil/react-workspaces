/* global chrome */

console.log = function () {};

// https://developer.chrome.com/extensions/content_scripts

//

console.log("starting: content_script.js");

//

let obj = {
  //   "window: ": window,
  "chrome: ": chrome, // web = (4) ["app", "csi", "loadTimes", "runtime"] | web-extension = (3) ["app", "csi", "loadTimes"]
  //   "chrome.app: ": chrome.app,
  //   "chrome.csi: ": chrome.csi,
  //   "chrome.runtime: ": chrome.runtime,
  //   "chrome.loadTimes: ": chrome.loadTimes
};

for (var [key, value] of Object.entries(obj)) {
  let label = key;
  console.log(`${label}: `, Object.getOwnPropertyNames(value).sort());
}

//

const getPageText = () => document.body.innerText;
const getUrl = () => window.location.href;
const getBaseUrl = () => window.location.host.replace("www.", "");
const collectPageData = () => {
  return {
    pageText: getPageText(),
    url: getUrl(),
    baseUrl: getBaseUrl(),
  };
};

//
// Just draw a border round the document.body.

// document.body.style.border = "1px solid rgb(68, 130, 255)";

//

/* ----------------------- */
/* ----------------------- */
/* --- Event Listeners --- */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("chrome.runtime.onMessage request: ", request);
  console.log("chrome.runtime.onMessage sender: ", sender);
  console.log("chrome.runtime.onMessage sendResponse: ", sendResponse);
});

//

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  console.log("content_script", "receiveMessage: ", event);
}

//

/* ----------------------- */
/* ----------------------- */
/* ------ Functions ------ */

const sendToChrome = (msg) => {
  let promise = new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(msg, (res) => {
      resolve(res);
    });
  });
  return promise;
};

//

/* ----------------------- */
/* ----------------------- */
/* ---- DOM Functions ---- */

// https://github.com/explaain/savvy/blob/master/src/chrome/content-script.js

/* ----------------------- */
/* ----------------------- */
/* --- ONLOAD Functions -- */

//

var bodyChildren = document.body.childNodes;
var pre = bodyChildren[0];
var json = pre.innerHTML;
var domain = document.domain;
var request = { domain: domain, json: json };

// console.log("document.body: ", document.body);

const getPageResults = () => {
  console.log("getPageResults': ");
  new Promise((resolve, reject) => {
    console.log("request: ", request);
    sendToChrome(request)
      .then((response) => {
        console.log(response);
        resolve();
      })
      .catch(reject);
  });
};

// getPageResults();

//

// https://github.com/rbrahul/Awesome-JSON-Viewer/blob/master/public/contentScript.js

function initApplication() {
  console.log("initApplication: ");

  //

  document.body.removeChild(pre); // Remove <pre>

  //

  // script

  //   var scriptNode = document.createElement("script");
  //   scriptNode.setAttribute("src", "https://unpkg.com/x-frame-bypass");
  //   scriptNode.setAttribute("type", "module");

  //   document.head.appendChild(scriptNode);

  // style
  var styleNode = document.createElement("style");
  styleNode.innerHTML = `
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
  `;

  document.head.appendChild(styleNode);

  //

  let elemNode = document.createElement("iframe");
  elemNode.id = "iframe_mozg";
  document.body.appendChild(elemNode);

  let url = document.location.href; //  + "?url=" + encodeURIComponent(url)
  let iframeEl = document.getElementById(elemNode.id);
  iframeEl.allow =
    "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; usb;";
  iframeEl.sandbox =
    "allow-modals allow-forms allow-popups allow-scripts allow-same-origin";
  iframeEl.setAttribute("allowFullScreen", "");
  iframeEl.width = "100%";
  iframeEl.height = "100%";
  iframeEl.style = "border: 0;border-radius: 4px;";
  //   iframeEl.setAttribute("is", "x-frame-bypass");
  iframeEl.src = chrome.runtime.getURL("index.html#/react-labs/jsonviewer");

  iframeEl.addEventListener("load", function () {
    console.log('iframeWindow.addEventListener("load"', arguments);

    //

    let iframeWindow = iframeEl.contentWindow;

    let message = {
      from: "mozg_content_scripts",
      response: "response-complete-native-client",
      data: JSON.parse(json),
    };

    let targetOrigin = "*";

    iframeWindow.postMessage(message, targetOrigin);

    //

    let obj = {
      iframeWindow: iframeWindow,
    };

    for (var [key, value] of Object.entries(obj)) {
      // console.log(`key: ${key} - value: ${value}`);
      let label = key;
      // console.log("label typeof: ", typeof label);
      // console.log("value typeof: ", typeof value);
      console.log(`${label}: `, Object.getOwnPropertyNames(value).sort());
    }

    //
  });

  console.log("iframeEl: ", iframeEl);
}

//

function isJSONResponsePageOnly() {
  console.log("isJSONResponsePageOnly: ");
  var content = document.body.textContent.trim();
  //   console.log("content: ", content);
  try {
    JSON.parse(content);
    return true;
  } catch (e) {
    console.log("e.message: ", e.message);
    // console.log(`e: `, Object.getOwnPropertyNames(e).sort());
    return false;
  }
}

//

var url = document.location;
url = url + (/\?/.test(url) ? "&" : "?") + new Date().getTime();

//

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

function handleEvent(e) {
  console.log(`${e.type}: ${e.loaded} bytes transferred`);
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

function runXHR(url) {
  const xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
    // if(request.readyState === XMLHttpRequest.DONE) {?
    if (this.readyState == this.HEADERS_RECEIVED) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        console.log(
          "The request has been completed successfully: ",
          xhr.responseText
        );
        // Get the raw header string
        var headers = xhr.getAllResponseHeaders();

        // Convert the header string into an array
        // of individual headers
        var arr = headers.trim().split(/[\r\n]+/);

        // Create a map of header names to values
        var headerMap = {};
        arr.forEach(function (line) {
          var parts = line.split(": ");
          var header = parts.shift();
          var value = parts.join(": ");
          headerMap[header] = value;
        });

        console.log(`headerMap: `, headerMap);
        let xFrameOptions = headerMap["x-frame-options"];

        console.log(`xFrameOptions: `, xFrameOptions);
        if (xFrameOptions != "deny") {
          if (isJSONResponsePageOnly()) {
            chrome.runtime.sendMessage({ action: "give_me_options" });
            initApplication();
          }
        }
      } else {
        //
        console.log("Oh no! There has been an error with the request!");
      }
    }
  };

  xhr.addEventListener("timeout", () => {
    console.error("Timeout!!");
  });

  xhr.send();

  return xhr;
}

runXHR(url);

//
