import React, { useState, useEffect } from "react";
import "./src/style.scss";

function App({ greeting, name }) {
  let _loaded = {};
  function addScript(url) {
    if (!_loaded[url]) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.addEventListener("load", function (event) {
        console.log("script loaded: ", event.path[0].src);
      });
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
      //   document.head.appendChild(script);
      _loaded[url] = true;
      return _loaded;
    }
  }

  const [count, setCount] = useState(0);
  useEffect(() => {
    //
    (function () {
      async function main(url) {
        return addScript(url);
      }

      main("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js")
        .then((ret) => {
          console.log("ret: ", ret);
          //
          var intervalId = setInterval(function () {
            console.log("setInterval ret: ", ret);
            if (typeof TimelineMax !== "undefined") {
              clearInterval(intervalId);
              require("./src/script.js");
            }
          }, 1000);
          //
        })
        .catch(console.error);
    })();
    //
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='rocket-animation-with-gsap'>
      <div className='frame'>
        <div className='loader'>
          <div className='loader-ring'></div>

          <div className='rocket-wrapper'>
            <div className='trail-wrapper'>
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/trail.png'
                alt=''
                className='trail'
              />
            </div>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/small-rocket.png'
              alt=''
              className='rocket'
            />
          </div>

          <div className='clouds-wrapper'>
            <svg
              className='clouds'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 92 90.83'
            >
              <defs>
                <clipPath id='clip-path' transform='translate(1.75)'>
                  <circle cx='42.5' cy='42.5' r='42.5' fill='none' />
                </clipPath>
                <filter id='goo' colorInterpolationFilters='sRGB'>
                  <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='6'
                    result='blur'
                  />
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -11'
                    result='goo'
                  />
                  <feBlend in='SourceGraphic' in2='goo' />
                </filter>
                <filter id='blurMe'>
                  <feGaussianBlur in='SourceGraphic' stdDeviation='0.9' />
                </filter>
              </defs>
              <g clipPath='url(#clip-path)' fill='#eef2f3' filter='url(#goo)'>
                <g className='clouds-wrapper' filter='url(#blurMe)'>
                  <ellipse className='cloud' cx='40' cy='61.83' rx='7' ry='7' />
                  <ellipse className='cloud' cx='81' cy='68.83' rx='8' ry='8' />
                  <ellipse className='cloud' cx='6' cy='63.83' rx='6' ry='6' />
                  <ellipse
                    className='cloud'
                    cx='15'
                    cy='70.83'
                    rx='11'
                    ry='11'
                  />
                  <ellipse
                    className='cloud'
                    cx='65'
                    cy='74.83'
                    rx='11'
                    ry='11'
                  />
                  <ellipse
                    className='cloud'
                    cx='48'
                    cy='71.83'
                    rx='14'
                    ry='14'
                  />
                  <ellipse
                    className='cloud'
                    cx='34'
                    cy='75.83'
                    rx='16'
                    ry='16'
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
