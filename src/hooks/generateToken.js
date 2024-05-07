import { useDispatch } from "react-redux";
import { extractCodeFromUrl } from "../utilities/authParams/GetToken";
import { authActions } from "../store/auth";


const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const redirect_uri = window.location.href;
/**
 * if you have code and want to generate access_token
 */
const useGenerateToken = () => {
    const dispatch = useDispatch();
    extractCodeFromUrl();
    const code = sessionStorage.getItem("code");
    const refreshToken = sessionStorage.getItem("refresh");
    const requestAccessToken = async () => {
        try {
            const url = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                body: new URLSearchParams({
                    code: code,
                    redirect_uri: redirect_uri,
                    grant_type: "authorization_code"
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
            const time = Date.now();
            if (request.access_token) {
                // console.log(request.access_token)
                dispatch(authActions.setAccessToken(request.access_token));
                dispatch(authActions.setTimeTokenGeneration(time))
                sessionStorage.setItem("time", time);
                // dispatch(authActions.setLoggedIn());
            }
            if (request.refresh_token) {
                sessionStorage.setItem("refresh", request.refresh_token);
                dispatch(authActions.setRefreshToken({ refresh_token: request.refresh_token, token_expiry: request.expires_in }))
            }
        } catch (err) {
            console.error('Error making POST request:', err.message);
        }
    }
    if (code && !refreshToken) {
        requestAccessToken();
    }

}

export default useGenerateToken
