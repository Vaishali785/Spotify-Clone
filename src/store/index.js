import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import songSlice from "./currentSong";
import notification from "./notification";


const store = configureStore({
    reducer: { auth: authSlice.reducer, song: songSlice.reducer, notification: notification.reducer }
})

export default store