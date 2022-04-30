import { createSlice } from "@reduxjs/toolkit";
import { getUniqueId } from "state/utils";
import { addAsset } from "./assets";
import { createGrid } from "./grid";

function createLayerObject(name, background = "transparent") {
  return {
    id: getUniqueId(),
    name,
    background,
    assets: [],
  };
}

const bgLayer = createLayerObject("Background");

const initialState = {
  layersStore: {
    [bgLayer.id]: bgLayer,
  },
  layersOrder: [bgLayer.id],
  activeLayer: bgLayer.id,
};

const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {
    addLayer: (state, { payload: { name, background } }) => {
      const layer = createLayerObject(name, background);
      state.layersStore[layer.id] = layer;
      state.layersOrder.push(layer.id);
      state.activeLayer = layer.id;
    },
    setLayerName: (state, { payload: { id, name } }) => {
      state.layersStore[id].name = name;
    },
    selectLayer: (state, { payload: id }) => {
      state.activeLayer = id;
    },
    deleteLayer: (state, { payload: id }) => {
      delete state.layersStore[id];
      state.layersOrder = state.layersOrder.filter((layerId) => layerId !== id);
      if (state.activeLayer === id) {
        state.activeLayer = state.layersOrder[0];
      }
    },
  },
  extraReducers: {
    [addAsset]: (state, { payload: { id, layerId } }) => {
      state.layersStore[layerId].assets.push(id);
    },
    [createGrid]: () => initialState,
  },
});

export const { addLayer, setLayerName, selectLayer, deleteLayer } =
  layersSlice.actions;
export default layersSlice.reducer;
