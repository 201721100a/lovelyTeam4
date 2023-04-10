/**@type{HTMLCanvasElement} */
export default class Item {
  #name;
  #price;
  #index;
  constructor(name, price) {
    this.#name = name;
    this.#price = price;
    this.#index = 1;
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
}
