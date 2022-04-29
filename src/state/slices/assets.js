import { createSlice } from "@reduxjs/toolkit";
import { getUniqueId } from "utils";

function createAssetObject(props) {
  return {
    id: getUniqueId(),
    ...props,
  };
}

const initialState = {
  assetsStore: {},
};

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    addAsset: (state, { payload: props }) => {
      const asset = createAssetObject(props);
      state.assetsStore[asset.id] = asset;
    },
  },
});

export const { addAsset } = assetsSlice.actions;
export default assetsSlice.reducer;
