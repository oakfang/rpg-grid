import { Layer } from "./layer.js";

export class GridManager {
  static draw(container, gridConfig) {
    const manager = new GridManager(container, gridConfig.columnCount);
    gridConfig.layers.forEach((object) => {
      const layer = manager.addLayer(object);
      if (object.assets) {
        object.assets.forEach((props) => {
          layer.addAsset(props);
        });
      }
    });
    return manager;
  }

  constructor(gridContainer, columns) {
    this.gridContainer = gridContainer;
    if (columns !== undefined) {
      this.gridContainer.style.setProperty("--cols", columns);
    }
    this.layers = {};
    this.setupObserver();
  }

  get element() {
    return this.gridContainer;
  }

  setupObserver() {
    this.sizeObserver = new ResizeObserver(() => {
      Object.values(this.layers).forEach((layer) => {
        layer.fixSize();
      });
    });
    this.sizeObserver.observe(this.gridContainer);
  }

  stop() {
    this.sizeObserver.disconnect();
  }

  addLayer({ name, index, style } = {}) {
    const layerIndex = index ?? Object.keys(this.layers).length;
    const layer = new Layer(name);
    this.layers[name ?? Math.random()] = layer;
    layer.index = layerIndex;
    layer.stylize(style);
    this.gridContainer.appendChild(layer.element);
    layer.fixSize();
    return layer;
  }

  serialize() {
    return {
      columnCount: this.gridContainer.style.getPropertyValue("--cols"),
      layers: Object.values(this.layers).map((layer) => layer.serialize()),
    };
  }
}
