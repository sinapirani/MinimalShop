
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [

        ]
    },
    reducers:{
        cartADD: (state,action)=>{
            state.items = [
                ...state.items,
                action.payload
            ]
        }
    }
})

export const {cartADD} = cartSlice.actions
export default cartSlice.reducer