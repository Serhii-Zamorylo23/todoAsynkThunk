import { createAsyncThunk } from "@reduxjs/toolkit";
import { togleTask } from "../api/togleTask";

export const togleTaskThunk = createAsyncThunk("Phonebook/Todo/Togle",({id,isComplete})=>{
    return togleTask({id,isComplete})
})