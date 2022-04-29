import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "./base";

export const selectAssets = createSelector(selectSelf, (state) => state.assets);
