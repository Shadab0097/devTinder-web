import { createSlice } from "@reduxjs/toolkit";
import Profile from "../components/Profile";
const savedProfile = localStorage.getItem('connectionProfileView') ? JSON.parse(localStorage.getItem('connectionProfileView')) : null;

const initialState = savedProfile || null;

const connectionProfileViewSlice = createSlice({
    name: 'profileView',
    initialState,
    reducers: {
        addView: (state, action) => {
            state = action.payload
            localStorage.setItem('connectionProfileView', JSON.stringify(state))
            return state
        }
    }
})
export const { addView } = connectionProfileViewSlice.actions
export default connectionProfileViewSlice.reducer