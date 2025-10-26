import { createAsyncThunk } from "@reduxjs/toolkit";
import {renameTask} from "../api/renameTask";

export const renameTaskThunk = createAsyncThunk("Phonebook/Todo/Rename",({id,newTaskName}) => {
    console.log(newTaskName)
    return renameTask(id,newTaskName)
})