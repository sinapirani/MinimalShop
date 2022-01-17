import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './counter'
import  profileSlice from "./profile";

export default configureStore({
    reducer:{
        counter: CounterSlice,
        profile: profileSlice
    }
})