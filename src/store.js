import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/slices/counterSlice";
import crudSlice from "./redux/slices/crudSlice";

/* Thunk ile beraber gelir, verilen reducer otomatik birleştirilir */
export default configureStore({
  reducer: {
    counterSlice,
    crudSlice,
  },
});
