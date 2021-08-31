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

      main("https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js")
        .then((ret) => {
          console.log("ret: ", ret);
          //
          var intervalId = setInterval(function () {
            console.log("setInterval ret: ", ret);
            if (typeof THREE !== "undefined") {
              clearInterval(intervalId);
              console.log(`script`);
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
    <div className='tinypolyworldthreejs'>
      <div id='world'></div>
    </div>
  );
}

export default App;
