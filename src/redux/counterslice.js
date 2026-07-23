import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState : {counter:0},
reducers:{
     increment:(state,action)=>{
        state.counter=state.counter+1
     }
}
})

export const {increment}= counterSlice.actions
export default counterSlice.reducer