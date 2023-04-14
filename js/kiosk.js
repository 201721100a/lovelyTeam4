/**@type{HTMLCanvasElement} */

import { menuList, shoppingList, compareMission, m } from "List";
import ShoppingBag from "ShoppingBag";
import PaymentPage from "PaymentPage";
import Timer from "Timer";
export default class Kiosk {
  #canvas;
  #ctx;
  #menu;
  #page;
  #menuSide;
  #menuIndex;
  #list;
  #nlogo;
  #logo2;
  #payment;
  #shoppingbag;
  #paymentPage;
  #timer;
  #sound;
  #npcSound;
  constructor() {
    this.#canvas = document.createElement("canvas");
    this.#ctx = this.#canvas.getContext("2d");

    this.#menuIndex = 0;

    let npc = document.createElement("div");
    npc.id = "npc";
    document.body.append(npc);
    document.body.append(this.#canvas);
    this.#canvas.width = 600;
    this.#canvas.height = 700;
    this.#canvas.style.left = "200px";
    this.#canvas.style.top = "0";
    this.#canvas.style.position = "absolute";
    this.#nlogo = document.getElementById("nlogo");
    this.#logo2 = document.getElementById("logo2");
    this.#payment = document.getElementById("payment");

    this.#timer = new Timer();
    this.#timer.drawTimer(2, 0);
    this.#ctx.fillStyle = "white";
    this.#ctx.fillRect(0, 0, 600, 700);
    this.#npcSound = new Audio("../sound/gameStart.mp3");
    this.#npcSound.play();
    //this.#ctx.drawImage(this.#list, 15, 590, 450, 90);
    this.#ctx.drawImage(this.#logo2, 5, 5, 585, 85);
    this.#ctx.drawImage(this.#nlogo, 5, 5, 90, 90);
    this.#ctx.drawImage(this.#payment, 490, 590, 100, 107);
    this.#sound = new Audio("../sound/menuSelect.mp3");
    this.#menuSide = [];
    for (let x = 0; x < 5; x++) {
      this.#menuSide[x] = document.getElementById(`menuSide${x}`);
    }

    this.#page = "burger";

    this.#menu = [];
    for (let x = 0; x < 45; x++) {
      this.#menu[x] = document.getElementById(`${x}`);
    }

    this.drawItem(this.#menuIndex);
    this.#canvas.onclick = this.clickHandler.bind(this);

    let div = document.createElement("div");
    div.id = "listDiv";
    this.#shoppingbag = new ShoppingBag();

    div.appendChild(this.#shoppingbag.canvas);
    document.body.append(div);
  }

  icon = {
    x: 210,
    y: 110,
    w: 100,
    h: 90,
  };

  icon_name = {
    x: 210,
    y: 230,
    w: 100,
    h: 20,
  };

  sideBar = {
    x: 0,
    y: 100,
    w: 180,
    h: 80,
  };

  clickHandler(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    this.#shoppingbag.createText();
    this.#sound.play();
    for (let i = 0; i < 5; i++) {
      if (
        15 <= x &&
        100 + 100 * i <= y &&
        x <= 180 &&
        y <= 100 + 90 * (i + 1)
      ) {
        switch (i) {
          case 0:
            this.#page = "burger";
            this.#menuIndex = 0;
            this.drawItem(i);
            break;
          case 1:
            this.#page = "side";
            this.#menuIndex = 9;
            this.drawItem(i);
            break;
          case 2:
            this.#page = "drink";
            this.#menuIndex = 18;
            this.drawItem(i);
            break;
          case 3:
            this.#page = "dessert";
            this.#menuIndex = 27;
            this.drawItem(i);
            break;
          case 4:
            this.#page = "set";
            this.#menuIndex = 36;
            this.drawItem(i);
            draw;
            break;
        }
      }
    }
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) {
        if (
          210 + j * 125 <= x &&
          110 + i * 150 <= y &&
          x <= 210 + j * 125 + 100 &&
          y <= 110 + i * 150 + 150
        ) {
          this.addShoppingList(menuList[this.#menuIndex + (i * 3 + j)]);
          this.#shoppingbag.createText(shoppingList);
        }
      }
    this.#shoppingbag.createText(shoppingList);

    if (490 <= x && x <= 590 && 590 <= y && y <= 680)
      this.#paymentPage = new PaymentPage();
  }

  drawSideBar(index) {
    this.#ctx.clearRect(
      this.sideBar.x,
      this.sideBar.y,
      this.#canvas.width,
      480
    );
    this.#ctx.fillStyle = "white";
    this.#ctx.fillRect(this.sideBar.x, this.sideBar.y, this.#canvas.width, 480);
    this.#ctx.drawImage(this.#menuSide[index], 0, 100, 585, 480);
  }

  drawItem(index) {
    this.drawSideBar(index);
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;

      this.#ctx.drawImage(
        this.#menu[i + this.#menuIndex],
        this.icon.x + col * 130,
        this.icon.y + row * 160,
        this.icon.w,
        this.icon.h
      );

      this.#ctx.fillStyle = "black";
      this.#ctx.fillText(
        menuList[this.#menuIndex + i].name,
        this.icon_name.x + 2 + col * 124,
        this.icon_name.y + 17 + row * 150
      );

      this.#ctx.fillText(
        menuList[this.#menuIndex + i].price + "원",
        this.icon_name.x + 78 + col * 124,
        this.icon_name.y + 17 + row * 150
      );
    }
  }

  addShoppingList(item) {
    var b1 = item;
    if (shoppingList.length == 6) {
      swal("장바구니가 꽉찼습니다.", "더이상 추가할 수 없습니다.", "warning");
      return;
    }
    if (shoppingList.some((x) => x.name == b1.name) == false)
      shoppingList.push(item);
    else {
      for (let v of shoppingList)
        if (v.name == b1.name) {
          v.index++;
          break;
        }
    }
  }
}
