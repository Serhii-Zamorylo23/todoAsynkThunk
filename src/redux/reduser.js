import { createSlice } from "@reduxjs/toolkit"
import { addTaskThunk } from "../thunk/AddTaskThunk"
import { DeleteTaskThunk } from "../thunk/DeleteTaskThunk"
import { renameTaskThunk } from "../thunk/renameTaskThunk"
import { fetchTaskThunk } from "../thunk/fetchTaskThunk"
import { togleTaskThunk } from "../thunk/togleTaskThunk"
const initialState={
    tasks:[],
    newTaskName:"",
    filter:"",
    isComplete: null,
}

const Reducer = createSlice({
    name:"Todo",
    initialState:initialState,
    reducers:{
        filter:(state,action)=>{
            state.filter = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addTaskThunk.fulfilled,(state,action)=>{
            
            state.tasks.push(action.payload)
            state.isComplete = false
        })
        .addCase(addTaskThunk.rejected,(state,action)=>{
            console.log(action.error)
            alert("Помилка.Завдання не записано")
        })
        .addCase(DeleteTaskThunk.fulfilled,(state,action)=>{
            state.tasks = state.tasks.filter( task => task.id !== action.payload)
        })
        .addCase(DeleteTaskThunk.rejected,(state,action)=>{
            alert("Помилка.Завдання немає в базі данних тому видалення немодливе")
        })
        .addCase(renameTaskThunk.fulfilled,(state,action)=>{
            state.tasks.map(task => task.task = action.payload)
        })
        .addCase (renameTaskThunk.rejected,(state,action)=>{
            alert("Помилка.Завдання не перейменовано")
        })
        .addCase(fetchTaskThunk.fulfilled,(state,action)=>{
            state.tasks = action.payload
        })
        .addCase(togleTaskThunk.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.isComplete = action.payload   
        })
        .addCase(togleTaskThunk.rejected,()=>{
            alert("ff")
        })
    }
})

export default Reducer.reducer

export const {filter}=Reducer.actions
