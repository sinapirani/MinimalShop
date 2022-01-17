import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './counter'

export default configureStore({
    reducer:{
        counter: CounterSlice
    }
})