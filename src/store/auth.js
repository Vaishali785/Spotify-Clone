import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { code: null, access_token: null, refresh_token: null, token_expiry: "3600", time_token_generation: null, isUnauthorized: false }
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setAccessToken(state, action) {
            // console.log("action.payload");
            // console.log(action.payload);
            state.access_token = action.payload;
        },
        setRefreshToken(state, action) {
            state.refresh_token = action.payload.refresh_token;
            state.token_expiry = action.payload.token_expiry;
        },
        setTimeTokenGeneration(state, action) {
            state.time_token_generation = action.payload;
        },
        setIsUnauthorized(state, action) {
            console.log("isUnauthorized");
            state.isUnauthorized = true;
            document.body.style.overflow = 'hidden';
        },
        getAccessTokenWithRefreshToken() {
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;