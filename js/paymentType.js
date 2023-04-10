export default class PaymentType {
  #canvas;
  #ctx;
  #cancelImg;
  #typeImg;
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
    this.#canvas.onclick = this.clickHandler.bind(this);
    this.draw();
  }

  clickHandler(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (520 <= x && 163 <= y && x <= 564 && y <= 193) {
      document.body.removeChild(this.#canvas);
    }
    // 미션완료 추가
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
