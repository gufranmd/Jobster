import { configureStore } from "@reduxjs/toolkit";
import User_Slice from "./User_Slice";
export const store=configureStore({
    reducer:{
        user:User_Slice,
    }
})