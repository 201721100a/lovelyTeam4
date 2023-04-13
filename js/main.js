import Kiosk from "Kiosk";
import Mission from "Mission";
import PaymentPage from "PaymentPage";
import PaymentType from "PaymentType";
import Timer from "Timer";
// import
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
let stage = params.get("stage");

for (let i = 0; i < 45; i++) {
  let idx = `${i}`;
  let img = document.createElement("img");
  img.src = "../img/item/" + idx + ".png";
  img.id = idx;
  document.body.append(img);
}

window.onload = () => {
  const mission = new Mission(stage);
};
