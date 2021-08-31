//

// console.log = function() {};

// console.log("starting: ", this);

var __MOZG = [];
__MOZG.WimdowGetOwnPropertyNames = Object.getOwnPropertyNames(window).sort();

//

// let obj = {
//   //   "window: ": window,
//   "chrome: ": chrome // web = (4) ["app", "csi", "loadTimes", "runtime"] | web-extension = (3) ["app", "csi", "loadTimes"]
//   //   "chrome.app: ": chrome.app,
//   //   "chrome.csi: ": chrome.csi,
//   //   "chrome.runtime: ": chrome.runtime,
//   //   "chrome.loadTimes: ": chrome.loadTimes
// };

// for (var [key, value] of Object.entries(obj)) {
//   let label = key;
//   console.log(`${label}: `, Object.getOwnPropertyNames(value).sort());
// }

//

// let WimdowGetOwnPropertyNames = Object.getOwnPropertyNames(window).sort();
// // console.log("WimdowGetOwnPropertyNames: ", WimdowGetOwnPropertyNames);

// if (window.__MOZG.WimdowGetOwnPropertyNames) {
//   let WimdowGetOwnPropertyNames_MOZG = window.__MOZG.WimdowGetOwnPropertyNames;

//   let difference = WimdowGetOwnPropertyNames.filter(
//     x => !WimdowGetOwnPropertyNames_MOZG.includes(x)
//   ).concat(
//     WimdowGetOwnPropertyNames_MOZG.filter(
//       x => !WimdowGetOwnPropertyNames.includes(x)
//     )
//   );

//   //   console.log("difference: ", difference);
// }

//

/* ----------------------- */
/* ----------------------- */
/* --- Event Listeners --- */

//

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  //   console.log("main", "receiveMessage: ", event);
  //   event.source.window.postMessage("from_fmain", "*");
}

//

// if (window.location.protocol == "chrome-extension:") {
//   //
//   //   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   //     // console.log("chrome.runtime.onMessage request: ", request);
//   //     // console.log("chrome.runtime.onMessage sender: ", sender);
//   //     // console.log("chrome.runtime.onMessage sendResponse: ", sendResponse);
//   //   });
//   //
//   var extensionId = chrome.runtime.id;
//   var connectInfo = {
//     name: "Sample Communication"
//   };

//   //   console.log("extensionId: ", extensionId);

//   var port = chrome.runtime.connect(extensionId, connectInfo);

//   //   console.log("port: ", port);

//   let message = {
//     from: "mozg_main_mjs",
//     data: "Request Modified Value"
//   };

//   let targetOrigin = "*";

//   port.postMessage(message, targetOrigin);

//   port.onMessage.addListener(function(msg) {
//     // console.log("port.onMessage:  " + msg);
//     // console.log("Modified Value recieved is: " + msg);
//   });
//   //
// }

//

/* ----------------------- */
/* ----------------------- */
/* ------ Functions ------ */

/* ----------------------- */
/* ----------------------- */
/* ---- DOM Functions ---- */

/* ----------------------- */
/* ----------------------- */
/* --- ONLOAD Functions -- */
