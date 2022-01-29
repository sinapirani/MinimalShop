
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
        },
        cartREMOVE: (state,action)=>{
            let targetIndex = state.items.findIndex(item => item.id === action.payload)
            targetIndex > -1 ? state.items.splice(targetIndex,1) : console.log('');
        }
    }
})

export const {cartADD,cartREMOVE} = cartSlice.actions
export default cartSlice.reducer