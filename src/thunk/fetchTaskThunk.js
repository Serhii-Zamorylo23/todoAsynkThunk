import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTask } from "../api/fetchTask";

export const fetchTaskThunk = createAsyncThunk("Phonebook/Todo/Fetch",()=>{
    return fetchTask()
})