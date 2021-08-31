import React, { useState, useEffect } from "react";
import "./src/style.scss";

function App({ greeting, name }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    require("./src/script.js");
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='tiggr-qbdbmlm '>
      <button
        className='js-toggle-fullscreen-btn toggle-fullscreen-btn'
        aria-label='Enter fullscreen mode'
        hidden
      >
        <svg
          className='toggle-fullscreen-svg'
          width='28'
          height='28'
          viewBox='-2 -2 28 28'
        >
          <g className='icon-fullscreen-enter'>
            <path d='M 2 9 v -7 h 7' />
            <path d='M 22 9 v -7 h -7' />
            <path d='M 22 15 v 7 h -7' />
            <path d='M 2 15 v 7 h 7' />
          </g>

          <g className='icon-fullscreen-leave'>
            <path d='M 24 17 h -7 v 7' />
            <path d='M 0 17 h 7 v 7' />
            <path d='M 0 7 h 7 v -7' />
            <path d='M 24 7 h -7 v -7' />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default App;
