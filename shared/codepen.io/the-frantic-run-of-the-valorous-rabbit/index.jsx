import React, { useState, useEffect } from "react";
import "./src/style.scss";

function App({ greeting, name }) {
  let _loaded = {};
  function addScript(url) {
    if (!_loaded[url]) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.addEventListener("load", function (event) {
        console.log("script loaded: ", event);
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

      main("https://cdnjs.cloudflare.com/ajax/libs/three.js/r80/three.js")
        .then((ret) => {
          console.log("ret: ", ret);
          //
          setTimeout(function () {
            let itens = [
              "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js",
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/264161/OrbitControls.js",
            ];

            console.log(` itens.length: ${itens.length} `);

            itens.forEach(function (item, index) {
              console.log(`index: ${index} - item: `, item);

              main(item)
                .then((ret) => {
                  //   console.log(
                  //     `index: ${index} - itens.length: ${itens.length} -item_ret: `,
                  //     item_ret
                  //   );

                  if (index === itens.length - 1) {
                    console.log(`script`);
                    setTimeout(function () {
                      require("./src/script.js");
                    }, 1000);
                  }
                })
                .catch(console.error);
            });
          }, 500);
          //
        })
        .catch(console.error);
    })();
    //
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='valorous-rabbit'>
      <div id='world' />
      <div id='gameoverInstructions'>Game Over</div>
      <div id='dist'>
        <div className='label'>distance</div>
        <div id='distValue'>000</div>
      </div>

      <div id='instructions'>
        Click to jump
        <span className='lightInstructions'>
          {" "}
          — Grab the carrots / avoid the hedgehogs
        </span>
      </div>

      <div id='credits'>
        <p>
          <a href='https://codepen.io/Yakudoo/' target='blank'>
            other codepens
          </a>{" "}
          |{" "}
          <a href='https://www.epic.net' target='blank'>
            epic.net
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
