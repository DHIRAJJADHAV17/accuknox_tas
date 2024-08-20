import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cspmReducer from "../features/cspm/cspmSlice";
import cwppReducer from "../features/cwpp/cwppSlice";
import imageReducer from "../features/imagea/imageSlice";
import ticketReducer from "../features/ticket/ticketSlice";

const rootReducer = combineReducers({
  cspm: cspmReducer,
  cwpp: cwppReducer,
  image: imageReducer,
  ticket: ticketReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
