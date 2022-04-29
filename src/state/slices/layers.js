import { createSlice } from "@reduxjs/toolkit";

const getUniqueId = () => crypto.randomUUID();

function createLayerObject(name) {
  return {
    id: getUniqueId(),
    name,
  };
}
const bgLayer = createLayerObject("Layer 1");

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
    addLayer: (state, { payload: name }) => {
      const layer = createLayerObject(name);
      state.layersStore[layer.id] = layer;
      state.layersOrder.push(layer.id);
    },
    setLayerName: (state, { payload: { id, name } }) => {
      state.layersStore[id].name = name;
    },
  },
});

export const { addLayer, setLayerName } = layersSlice.actions;
export default layersSlice.reducer;
