import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Navbar Animasyonu",
      author: "Ahmet",
      assigned_to: "Mehmet",
      end_date: "2024-01-01",
    },
    {
      id: "2",
      title: "Footer Animasyonu",
      author: "Ali",
      assigned_to: "Veli",
      end_date: "2024-02-02",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {},
    editTask: (state, action) => {},
    removeTask: (state, action) => {},
  },
});

export const { addTask, editTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
