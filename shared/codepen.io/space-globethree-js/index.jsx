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

      main("https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js")
        .then((ret) => {
          console.log("ret: ", ret);

          //
          var intervalId = setInterval(function () {
            console.log("setInterval ret: ", ret);
            if (typeof THREE !== "undefined") {
              clearInterval(intervalId);
              //

              let itens = [
                "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/controls/OrbitControls.js",
                "https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js",
              ];

              // console.log(` itens.length: ${itens.length} `);

              itens.forEach(function (item, index) {
                //   console.log(`index: ${index} - item: `, item);

                main(item)
                  .then((item_ret) => {
                    //   console.log(
                    //     `index: ${index} - itens.length: ${itens.length} -item_ret: `,
                    //     item_ret
                    //   );

                    if (index === itens.length - 1) {
                      console.log(`script`);
                      setTimeout(function () {
                        console.log(`script`);
                        require("./src/script.js");
                      }, 1000);
                    }
                  })
                  .catch(console.error);
              });
              //
            }
          }, 1000);
          //
        })
        .catch(console.error);
    })();
    //
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='space-globethree-js'>
      <div id='canvas_container'></div>

      {/* <button id='fullscr'>Go Fullscreen</button> */}
    </div>
  );
}

export default App;
