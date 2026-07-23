import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice"
import authReducer from "../redux/authslice"
import counterReducer from "../redux/counterslice"

export const store = configureStore({
    reducer:{
         cart:cartReducer,
         auth:authReducer,
         counter:counterReducer
    }
})