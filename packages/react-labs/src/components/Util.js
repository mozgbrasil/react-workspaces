import _ from "lodash";
import React from "react";

export const NikhilLoader = () => (
  // https://codepen.io/nikhil8krishnan/pen/rVoXJa
  // CodePen - SVG Loader Animation - Nikhil Krishnan
  <svg
    className='svg-loader-animation'
    version='1.1'
    id='L7'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 100 100'
    enableBackground='new 0 0 100 100'
    xmlSpace='preserve'
  >
    <path
      fill='#fff'
      d='M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z'
      transform='rotate(230.655 50 50)'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='2s'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      ></animateTransform>
    </path>
    <path
      fill='#fff'
      d='M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'
      transform='rotate(-101.31 50 50)'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='1s'
        from='0 50 50'
        to='-360 50 50'
        repeatCount='indefinite'
      ></animateTransform>
    </path>
    <path
      fill='#fff'
      d='M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z'
      transform='rotate(230.655 50 50)'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='2s'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      ></animateTransform>
    </path>
  </svg>
);

export const SpinnerColors = () => (
  <div className='spinner-border text-info' role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
);

export const SpinnerFlex = () => (
  <div className='d-flex justify-content-center bootom-right'>
    <div className='spinner-border' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
);

export const SpinnerFlexButton = () => (
  <div className='d-flex justify-content-center bootom-right'>
    <button className='btn btn-primary' type='button' disabled>
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      ></span>
      <span className='sr-only'>Loading...</span>
    </button>
  </div>
);

export class CCLoader extends React.Component {
  render() {
    // console.log("this: ", this);
    return (
      <>
        <div className='spinner-border text-info' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </>
    );
  }
}

export const StartupJs = (e) => {
  //

  // console.log = function() {};

  //

  // let obj = [{ component: RainbowRotatingDots }, { component: PureCssEye }];
  // // console.log("obj: ", obj);
  // let length = obj.length - 1;
  // // console.log("keys: ", keys);
  // let random = _.random(0, length);
  // // console.log("random: ", random);
  // let BackgroungComponent = obj[random].component;
  // // console.log("BackgroungComponent: ", BackgroungComponent);

  // const Loading = () => {
  //   return (
  //     <>
  //       <BackgroungComponent />
  //     </>
  //   );
  // };

  // const App = Loadable(() => pMinDelay(import("./App"), 1000), {
  //   fallback: <Loading />
  // });

  // const App = Loadable(() => import("./App"), {
  //   fallback: <Loading />
  // });

  // const App = Loadable(() => pMinDelay(import("./App"), 1000), {
  //   fallback: <Loading />
  // });

  // const App = () => {
  //   return <div>Hello World!</div>;
  // };

  // console.log("location: ", window.location);

  // window.__MOZG = [];

  // console.log("__dirname: ", __dirname);
  // console.log("__filename: ", __filename);
  // console.log("global: ", global);

  // let obj = {
  //   window: window,
  //   global: global,
  //   "$.fn": $.fn
  // };

  // for (var [key, value] of Object.entries(obj)) {
  //   let label = key;
  //   console.log(`${label}: `, Object.getOwnPropertyNames(value).sort());
  //   console.log(`${label}: `, Object.getOwnPropertySymbols(value).sort());
  // }

  //   (function() {
  //     "use strict";

  // })();

  //   obj = req.keys().map(req);

  //   console.log("obj", obj);

  //   // obj = _.chain(obj)
  //   //   .map(function(value, index) {
  //   //     // console.log("value", value);
  //   //     var value = _.replace(value, "/react-labs/static/media/", "");
  //   //     // console.log("value", value);
  //   //     return value;
  //   //   })
  //   //   .value();

  //   console.log("obj", obj);
  //   console.log("obj", typeof obj);

  //

  //   let obj = {
  //     window: window
  //   };

  //   for (var [key, value] of Object.entries(obj)) {
  //     let label = key;
  //     console.log(`${label}: `, Object.getOwnPropertyNames(value).sort());
  //   }

  //

  //   if (window.__MOZG) {
  //     let WimdowGetOwnPropertyNames_MOZG =
  //       window.__MOZG.WimdowGetOwnPropertyNames;

  //     let difference = _.difference(
  //       WimdowGetOwnPropertyNames,
  //       WimdowGetOwnPropertyNames_MOZG
  //     );
  //     console.log("difference in index.js: ", difference);
  //   }

  //   console.log("index", `window: `, Object.getOwnPropertyNames(window).sort());
  //   console.log("index", `window.__MOZG: `, window.__MOZG);
  //   console.log(
  //     "index",
  //     `window.__MOZG: `,
  //     Object.getOwnPropertyNames(window.__MOZG).sort()
  //   );

  //

  // let arrConsole = [];
  // let orig = console.log;
  // console.log = function log() {
  //   orig.apply(console, [
  //     `[${new Date()
  //       .toISOString()
  //       .replace("T", " ")
  //       .replace(/\..+/, "")}]`,
  //     ...arguments
  //   ]);
  //   arrConsole.push(...arguments);
  // };

  //

  //   console.log("process: ", process);
  //   console.log("process.env: ", process.env);

  //

  let message = {
    from: "mozg_index",
  };

  let targetOrigin = "*";

  window.postMessage(message, targetOrigin);

  //

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {
    //   console.log("index", "receiveMessage: ", event);
  }

  //
};

export const DumpVars = () => {
  let obj = {
    "window: ": window,
  };

  for (var [key, value] of Object.entries(obj)) {
    let obj = value;
    let label = key;
    obj = Object.getOwnPropertyNames(obj).sort();
    console.log(`${label}: `, obj);
    //
    let filter = _.chain(obj)
      .map(function (item, index) {
        //   console.log("arguments", arguments);
        //   console.log("item: ", item);
        let condition = item.startsWith("i") ? item : "";
        //   console.log("condition: ", condition);
        return condition;
      })
      .compact()
      .value();
    console.log("filter: ", filter);
  }
};

// https://gist.github.com/kelvearagao/87dd59958ca9fa22118a
/**
 * Recebe um data no formato dd/mm/yyyy e retorna yyyy-mm-dd.
 *
 * @param string date - Data no formato 'dd/mm/yyyy'.
 * @return string - Data no formato 'yyyy-mm-dd'.
 */
export function dateToEN(date) {
  return date.split("/").reverse().join("-");
}

export const getDifferenceProperties = () => {
  let WimdowGetOwnPropertyNames_MOZG = window.__MOZG.WimdowGetOwnPropertyNames;
  let WimdowGetOwnPropertyNames = Object.getOwnPropertyNames(window).sort();
  let difference = _.difference(
    WimdowGetOwnPropertyNames,
    WimdowGetOwnPropertyNames_MOZG
  );
  console.log("difference: ", difference);
};

export function getFuncName() {
  var e = new Error("dummy");
  var stack = e.stack
    .split("\n")[2]
    // " at functionName ( ..." => "functionName"
    .replace(/^\s+at\s+(.+?)\s.+/g, "$1");

  // console.log("e: ", e);
  // console.log("stack: ", stack);
  console.log("%c - ", "background: #222; color: yellow", stack);

  return stack;
}
