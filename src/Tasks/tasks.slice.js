import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  folders: JSON.parse(localStorage.getItem("folders") || '[]'),
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log(payload);
      if (!state.tasks.some((task) => task.text === payload.value)) {
        // [...tasks, { text, id: Date.now(), folder, completed: false }];
        state.tasks.push({
          text: payload.value,
          id: Date.now(),
          folder: payload.folder,
          completed: false,
        });
      }
    },
    addFolder: (state, { payload }) => {
      console.log(payload);
      if (!state.folders.includes(payload.value)) {
        state.folders.push(payload.value);
      }
    },
    taskDone: (state, { payload }) => {
      state.tasks = state.tasks.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task?.id !== payload);
    },
  },
});

export const { actions, reducer } = tasksSlice;
