import { createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteTask } from "../api/DeleteTask";

export const DeleteTaskThunk = createAsyncThunk("Phonebook/Todo/Delete",(id)=>{
    return DeleteTask(id)
})