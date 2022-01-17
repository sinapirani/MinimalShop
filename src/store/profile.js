import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:'profile',
    initialState:{
        profile:{
            name: '',
            username: '',
            number: '',
            avatar: ''
        },
        sign: false,
    },
    reducers:{
        sign: (state,action)=>{
            state.sign = action.payload
        }
    }
})

export const {sign} = profileSlice.actions
export default profileSlice.reducer