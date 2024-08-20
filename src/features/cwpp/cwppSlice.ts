import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DashboardData } from "../../config/data";

interface CwppItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean; // Ensure this matches the structure
}

const initialState: { cwpp: CwppItem[] } = {
  cwpp: DashboardData.CWPP.widget,
};

export const cwppSlice = createSlice({
  name: "cwppwidget",
  initialState,
  reducers: {
    addcwpp: (state, action) => {
      const todo: CwppItem = {
        id: nanoid(),
        title: action.payload,
        content: action.payload,
        isOpen: false,
      };
      state.cwpp.push(todo);
    },
    removecwpp: (state, action) => {
      state.cwpp = state.cwpp.filter((val) => val.id !== action.payload);
    },
    toggleCwpp: (state, action) => {
      const item = state.cwpp.find((val) => val.id === action.payload);
      if (item) {
        item.isOpen = !item.isOpen; // Toggle the isOpen property
      }
    },
  },
});

export const { addcwpp, removecwpp, toggleCwpp } = cwppSlice.actions;

export default cwppSlice.reducer;
