/**@type{HTMLCanvasElement} */
export default class Item {
  #name;
  #price;
  #index;
  #id;
  constructor(name, price, id) {
    this.#name = name;
    this.#price = price;
    this.#index = 1;
    this.#id = id;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get index() {
    return this.#index;
  }

  set index(num) {
    this.#index = num;
  }
  get id() {
    return this.#id;
  }
}
