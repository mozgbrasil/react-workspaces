// import React, { useEffect, useRef } from "react";

// function P5Wrapper(props) {
//   console.log("P5Wrapper.props: ", props);
//   let { sketch, exposeSketchCustomProps = () => {} } = props;
//   let p5Wrapper = useRef(null);
//   let p5Instance = null;

//   useEffect(() => {
//     console.log("P5Wrapper->useEffect->require");
//     // hack to import p5 because SSR
//     const p5 = require("p5");

//     console.log("P5Wrapper.p5: ", p5);
//     console.log(
//       "P5Wrapper.p5.functions: ",
//       Object.getOwnPropertyNames(p5)
//         .sort()
//         .filter(function(p) {
//           // var condition = typeof p5[p] === "function";
//           // var condition = false;
//           // if(){}
//           var condition = true;
//           return condition;
//         })
//     );
//     // console.log(
//     //   "P5Wrapper.p5.Vector: ",
//     //   Object.getOwnPropertyNames(p5.Vector)
//     //     .sort()
//     //     .filter(function(p) {
//     //       // var condition = typeof p5[p] === "function";
//     //       var condition = true;
//     //       return condition;
//     //     })
//     // // );

//     // window.p5 = p5;

//     // console.log("window.p5: ", window.p5);

//     // console.log(
//     //   "P5Wrapper.window: ",
//     //   Object.getOwnPropertyNames(window)
//     //     .sort()
//     //     .filter(function(p) {
//     //       // var condition = typeof p5[p] === "function";
//     //       var condition = true;
//     //       return condition;
//     //     })
//     // );

//     // console.log("P5Wrapper.sketch: ", sketch);
//     // console.log("P5Wrapper.p5Wrapper.current: ", p5Wrapper.current);

//     p5Instance = new p5(sketch, p5Wrapper.current);
//   }, []);

//   useEffect(() => {
//     console.log("P5Wrapper->useEffect->setSketchProps");
//     if (p5Instance && p5Instance.setSketchProps) {
//       p5Instance.setSketchProps(props);
//     }
//   });

//   useEffect(() => {
//     console.log("P5Wrapper->useEffect->exposeSketchCustomProps");
//     exposeSketchCustomProps(p5Instance.customProps);
//   }, []);

//   return <div className="p5div" ref={p5Wrapper} />;
// }

// export default P5Wrapper;

//
//
//

/* This code is from React-p5-wrapper by NeroCor
https://github.com/NeroCor/react-p5-wrapper
*/
import React from "react";
if (process.env.NODE_ENV === "production") {
  var p5 = require("p5/lib/p5.min");
} else {
  /* using unminified slows down animation a lot
     so use p5.min.js if you want the animation to be fast.
     Unminified may still be helpful for debugging so leaving it
     on as default in dev build */
  var p5 = require("p5");
}

console.log("P5Wrapper.p5: ", p5);
console.log(
  "P5Wrapper.p5.functions: ",
  Object.getOwnPropertyNames(p5)
    .sort()
    .filter(function (p) {
      // var condition = typeof p5[p] === "function";
      // var condition = false;
      // if(){}
      var condition = true;
      return condition;
    })
);

class P5Wrapper extends React.Component {
  componentDidMount() {
    console.log("P5Wrapper->componentDidMount");
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if (this.props.sketch !== newprops.sketch) {
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    return <div ref={(wrapper) => (this.wrapper = wrapper)}></div>;
  }
}

export default P5Wrapper;
