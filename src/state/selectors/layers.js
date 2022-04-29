import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "./base";
import { selectAssets } from "./assets";

const selectLayers = createSelector(selectSelf, (state) => state.layers);
const selectLayersOrder = createSelector(
  selectLayers,
  (state) => state.layersOrder
);
const selectLayersStore = createSelector(
  selectLayers,
  (state) => state.layersStore
);
const selectActiveLayer = createSelector(
  selectLayers,
  (state) => state.activeLayer
);
export const selectOrderedLayers = createSelector(
  selectLayersStore,
  selectLayersOrder,
  selectAssets,
  (layersStore, layersOrder, assetsStore) =>
    layersOrder
      .map((id) => ({
        ...layersStore[id],
        assets: layersStore[id].assets.map((id) => assetsStore[id]),
      }))
      .reverse()
);
export const selectCurrentLayer = createSelector(
  selectLayersStore,
  selectActiveLayer,
  (layersStore, activeLayer) => layersStore[activeLayer]
);
