import { configureStore } from "@reduxjs/toolkit";
import * as reducer from "./reducer";

export const store = configureStore({
  reducer,
});
