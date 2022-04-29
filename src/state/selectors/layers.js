import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "./base";

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
  (layersStore, layersOrder) => layersOrder.map((id) => layersStore[id])
);
export const selectCurrentLayer = createSelector(
  selectLayersStore,
  selectActiveLayer,
  (layersStore, activeLayer) => layersStore[activeLayer]
);
