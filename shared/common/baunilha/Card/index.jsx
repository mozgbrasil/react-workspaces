import React, { useState, useEffect } from "react";
import Loadable from "@loadable/component";
import "./style.scss";

function App(props) {
  //   console.log("BootCard: App: ", props);

  const [count, setCount] = useState(0);
  const [randomImage, setRandomImage] = useState(null);

  function Card(props) {
    // console.log(`BootCard: Card: `, props);
    return (
      <div className='col-sm-6 col-md-4'>
        <div className='card'>
          <img
            className='card-img-top'
            src='https://mozg.com.br/assets/images/free-stock-photos.gif'
          />
          <div className='card-block'>
            <figure className='card-profile'>
              <img
                alt=''
                className='card-profile-avatar'
                src='https://mozg.com.br/assets/images/logos/theme-logo-white.png'
              />
            </figure>
            <h4 className='card-title mt-3' id='distros'>
              {props.title}
            </h4>
            {/* <div className='card-meta'>&nbsp;</div> */}
            <div className='card-text'>{props.description}</div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // require("./src/script.js");
    //
    //
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='bootstrap-card'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              {props.itens.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
