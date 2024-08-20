import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DashboardData } from "../../config/data";

interface TicketItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

const initialState: { ticket: TicketItem[] } = {
  ticket: DashboardData.Ticket.widget,
};

export const ticketSlice = createSlice({
  name: "ticketwidget",
  initialState,
  reducers: {
    addticket: (state, action) => {
      const todo: TicketItem = {
        id: nanoid(),
        title: action.payload,
        content: action.payload,
        isOpen: false,
      };
      state.ticket.push(todo);
    },
    removeticket: (state, action) => {
      state.ticket = state.ticket.filter((val) => val.id !== action.payload);
    },
    toggleticket: (state, action) => {
      const item = state.ticket.find((val) => val.id === action.payload);
      if (item) {
        item.isOpen = !item.isOpen; // Toggle the isOpen property
      }
    },
  },
});

export const { addticket, removeticket, toggleticket } = ticketSlice.actions;

export default ticketSlice.reducer;
