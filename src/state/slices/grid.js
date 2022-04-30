import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: 500,
  width: 500,
  columnCount: 10,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    createGrid: (_state, { payload }) => {
      return payload;
    },
  },
});

export const { createGrid } = gridSlice.actions;
export default gridSlice.reducer;
