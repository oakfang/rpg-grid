import { StyleProxy } from "./style.js";

export class Asset {
  #asset = document.createElement("div");
  #styleProxy = new StyleProxy(this.#asset);

  constructor({
    row = 1,
    col = 1,
    xspan = 1,
    yspan = 1,
    bg = "black",
    style = {},
    name,
  } = {}) {
    this.#asset.classList.add("tile");
    this.#styleProxy.update(style);
    this.row = row;
    this.col = col;
    this.xSpan = xspan;
    this.ySpan = yspan;
    this.#asset.style.background = bg;
    if (name) {
      this.#asset.dataset.name = name;
    }
  }

  get row() {
    return +this.#asset.style.gridRowStart;
  }

  set row(value) {
    this.#asset.style.gridRowStart = value;
  }

  get ySpan() {
    return +this.#asset.style.gridRowEnd.replace("span ", "");
  }

  set ySpan(value) {
    this.#asset.style.gridRowEnd = `span ${value}`;
  }

  get col() {
    return +this.#asset.style.gridColumnStart;
  }

  set col(value) {
    this.#asset.style.gridColumnStart = value;
  }

  get xSpan() {
    return +this.#asset.style.gridColumnEnd.replace("span ", "");
  }

  set xSpan(value) {
    this.#asset.style.gridColumnEnd = `span ${value}`;
  }

  get element() {
    return this.#asset;
  }

  serialize() {
    return {
      row: this.row,
      col: this.col,
      xspan: this.xSpan,
      yspan: this.ySpan,
      bg: this.#asset.style.background,
      name: this.#asset.dataset.name,
      style: this.#styleProxy.serialize(),
    };
  }
}
