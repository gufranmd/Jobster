import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import CustomFetch from "./Axios"; 
import { toast } from "react-toastify";

const initialState={
    isLoading:false,
    user:null,
 };
 export const registerUser=createAsyncThunk(
   'user/registerUser',
   async(user,thunkAPI)=>{
      try{
         const resp=await CustomFetch.post('/auto/testingRegister',user)
      }catch(error){
         console.log(error.response);
      }
   }
 )

 export const loginUser=createAsyncThunk(
   'user/loginUser',
   async(user,thunkAPI)=>{
      console.log(`Login User : ${JSON.stringify(user)}`);
   }
 )
 const User_Slice=createSlice({
    name:'user',
    initialState,
    extraReducers:{
      [registerUser.pending]:(state)=>{
         state.isLoading=true;
      },
      [registerUser.fulfilled]:(state,payload)=>{
         const {user}=payload
         state.isLoading=false
         state.user=user
         toast.success(`Hello There ${user.name}`)
      },
      [registerUser.rejected]:(state,{payload})=>{
         state.isLoading=true;
         toast.error(payload);
      },

    }

 })
 

 export default User_Slice.reducer;