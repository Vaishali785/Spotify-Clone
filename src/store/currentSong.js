import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialSongState = { songDetail: null, isPlaying: null }
const songSlice = createSlice({
    name: 'song',
    initialState: initialSongState,
    reducers: {
        setCurrentSong(state, action) {
            state.songDetail = action.payload;
        },
        setIsPlaying(state, action) {
            state.isPlaying = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setInitialPlayerSong.fulfilled, (state, action) => {
            const lastPlayedSong = JSON.parse(sessionStorage.getItem("lastPlayed")) ?? action.payload.items[0].track;
            state.songDetail = lastPlayedSong;
        })
    }
})


export const songActions = songSlice.actions;


export const setInitialPlayerSong = createAsyncThunk(
    'content/setInitialPlayerSong',
    async (args, { getState }) => {
        const state = getState();
        // console.log(state);
        const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played?before=${state.auth.time_token_generation}&limit=1`, {
            headers: {
                'Authorization': `Bearer ${state.auth.access_token}`
            }
        });
        if (!response.ok) {
            throw new Error("Error in getting last played song.");
        }
        const lastPlayedSong = await response.json();
        if (!sessionStorage.getItem("lastPlayed")) {
            sessionStorage.setItem("lastPlayed", JSON.stringify(lastPlayedSong.items[0].track));
        }
        return lastPlayedSong;
    }
)


export default songSlice