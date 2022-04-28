import { GridManager } from "./grid/manager.js";
import gridConfig from "./config.js";

const app = GridManager.draw(
  document.getElementById("grid-container"),
  gridConfig
);

document.getElementById("export").addEventListener("click", () => {
  console.log(app.serialize());
});

const ui = {
  layers: document.getElementById("layers"),
  get selectedLayerButton() {
    return this.layers.querySelector("[aria-selected=true]");
  },
  set selectedLayerButton(btn) {
    const current = this.selectedLayerButton;
    this.selectedAsset?.element?.setAttribute?.("aria-selected", false);
    current?.setAttribute?.("aria-selected", false);
    btn.setAttribute?.("aria-selected", true);
    return true;
  },
  get selectedLayer() {
    const layerName = this.selectedLayerButton?.dataset?.layer;
    if (!layerName) return;
    const layer = app.layers[layerName];
    return layer;
  },
  getSelectedAssetElement() {
    return document.querySelector('.tile[aria-selected="true"]');
  },
  get selectedAsset() {
    return this.selectedLayer?.findAsset?.(
      (a) => a.element === this.getSelectedAssetElement()
    );
  },
  set selectedAsset(asset) {
    const current = this.selectedAsset;
    current?.element.setAttribute?.("aria-selected", false);
    if (asset) {
      asset.element.setAttribute?.("aria-selected", true);
    }
    return true;
  },
};

Object.keys(app.layers).forEach((layerName) => {
  const btn = document.createElement("button");
  btn.innerText = layerName;
  btn.dataset.layer = layerName;
  ui.layers.appendChild(btn);
});

ui.layers.addEventListener("click", (e) => {
  if (e.target.dataset.layer) {
    ui.selectedLayerButton = e.target;
  } else {
    const layerName = prompt("Enter layer name");
    if (!layerName) return;
    const btn = document.createElement("button");
    btn.innerText = layerName;
    btn.dataset.layer = layerName;
    ui.layers.appendChild(btn);
    app.addLayer({ name: layerName });
  }
});

app.element.addEventListener("click", (e) => {
  const layer = ui.selectedLayer;
  if (!layer) return;
  const rect = layer.element.getBoundingClientRect();
  const relativeX = e.clientX - rect.left;
  const relativeY = e.clientY - rect.top;
  const tileX = Math.ceil(relativeX / layer.tileSize);
  const tileY = Math.ceil(relativeY / layer.tileSize);
  const asset = layer.findAsset((asset) => {
    const rect = asset.element.getBoundingClientRect();
    return (
      rect.left <= relativeX &&
      rect.right >= relativeX &&
      rect.top <= relativeY &&
      rect.bottom >= relativeY
    );
  });
  if (!asset && ui.selectedAsset && (e.metaKey || e.ctrlKey)) {
    const selectedAsset = ui.selectedAsset;
    const { row, col } = selectedAsset;
    selectedAsset.xSpan = Math.abs(tileX - col) + 1;
    selectedAsset.ySpan = Math.abs(tileY - row) + 1;
    selectedAsset.row = Math.min(row, tileY);
    selectedAsset.col = Math.min(col, tileX);
  } else {
    ui.selectedAsset = asset;
  }
});

window.ui = ui;
