// import list from "./list.js";

export default class PaymentType {
  #canvas;
  #ctx;
  #cancelImg;
  #typeImg;
  #typeImg1;
  #typeImg2;

  constructor() {
    this.#canvas = document.createElement("canvas");
    this.#ctx = this.#canvas.getContext("2d");
    document.body.append(this.#canvas);

    this.#canvas.style.top = "0px";
    this.#canvas.style.left = "200px";

    this.#canvas.width = 600;
    this.#canvas.height = 700;
    this.#cancelImg = document.getElementById("paymentType");
    this.#typeImg = document.getElementById("paymentTypeCancel");
    this.#typeImg1 = document.getElementById("cardType");
    this.#typeImg2 = document.getElementById("QRType");
    this.#canvas.onclick = this.clickHandler.bind(this);
    this.draw();
  }

  clickHandler(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(`x: ${x}, y:${y}`);

    if (520 <= x && 163 <= y && x <= 564 && y <= 193) {
      //취소 좌표
      document.body.removeChild(this.#canvas);
    }

    if (100 <= x && 300 <= y && x <= 260 && y <= 465) {
      this.#ctx.fillStyle = "white";
      this.#ctx.fillRect(10, 150, 580, 380);
      this.#ctx.drawImage(this.#typeImg1, 100, 240, 380, 250);
    }

    if (310 <= x && 300 <= y && x <= 460 && y <= 470) {
      this.#ctx.fillStyle = "white";
      this.#ctx.fillRect(10, 150, 580, 380);
      this.#ctx.drawImage(this.#typeImg2, 100, 240, 380, 250);
    }

    // this.#ctx.clearRect(300, 300, 170, 170);
    // 미션완료 추가
    setTimeout(() => {
      this.#ctx.fillStyle = "white";
      this.#ctx.fillRect(10, 150, 580, 380);
    }, 3000);
  }

  draw() {
    this.#ctx.fillStyle = "black";
    this.#ctx.globalAlpha = 0.5;   
    this.#ctx.fillRect(0, 0, 600, 700);
    this.#ctx.globalAlpha = 1;
    this.#ctx.drawImage(this.#cancelImg, 10, 150, 580, 380);
    this.#ctx.drawImage(this.#typeImg, 520, 160, 50, 40);
  }
}
