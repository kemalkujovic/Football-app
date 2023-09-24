import { configureStore } from "@reduxjs/toolkit";
import footballSlice from "./footballSlice";
const store = configureStore({
  reducer: {
    football: footballSlice.reducer,
  },
});

export default store;
