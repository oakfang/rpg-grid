import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "./base";

export const selectGrid = createSelector(selectSelf, (state) => state.grid);
