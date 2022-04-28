import { Asset } from "./asset.js";

export class Layer {
  #grid = document.createElement("div");
  #assets = new WeakMap();

  constructor(name) {
    this.name = name;
    this.#grid.classList.add("grid");
  }

  get index() {
    return +this.#grid.style.zIndex;
  }

  set index(value) {
    return (this.#grid.style.zIndex = value);
  }

  get element() {
    return this.#grid;
  }

  get tileSize() {
    const style = getComputedStyle(this.#grid);
    const tileSize = Math.round(parseFloat(style.gridTemplateColumns));
    return tileSize;
  }

  fixSize() {
    this.#grid.style.setProperty("--column-width", this.tileSize + "px");
  }

  stylize({ bg } = {}) {
    if (bg) {
      this.#grid.style.background = bg;
    }
  }

  addAsset(properties) {
    const asset = new Asset(properties);
    this.#assets.set(asset.element, asset);
    this.#grid.appendChild(asset.element);
    return asset;
  }

  getAssetByName(name) {
    return this.#assets.get(this.#grid.querySelector(`[data-name="${name}"]`));
  }

  findAsset(predicate) {
    return this.#assets.get(
      Array.from(this.#grid.children).find((el) =>
        predicate(this.#assets.get(el))
      )
    );
  }

  serialize() {
    const layer = {
      style: {
        bg: this.#grid.style.background,
      },
      index: this.index,
      name: this.name,
      assets: Array.from(this.#grid.children).map((child) =>
        this.#assets.get(child).serialize()
      ),
    };

    return layer;
  }
}
