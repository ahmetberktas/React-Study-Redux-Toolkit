import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/slices/counterSlice";

/* Thunk ile beraber gelir, verilen reducer otomatik birleştirilir */
export default configureStore({
  reducer: {
    counterSlice,
  },
});
