import Kiosk from "Kiosk";
import Mission from "Mission";
import PaymentPage from "PaymentPage";
import Timer from "Timer";
// import

for (let i = 0; i < 45; i++) {
  let idx = `${i}`;
  let img = document.createElement("img");
  img.src = "../img/item/" + idx + ".png";
  img.id = idx;
  document.body.append(img);
}

window.onload = () => {
  const misson = new Mission();
  const paymentPage = new PaymentPage();
  // const timer = new Timer();
  timer.drawTimer(2, 0);
  const kiosk = new Kiosk();
};

// document.body.append(kiosk.canvas);
