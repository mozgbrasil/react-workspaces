(function () {
  // https://codepen.io/tiggr/pen/poJoLyW.js
  if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
    const toggleBtn = document.querySelector(".js-toggle-fullscreen-btn");
    toggleBtn.hidden = false;

    toggleBtn.addEventListener("click", function () {
      if (document.fullscreen) {
        document.exitFullscreen();
      } else if (document.webkitFullscreenElement) {
        document.webkitCancelFullScreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        document.documentElement.webkitRequestFullScreen();
      }
    });

    document.addEventListener("fullscreenchange", handleFullscreen);
    document.addEventListener("webkitfullscreenchange", handleFullscreen);

    function handleFullscreen() {
      if (document.fullscreen || document.webkitFullscreenElement) {
        toggleBtn.classList.add("on");
        toggleBtn.setAttribute("aria-label", "Exit fullscreen mode");
      } else {
        toggleBtn.classList.remove("on");
        toggleBtn.setAttribute("aria-label", "Enter fullscreen mode");
      }
    }
  }
})();
