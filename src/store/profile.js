import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:'profile',
    initialState:{
        profile:{
            name: '',
            lastname: '',
            username: '',
            password: '',
        },
        sign: false,
    },
    reducers:{
        sign: (state,action)=>{
            state.sign = action.payload
        },
        profile: (state,action)=>{
            state.profile = action.payload
        },
        signup: (state,action)=>{
            state.profile = action.payload
        }
    }
})

export const {sign,profile,signup} = profileSlice.actions
export default profileSlice.reducer