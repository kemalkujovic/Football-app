import { configureStore } from "@reduxjs/toolkit";
import footballSlice from "./footballSlice";
import joyrideSlice from './joyrideSlice'
const store = configureStore({
  reducer: {
    football: footballSlice.reducer,
    joyride: joyrideSlice.reducer,
  },
});

export default store;
