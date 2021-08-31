import React, { useState, useEffect } from "react";
import "./src/style.scss";

function App({ greeting, name }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // require("./src/script.js");
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <div className='robinselmer-vJjbOZ'>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <h1>
          Error <span className='errorcode'>404</span>
        </h1>
        <p className='output'>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className='output'>
          Please try to <a href={process.env.PUBLIC_URL}>go back</a> or{" "}
          <a href={process.env.PUBLIC_URL}>return to the homepage</a>.
        </p>
        <p className='output'>Good luck.</p>
      </div>
    </div>
  );
}

export default App;
