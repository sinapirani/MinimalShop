import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './counter'
import  profileSlice from "./profile";
import cartSlice from "./cart";

export default configureStore({
    reducer:{
        counter: CounterSlice,
        profile: profileSlice,
        cart: cartSlice
    }
})