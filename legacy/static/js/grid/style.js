export class StyleProxy {
  #written = new Set();
  constructor(element) {
    this.element = element;
    this.proxy = new Proxy(this.element.style, {
      set: (target, prop, value) => {
        target[prop] = value;
        this.#written.add(prop);
        return true;
      },
    });
  }

  update(style) {
    Object.assign(this.proxy, style);
  }

  serialize() {
    const result = {};
    this.#written.forEach((prop) => {
      result[prop] = this.element.style[prop];
    });
    return result;
  }
}
