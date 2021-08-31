// import path from "path";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import StaticBackground from "./assets/backgrounds/tt0016847.jpeg";
import Lyon from "./assets/lyon.svg";
import LyonBig from "./assets/lyonBig.svg";
import "./style.scss";
import Loadable from "@loadable/component";
import { SpinnerFlexButton as Loading } from "@mozg/react-workspace/src/components/Util";
import { gsap, Power0, Power3, TimelineMax } from "gsap";
import $ from "jquery";

// Fix: Invalid property autoAlpha set to 0 Missing plugin? gsap.registerPlugin()
//without this line, method may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(gsap, Power0, Power3, TimelineMax);
//

// https://pt-br.reactjs.org/docs/hooks-effect.html

// const ShatteringImages = Loadable(
//   () => import("codepen.io/shattering-images"),
//   {
//     fallback: <Loading />
//   }
// );

const Diamonds = Loadable(
  () => import("codesandbox.io/floating-diamonds/src/App"),
  {
    fallback: <Loading />,
  }
);

let images = ["tt7458762", "tt7329656"];

let incremental_id = 0;

export default (props) => {
  const [count, setCount] = useState(0);
  const [randomImage, setRandomImage] = useState(null);

  const textJavascript = (props) => {
    // console.log("textJavascript: ", props);

    //

    function _onComplete() {
      $(".side-menu").show();
      console.log("%c - ", "background: black; color: white", `_onComplete`);
      //   let App = Loadable(() => import("@mozg/react-workspace/src/App"), {
      //     fallback: <Loading />,
      //   });
      //   ReactDOM.render(<App />, document.getElementById("root"));
      window.location.href = "/#/";
      window.location.reload(true);
    }

    // https://codepen.io/karlovidek/details/JvrZBG

    //EL's
    const $bg = $(".js-bg");
    const $heading = $(".js-heading");
    const $logoInverted = $(".js-logo-inverted");
    const $logoLeft = $(".js-logo-left");
    const $logoLeftInner = $logoLeft.find("span");
    const $logo = $(".js-logo");
    const $logoRight = $(".js-logo-right");
    const $logoRightInner = $logoRight.find("span");
    const $textContainer = $(".js-text-container");
    const $text = $(".js-text");
    const $restartButton = $(".js-restart");

    //TIMELINE
    const plTl = new TimelineMax({
      //paused: true,
      //delay: 3,
      onComplete: () => {
        $restartButton.addClass("is-active");
        _onComplete();
      },
    });

    plTl
      .add("start")
      .fromTo(
        $bg,
        0.4,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: Power3.easeOut,
        },
        "start"
      )

      .fromTo(
        $bg,
        1.8,
        {
          scale: 2,
          x: "-70%",
        },
        {
          scale: 1,
          x: "0%",
          ease: Power3.easeOut,
        },
        "start"
      )
      .to(
        $heading,
        0.6,
        {
          y: 0,
          ease: Power3.easeOut,
        },
        "-=0.4",
        "start"
      )
      .add("shiftRight", "+=0.4")
      .to(
        $logoInverted,
        0.8,
        {
          x: "50%",
          ease: Power3.easeOut,
        },
        "shiftRight"
      )

      .to(
        $bg,
        1,
        {
          x: "-=7%",
          ease: Power3.easeOut,
        },
        "shiftRight"
      )
      .to(
        $heading,
        0.8,
        {
          x: "+=35%",
          ease: Power3.easeOut,
        },
        "shiftRight"
      )
      .to(
        $logoRightInner,
        0.8,
        {
          x: "-100%",
          ease: Power3.easeOut,
        },
        "shiftRight"
      )
      .to(
        $logoLeftInner,
        0.8,
        {
          x: "100%",
          ease: Power3.easeOut,
        },
        "shiftRight"
      )
      .to(
        [$logoRight, $logoLeft],
        0.8,
        {
          width: 0,
          padding: 0,
          ease: Power3.easeOut,
        },
        "shiftRight"
      )
      .add("shiftLeft")
      .to(
        $heading,
        0.8,
        {
          x: "-=50%",
          ease: Power3.easeOut,
        },
        "shiftLeft"
      )
      .to(
        $textContainer,
        0.8,
        {
          scaleX: 1,
          ease: Power3.easeOut,
        },
        "shiftLeft"
      )
      .to(
        $text,
        1,
        {
          autoAlpha: 1,
          x: 0,
          ease: Power3.easeOut,
        },
        "shiftLeft"
      )
      .to(
        $bg,
        3,
        {
          x: "-=5%",
          ease: Power0.easeNone,
        },
        "shiftLeft"
      )
      .to(
        $logoInverted,
        2,
        {
          x: "-=2.5%",
          ease: Power0.easeNone,
        },
        "shiftLeft"
      );

    $restartButton.on("click", () => {
      plTl.restart();
    });

    //
  };

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(
    (props) => {
      console.log(`Intro GSAP useEffect: `, props);

      //
      textJavascript(props);
      //
      setRandomImage(StaticBackground);

      //
      async function DynamicImport() {
        const AsyncImport = Loadable((props) => import(`./${props.src}`));

        // read folder

        let req = require.context(
          "./assets/backgrounds",
          false, // Load files recursively. Pass false to skip recursion.
          /\.(png|jpe?g|svg)$/ // Match files ending with .md.
        );

        let keys = req.keys();
        let obj;

        obj = _.chain(keys)
          .map(function (value, index) {
            // console.log("value", value);
            var value = _.replace(value, "./", "");
            // console.log("value", value);
            return value;
          })
          .value();

        let length = obj.length - 1;
        let random = _.random(0, length);
        let item = obj[random];

        //

        let src = "assets/backgrounds/" + item;

        let p1 = AsyncImport.load({ src: src });
        console.log(`p1: `, p1);

        let p1then = await p1.then(
          function (value) {
            console.log("Success! p1: ", value);
            let url = value.default;
            setRandomImage(url);
            return value;
          },
          function (reason) {
            console.log("Error! p1:", reason);
            return reason;
          }
        );
        console.log(`p1then: `, p1then);

        return p1then;
      }
      DynamicImport();
      //
      //
    },
    [props]
  );

  console.log("Intro GSAP: ", props);

  return (
    <>
      <div className='pl'>
        {/* <i
          className="pl__bg js-bg"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        ></i>
        <ShatteringImages image={randomImage} /> */}

        <Diamonds image={randomImage} />

        <i className='pl__logo-inverted js-logo-inverted'>
          <img src={Lyon} />
        </i>

        <div className='pl__heading js-heading'>
          <div className='pl__logo'>
            <i className='pl__logo__left js-logo-left'>
              <span>Mozg</span>
            </i>
            <i className='pl__logo__center js-logo'>
              <span className='lion'>
                <img src={LyonBig} />
              </span>
              <span className='text-container js-text-container'>
                <p className='text-container__placeholder'>O futuro chegou</p>
              </span>
              <span className='text js-text'>O futuro chegou</span>
            </i>
            <i className='pl__logo__right js-logo-right'>
              <span>Brasil</span>
            </i>
          </div>
        </div>
      </div>

      <button
        className='button js-restart'
        onClick={(event) => handlerClick(event)}
        style={{ display: "none" }}
      >
        Prosseguir
      </button>
    </>
  );

  function IncrementalObjs() {
    //

    // console.log(`images: `, images);

    let obj = images;

    let length = obj.length - 1;
    // console.log(`length: `, length);

    setInterval(function () {
      //
      let item = obj[incremental_id];
      let url =
        "https://images.metahub.space/background/medium/" + item + "/img";
      console.log(`url (${incremental_id}): `, url);
      setRandomImage(url);
      incremental_id++;
      if (incremental_id > length) {
        incremental_id = 0;
      }
      //
    }, 1000);

    return true;
  }

  function handleOneClick() {
    console.log("handleOneClick:", this);
    //
    $(".js-next").addClass("is-active");
    //
    (function (_this) {
      "use strict";
      const App = Loadable(() => import("@mozg/react-workspace/src/App"), {
        fallback: <Loading />,
      });
      ReactDOM.render(<App />, document.getElementById("root"));
    })(this);
    //
  }

  function handleDoubleClick() {
    console.log("handleDoubleClick:", this);
    //
    setCount(count + 1);

    //
    IncrementalObjs();
    //
  }

  function handlerClick(event) {
    console.log("handlerClick:", this);
    console.log("event: ", event);
    console.log("event.shiftKey: ", event.shiftKey);

    if (event.shiftKey) {
      handleDoubleClick();
    } else {
      handleOneClick();
    }

    // e.preventDefault();
  }
};
