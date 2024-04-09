import { createSlice } from "@reduxjs/toolkit";

const initialState = { content: "", showNotification: false };
const notificationSlice = createSlice({
    initialState,
    name: "notification",
    reducers: {
        showNotification(state, action) {
            state.showNotification = true;
            state.content = action.payload;
        },
        emptyNotification(state, action) {
            state.showNotification = false;
        }
    }
})

export const notificationActions = notificationSlice.actions;

export default notificationSlice;


export const openNotificationModal = () => {
    return async (dispatch) => {
        const setNotificationContent = () => {
            setTimeout(() => {
                dispatch(notificationActions.emptyNotification())
            }, 3000);
        }
        setNotificationContent();
    }
}