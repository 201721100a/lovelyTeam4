import { menuList, shoppingList } from "List";
export default class ShoppingBag {
  #canvas;
  #ctx;

  constructor() {
    this.#canvas = document.createElement("canvas");
    this.#ctx = this.#canvas.getContext("2d");

    this.#canvas.style.position = "absolute";

    this.#canvas.width = 460;
    this.#canvas.height = 350;
    this.#ctx.font = "15px GmarketSansMedium, serif";
  }

  get canvas() {
    return this.#canvas;
  }
  createText = function (shoppingList) {
    // console.log(shoppingList);
    this.#ctx.clearRect(0, 0, 450, 1000);
    for (const i in shoppingList) {
      const s = shoppingList[i];
      const total = (s.price * s.index).toLocaleString();
      this.#ctx.fillText(s.name, 20, i * 30 + 30);
      this.#ctx.fillText(s.index + "개", 300, i * 30 + 30);
      this.#ctx.fillText(total + "원", 350, i * 30 + 30);
      this.#ctx.beginPath();
      this.#ctx.moveTo(20, i * 30 + 40);
      this.#ctx.lineTo(450, i * 30 + 40);
      this.#ctx.stroke();
    }
  };
}
