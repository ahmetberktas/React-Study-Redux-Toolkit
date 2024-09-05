import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

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
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: v4(),
      });
    },
    editTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload;
      }
    },
    removeTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, editTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
