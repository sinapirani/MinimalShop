import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name:'counter',
    initialState:{
        value: 0
    },
    reducers:{
        counterIncrease: state=>{
            state.value += 1
        },
        counterDecrease: state=>{
            state.value += 1
        }
        
    }
})

export const {counterDecrease,counterIncrease} = counter.actions
export default counter.reducer