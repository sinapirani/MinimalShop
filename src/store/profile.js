import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:'profile',
    initialState:{
        profile:{
            name: '',
            username: 'sss',
            password: 'sss',
            number: '',
            avatar: ''
        },
        sign: false,
    },
    reducers:{
        sign: (state,action)=>{
            state.sign = action.payload
        },
        profile: (state,action)=>{
            state.profile = action.payload
        }
    }
})

export const {sign} = profileSlice.actions
export default profileSlice.reducer