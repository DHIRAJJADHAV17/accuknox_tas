import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DashboardData } from "../../config/data";

interface CspmItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

const initialState: { cspm: CspmItem[] } = {
  cspm: DashboardData.CSPM.widget,
};

export const cspmSlice = createSlice({
  name: "cspmwidget",
  initialState,
  reducers: {
    addcspm: (state, action) => {
      const newItem: CspmItem = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        isOpen: action.payload.isOpen,
      };
      state.cspm.push(newItem);
    },
    removecspm: (state, action) => {
      state.cspm = state.cspm.filter((val) => val.id !== action.payload);
    },
    toggleCspm: (state, action) => {
      const item = state.cspm.find((val) => val.id === action.payload);
      if (item) {
        item.isOpen = !item.isOpen;
      }
    },
  },
});

export const { addcspm, removecspm, toggleCspm } = cspmSlice.actions;

export default cspmSlice.reducer;
