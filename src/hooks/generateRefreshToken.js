import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import { useCallback, useState } from "react";


const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
/**
 * if you have code and want to generate access_token
 */
const useGenerateRefreshToken = () => {
    const dispatch = useDispatch();
    const expiry = useSelector(state => state.auth.token_expiry);
    const expiryInMs = expiry * 1000;
    const refresh_token = sessionStorage.getItem("refresh");
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const initialTime = useSelector(state => state.auth.time_token_generation);

    const requestRefreshToken = useCallback(async () => {

        setIsLoading(true);
        try {
            const url = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                body: new URLSearchParams({
                    refresh_token: refresh_token,
                    grant_type: "refresh_token"
                }).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${btoa(`${client_id}:${client_secret}`)}`
                }
            })
            if (!url.ok) {
                throw new Error(`HTTP error! Status: ${url.status}`);
            }
            const request = await url.json();
            const newTime = Date.now();
            if (request.access_token) {
                dispatch(authActions.setAccessToken(request.access_token));
                dispatch(authActions.setTimeTokenGeneration(newTime));
                // dispatch(authActions.setLoggedIn());
            }
            if (request.refresh_token) {
                dispatch(authActions.setRefreshToken({ refresh_token: request.refresh_token, token_expiry: request.expires_in }));
                dispatch(authActions.setTimeTokenGeneration(initialTime));
            }
            setIsLoading(false);
        } catch (err) {
            console.error('Error making POST request:', err.message);
        }

    }, [dispatch, refresh_token, initialTime])

    return { isLoading, error, requestRefreshToken }
    // if (code && refresh_token && !token) {
    //     requestRefreshToken();
    // }
}

export default useGenerateRefreshToken