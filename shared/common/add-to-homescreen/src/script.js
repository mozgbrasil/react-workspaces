// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen

// "use strict";

console.log("Progressive_web_apps: ");

let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
let addBtn = document.getElementById("butInstall");
addBtn.style.display = "none";
let pwaInstaller = document.getElementById("pwa-installer");
pwaInstaller.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  console.log("beforeinstallprompt: ", e);
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";
  pwaInstaller.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    console.log("click: ", e);
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log("choiceResult: ", choiceResult);
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

window.addEventListener("appinstalled", function (evt) {
  console.log("appinstalled: ", evt);
  $(".toast").toast("hide");
});

if (window.location.protocol == "http" || window.location.protocol == "https") {
  // getInstalledRelatedApps() is only supported in top-level browsing contexts.
  navigator.getInstalledRelatedApps().then((relatedApps) => {
    console.log("relatedApps: ", relatedApps);
    relatedApps.forEach((app) => {
      console.log(app.id, app.platform, app.url);
    });
  });
}
