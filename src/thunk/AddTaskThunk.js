import { addTask } from "../api/addTask";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const addTaskThunk = createAsyncThunk("Phonebook/Todo/Add", (task) => {
  return addTask(task);
});
