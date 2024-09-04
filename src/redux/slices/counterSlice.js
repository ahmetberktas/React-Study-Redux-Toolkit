import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter" /* Slice İsmi */,
  initialState: { count: 0 } /* İlk State */,
  /* reducer/actions fonksiyonları */
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count > 0 && state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
