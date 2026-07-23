import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name :"cart",
    initialState: {items :[]},
    reducers: {
        addtocart : (state,action)=>{
       const ei= state.items.find(
        (item)=>item.id===action.payload.id
       )
       if(ei)
       {
        ei.quantity=ei.quantity+1
       }
       else{
        state.items.push({...action.payload,quantity:1})
        
        
       }

        },

        removefromcart: (state,action)=>{
           const arr=  state.items.filter((item)=>item.id!==action.payload)
           state.items= arr
        },

        clearcart:(state,action)=>{
state.items=[]
        }
    }

    

})


export const { addtocart, removefromcart, clearcart } = cartSlice.actions
export default cartSlice.reducer