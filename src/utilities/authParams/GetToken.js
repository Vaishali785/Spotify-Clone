const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const redirect_uri = "https://spotifybyvaishali.web.app/" || "https://spotifybyvaishali.firebase.com/";
const scopes = [
    // "user-read-playback-state",
    // "user-follow-read",
    // "user-modify-playback-state",
    // "user-read-currently-playing",


    "user-read-recently-played",
    "user-top-read",
    "user-read-private",
    "user-read-email",
    "user-library-read",
    "user-library-modify",
    "playlist-modify-public",

];
export const params = {
    response_type: 'code',
    scope: scopes,
    redirect_uri: redirect_uri,
    client_id: client_id,
    show_dialog: true
};
/**
 * this gets hit when login button is clicked and returns a code in url
 */
export const authUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=false`;

/**
 * 
 *  this reads the code from the url and save it to localstorage and cleans the window url
 * and this function is executed from the requestAccessToken function
 */
export const extractCodeFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
        sessionStorage.setItem("code", code);
        window.location.href = window.location.href.split("?code=")[0];
    }
    return code;
}

/**
 * this function executes extractCodeFromUrl to get the code, and then request for access token
 * this function gets executed from App component in useEffect (which doesnt feels right).
 */
export const requestRefreshToken = async () => {
    const code = sessionStorage.getItem("refresh");
    try {
        const url = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            body: new URLSearchParams({
                refresh_token: code,
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
        const res = await url.json();
        console.log(res);
        return res;
    } catch (err) {
        console.error('Error making POST request:', err.message);
    }
}

