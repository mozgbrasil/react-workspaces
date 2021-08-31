/* global chrome */

// console.log = function() {};

// https://developer.chrome.com/extensions

//

console.log("starting: ", this);

//

// let obj = {
//   //   "window: ": window,
//   "chrome: ": chrome //
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

/* ----------------------- */
/* ----------------------- */
/* --- Event Listeners --- */

// https://github.com/explaain/savvy/blob/master/src/chrome/event-page.js

if (chrome) {
  chrome.runtime.onInstalled.addListener((details) => {
    console.log("chrome.runtime.onInstalled: ", details);
    //
    //   if (details && details.reason === "install")
    //     chrome.tabs.create({ url: "https://mozg.com.br/chrome-installed" }, tab => {
    //       console.log("New tab launched with https://mozg.com.br/chrome-installed");
    //     });
    //   else if (details && details.reason === "update")
    //     chrome.tabs.query({ url: "chrome://newtab/" }, tabs => {
    //       tabs.forEach(tab => {
    //         chrome.tabs.update(tab.id, {
    //           url: "chrome-extension://jejdapphghknjfjnjnbakipojmdcjgkd/newtab.html"
    //         });
    //       });
    //     });
    //
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      console.log("Number of tabs: " + tabs.length);
    });
    //
  });

  // onBeforeRequest
  //   chrome.webRequest.onBeforeRequest.addListener(
  //     function(e) {
  //       console.log("chrome.webRequest.onBeforeRequest.addListener: ", e);
  //       if ("main_frame" == e.type) {
  //         var t = e.url.split("?")[0].split("#")[0];

  //         if (t.endsWith(".m3u") || t.endsWith(".m3u8"))
  //           return {
  //             redirectUrl: chrome.runtime.getURL("index.html") + "#" + e.url
  //           };
  //       }
  //     },
  //     { urls: ["<all_urls>"] },
  //     ["blocking"]
  //   );

  // https://github.com/satendra02/react-chrome-extension/blob/master/public/app/background.js

  chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("chrome.browserAction.onClicked: ", tab);
    chrome.tabs.create({
      url: chrome.runtime.getURL("index.html"),
    });
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "clicked_browser_action",
      });
    });
  });

  // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //   console.log("chrome.runtime.onMessage request: ", request);
  //   console.log("chrome.runtime.onMessage sender: ", sender);
  //   console.log("chrome.runtime.onMessage sendResponse: ", sendResponse);
  // });
}

//

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  console.log("background", "receiveMessage: ", event);
}

//

/* ----------------------- */
/* ----------------------- */
/* ------ Functions ------ */

// const sendToChrome = data => {
//   console.log("sendToChrome': ", data);
//   new Promise((resolve, reject) => {
//     chrome.runtime.sendMessage(data, res => resolve(res)); // Needs catch => reject
//   });
// };

// const sendMessageToCurrentTab = messageData => {
//   console.log("sendMessageToCurrentTab: ", messageData);
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     if (tabs.length && tabs[0].id)
//       chrome.tabs.sendMessage(tabs[0].id, messageData, response => {});
//   });
// };

// const sendMessageToAllTabs = messageData => {
//   console.log("sendMessageToAllTabs:", messageData);
//   chrome.tabs.query({}, tabs => {
//     console.log("tabs (sendMessageToAllTabs)", tabs);
//     tabs.forEach(tab => {
//       console.log(
//         "sending message to tab " + tab.id + " (event-page.js):",
//         messageData
//       );
//       chrome.tabs.sendMessage(tab.id, messageData, response => {});
//     });
//   });
// };

//

//

//

/* ----------------------- */
/* ----------------------- */
/* ---- DOM Functions ---- */

//

/* ----------------------- */
/* ----------------------- */
/* --- ONLOAD Functions -- */

//

// https://github.com/rbrahul/Awesome-JSON-Viewer/blob/master/public/background.js

//

// https://github.com/vothaison/Steadfast-Chrome-Extension/blob/master/js/background/background.boa.js

// Port under tracking
// var ports = [];

// chrome.runtime.onConnect.addListener(function(port) {
//   console.log("chrome.runtime.onConnect.addListener: ", port);

//   if (port.name !== "boa") return;

//   console.log("chrome.runtime.onConnect.addListener: port RECEIVED");

//   if (ports.indexOf(port) === -1) {
//     ports.push(port);
//   }

//   console.log("chrome.runtime.onConnect.addListener: ports", ports);

//   port.onDisconnect.addListener(function(port) {
//     console.log("port.onDisconnect.addListener: ", arguments);
//     var index = ports.indexOf(port);
//     ports.splice(index, 1);
//     console.log("port.onDisconnect.addListener: ports", ports);
//   });

//   port.onMessage.addListener(function(msg) {
//     console.log("port.onMessage.addListener: ", msg);
//     switch (msg.request) {
//       //
//       // Coordinate native messaging
//       //
//       case "post-native-client":
//         console.log("port.onMessage", "post-native-client", msg);

//         chrome.runtime.sendNativeMessage(
//           "com.example.native",
//           {
//             ServiceName: msg.data.ServiceName,
//             Request: msg.data.Request
//           },

//           function(response) {
//             console.log(
//               "chrome.runtime.sendNativeMessag response-native-client",
//               response
//             );

//             let message = {
//               from: "mozg_background",
//               response: "response-complete-native-client",
//               data: response ? JSON.parse(response.data) : "(NO NATIVE DATA)"
//             };

//             let targetOrigin = "*";

//             port.postMessage(message, targetOrigin);
//           }
//         );

//         break;
//     }
//   });
// });

//

// context menu

//
