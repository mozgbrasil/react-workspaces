import React, { useState, useEffect } from "react";
import "./src/style.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

function App({ greeting, name }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //
    require("./src/script.js");
    // console.log("process.env: ", process.env);
    // $(".toast").toast("show");
    // https://getbootstrap.com/docs/5.0/components/toasts/#usage
    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
      let option;
      var myBsToast = new bootstrap.Toast(toastEl, option);
      myBsToast.show();
      return myBsToast;
    });

    //
    // var myToast = document.querySelector(".toast");
    // var myBsToast = new bootstrap.Toast(myToast);
    // myBsToast.show();
    //
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <>
      <div
        id='pwa-installer'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
        className='toast'
        data-autohide='false'
        style={{ position: "fixed", bottom: "0", left: "0", zIndex: "3" }}
      >
        <div className='toast-header'>
          <button id='butInstall' type='button' className='btn btn-primary'>
            {"Adicionar o aplicativo a tela inicial"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
