import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reduser";
const store=configureStore({
    reducer:Reducer
})
export default store