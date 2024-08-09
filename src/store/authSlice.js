import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    Userdata: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            state.status = true;
            state.Userdata = action.payload.Userdata;
        },
        logout: (state)=>{
            state.status = false
            state.Userdata = null
        }
    }

})




export const {login, logout} = authSlice.actions

export default authSlice.reducer