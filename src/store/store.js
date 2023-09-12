import { configureStore } from "@reduxjs/toolkit";
import canvasSlice from "./features/CanvasSlice";

const store = configureStore({
  reducer: {
    canvas: canvasSlice,
  },
});

export default store;
