import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DashboardData } from "../../config/data";

interface ImageItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

const initialState: { image: ImageItem[] } = {
  image: DashboardData.Image.widget,
};

export const imageSlice = createSlice({
  name: "imagewidget",
  initialState,
  reducers: {
    addimage: (state, action) => {
      const todo: ImageItem = {
        id: nanoid(),
        title: action.payload,
        content: action.payload,
        isOpen: false,
      };
      state.image.push(todo);
    },
    removeimage: (state, action) => {
      state.image = state.image.filter((val) => val.id !== action.payload);
    },
    toggleimage: (state, action) => {
      const item = state.image.find((val) => val.id === action.payload);
      if (item) {
        item.isOpen = !item.isOpen; // Toggle the isOpen property
      }
    },
  },
});

export const { addimage, removeimage, toggleimage } = imageSlice.actions;

export default imageSlice.reducer;
