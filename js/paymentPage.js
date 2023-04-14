// import { menuList, shoppingList } from "Item";
import { menuList, shoppingList } from "List";
import PaymentType from "PaymentType";

/**@type {HTMLCanvasElement} */
export default class PaymentPage {
  #canvas;
  #ctx;
  #payImg;
  #plusImg;
  #minusImg;
  #cancelImg;
  #backImg;
  #choiceImg;
  #coordY;
  #spaceY;
  #sound;
  constructor() {
    this.#canvas = document.createElement("canvas");
    this.#ctx = this.#canvas.getContext("2d");
    document.body.append(this.#canvas);
    this.#canvas.style.left = "200px";
    // this.#canvas.style.top = "590px";
    this.#canvas.width = 600;
    this.#canvas.height = 700;

    this.#coordY = 130; // y좌표
    this.#spaceY = 60; // y축 간격
    this.#payImg = document.getElementById("pay");
    this.#plusImg = document.getElementById("plus");
    this.#minusImg = document.getElementById("minus");
    this.#cancelImg = document.getElementById("cancel");
    this.#backImg = document.getElementById("back");
    this.#choiceImg = document.getElementById("choice");
    this.#sound = new Audio("../sound/listSelect.mp3");
    this.draw();
    this.#canvas.onclick = this.clickHandler.bind(this);
  }

  countMenu(x, y) {
    for (let i in shoppingList) {
      if (
        //클릭 범위 조건 만듦
        440 + 40 + 50 < x &&
        x < 440 + 40 + 50 + 40 &&
        this.#coordY + i * this.#spaceY < y &&
        y < this.#coordY + 50 + i * this.#spaceY
      ) {
        shoppingList[i].index++;
        this.draw();
      } else if (
        440 < x &&
        x < 440 + 40 &&
        this.#coordY + i * this.#spaceY < y &&
        y < this.#coordY + 50 + i * this.#spaceY
      ) {
        if (shoppingList[i].index >= 2) shoppingList[i].index--;
        this.draw();
      } else if (
        30 < x &&
        x < 76 &&
        65 &&
        this.#coordY + i * this.#spaceY + 12 < y &&
        y < this.#coordY + i * this.#spaceY + 30 //취소버튼 좌표 클릭하면
      ) {
        shoppingList.splice(i, 1); //쇼핑리스트에서 해당 메뉴 삭제
        if (shoppingList.length == 0) {
          this.#ctx.fillText("\\ " + "0", 100 + 200 + 100, 50 * 10);
        }
        this.draw();
      }
    }
  }
  clickHandler(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    this.#sound.play();
    this.countMenu(x, y);
    this.removeCanvas(x, y);
    this.appendCanvas(x, y);
  }
  appendCanvas(x, y) {
    if (450 <= x && x <= 550 && 550 <= y && y <= 660) {
      let paymentType = new PaymentType();
    }
  }
  removeCanvas(x, y) {
    if (30 <= x && x <= 140 && 550 <= y && y <= 660) {
      document.body.removeChild(this.#canvas);
    }
  }
  draw() {
    this.#ctx.drawImage(this.#payImg, 0, 0, 600, 700); //쇼핑리스트 재출력
    this.#ctx.fillStyle = "black";
    this.#ctx.font = "17px GmarketSansMedium, serif";
    this.#ctx.beginPath();
    this.#ctx.moveTo(30, this.#coordY);
    this.#ctx.lineTo(565, this.#coordY);
    this.#ctx.stroke();

    this.#ctx.drawImage(this.#backImg, 30, 550, 110, 110);
    this.#ctx.drawImage(this.#choiceImg, 450, 550, 110, 110);

    let newTotalPrice = 0;
    for (let i in shoppingList) {
      this.#ctx.drawImage(
        this.#cancelImg,
        30,
        this.#coordY + this.#spaceY * i + 12,
        46,
        30
      );

      let index = menuList.findIndex((obj) => obj.name == shoppingList[i].name);
      const img = document.getElementById(`${index}`);
      // img.src =
      //   "../img/" + shoppingList[i].category + "/" + (index % 9) + ".png";
      // img.onload = function () {
      this.#ctx.drawImage(img, 130, this.#coordY + this.#spaceY * i, 50, 50);
      // this.#ctx.drawImage(img4, 400, this.#spaceY * 10 - 40, 120, 50);

      this.#ctx.fillText(
        shoppingList[i].name,
        215,
        this.#coordY + 35 + this.#spaceY * i
      ); // 메뉴이름 출력

      this.#ctx.fillText(
        "\\ " +
          (shoppingList[i].price * shoppingList[i].index).toLocaleString(),
        350,
        this.#coordY + 35 + this.#spaceY * i
      );

      this.#ctx.fillText(
        shoppingList[i].index,
        500,
        this.#coordY + 35 + this.#spaceY * i
      ); //인덱스 출력

      newTotalPrice += shoppingList[i].price * shoppingList[i].index;

      this.#ctx.drawImage(
        this.#minusImg,
        450,
        this.#coordY + this.#spaceY * i + 10,
        30,
        40
      );
      this.#ctx.drawImage(
        this.#plusImg,
        530,
        this.#coordY + this.#spaceY * i + 10,
        30,
        40
      );

      this.#ctx.beginPath();
      this.#ctx.moveTo(30, i * this.#spaceY + this.#coordY + 50);
      this.#ctx.lineTo(565, i * this.#spaceY + this.#coordY + 50);
      this.#ctx.stroke();
    }
    this.#ctx.font = "23px GmarketSansMedium, serif";
    this.#ctx.fillText(
      " 합계금액 :  \\  " + newTotalPrice.toLocaleString(),
      315,
      this.#spaceY * 10 - 60
    ); // 메뉴 총액 출력
  }
}
