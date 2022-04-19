import firebase from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";

firebase.initializeApp(firebaseConfig);
firebase.analytics().logEvent("notification_received");

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    25K Apr 19 11:03 dist/main.js
// Run `yarn run build`
// Run `ls -lh dist/main.js` to get the above
// Original size 25K
