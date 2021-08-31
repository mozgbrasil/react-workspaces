import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// console.log("process.env: ", process.env);
// console.log(
//   'React->getOwnPropertyNames: ',
//   Object.getOwnPropertyNames(React).sort()
// );
// console.log("React.version: ", React.version);
// Object.getOwnPropertyNames(Chart)
//   .sort()
//   .forEach(function (val, idx, array) {
//     console.log(`React->${val}: `, Chart[val]);
//   });

// logs
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const parameters = {
  dsn: process.env.REACT_APP_SENTRY_DSN,
  // To set your release version
  //   release,
  integrations: [new Integrations.BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
};

Sentry.init(parameters);

// App
import "./components/bootstrap";
import Loadable from "@loadable/component";
import { SpinnerFlexButton as Loading } from "./components/Util";
let SplashScreen;
if (window.location.hash === "") {
  SplashScreen = Loadable(
    () => import("codepen.io/pl-intro-animation-w-gsap-timelinemax"),
    {
      fallback: <Loading />,
    }
  );
} else {
  SplashScreen = Loadable(() => import("./App"), {
    fallback: <Loading />,
  });
}

function App(props) {
  console.log("Index:", props);
  return (
    <div className='splash-screen'>
      <SplashScreen />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
