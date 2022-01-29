
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [

        ],
        totalcount: 0
    },
    reducers:{
        cartADD: (state,action)=>{
            state.items = [
                ...state.items,
                action.payload
            ]
            state.totalcount += +action.payload.price
        },
        cartREMOVE: (state,action)=>{
            let targetIndex = state.items.findIndex(item => item.id === action.payload)
            state.totalcount -= +state.items[targetIndex].price
            if(targetIndex > -1 ){
                state.items.splice(targetIndex,1)
            }
        },
        cartCOUNT_UP: (state,action)=>{
            let item = state.items.findIndex(item => item.id === action.payload)
            state.items[item].count += 1
            state.totalcount += +state.items[item].price
        },
        cartCOUNT_DOWN: (state,action)=>{
            let item = state.items.findIndex(item => item.id === action.payload)
            state.items[item].count > 1 ? state.totalcount -= state.items[item].price : console.log('no')
            state.items[item].count > 1 ? state.items[item].count -= 1 : console.log('')
        }
    }
})

export const {cartADD,cartREMOVE,cartCOUNT_UP,cartCOUNT_DOWN,cartTOTAl_UP} = cartSlice.actions
export default cartSlice.reducer