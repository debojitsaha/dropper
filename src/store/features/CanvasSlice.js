import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsOnCanvas: JSON.parse(localStorage.getItem("ItemsOnCanvas")) || [],
  id: JSON.parse(localStorage.getItem("CanvasId")) || 0,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addItemToCanvas: (state, action) => {
      state.itemsOnCanvas.push(action.payload);
      state.id += 1;

      localStorage.setItem(
        "ItemsOnCanvas",
        JSON.stringify(state.itemsOnCanvas)
      );
      localStorage.setItem("CanvasId", JSON.stringify(state.id));
    },
    updatePositionOnCanvas: (state, action) => {
      const { id, left, top } = action.payload;
      console.log(id, left, top);

      const object = state.itemsOnCanvas.find((obj) => obj.id === id);

      if (object) {
        object.top = top;
        object.left = left;
      }

      localStorage.setItem(
        "ItemsOnCanvas",
        JSON.stringify(state.itemsOnCanvas)
      );
    },
    clearCanvas: (state) => {
      (state.itemsOnCanvas = []), (state.id = 0);

      localStorage.removeItem("ItemsOnCanvas");
      localStorage.removeItem("CanvasId");
    },
  },
});

export const { addItemToCanvas, updatePositionOnCanvas, clearCanvas } =
  canvasSlice.actions;

export default canvasSlice.reducer;
