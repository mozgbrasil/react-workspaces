import React, { useState, useEffect } from "react";
import Loadable from "@loadable/component";
import "./src/style.scss";

function App(props) {
  //   console.log("clash-of-clans-cards: App: ", props);

  const [count, setCount] = useState(0);
  const [randomImage, setRandomImage] = useState(null);

  function Card(props) {
    // console.log(`clash-of-clans-cards: Card: `, props);
    return (
      <div className='col'>
        <div className='clash-of-clans-cards'>
          <div className='clash-card barbarian'>
            <div className='clash-card__image clash-card__image--barbarian'>
              <img src={randomImage} alt='barbarian' />
            </div>
            <div className='clash-card__unit-name'>{props.title}</div>
            <div className='clash-card__unit-description'>
              {props.description}
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // require("./src/script.js");
    //
    async function DynamicImport() {
      const AsyncImport = Loadable((props) => import(`./${props.src}`));

      // read folder

      let req = require.context(
        "./assets",
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

      let src = "assets/" + item;

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
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='container'>
      <div className='row'>
        {props.itens.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
