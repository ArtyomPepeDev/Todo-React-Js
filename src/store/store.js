import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as tasksReducer } from "../Tasks/tasks.slice";

const reducers = combineReducers({
  tasks: tasksReducer,
});

export const store = configureStore({
    reducer: reducers,
})