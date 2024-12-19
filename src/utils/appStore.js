import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionsReducer from "./connectionSlice"
import requestsReducer from "./requestsSlice"
import connectionProfileViewReducer from "./connectionProfileViewSlice"








const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionsReducer,
        requests: requestsReducer,
        connectionProfileView: connectionProfileViewReducer,
    }
})


export default appStore;