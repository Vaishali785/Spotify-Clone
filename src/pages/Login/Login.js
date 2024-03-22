import React, { useEffect, useState } from "react";
// import { login_url } from '../../utilities/auth/LoginScopes';
import { authUrl, params } from "../../utilities/auth/GetTokenNew";
import classes from './Login.module.css';
import IMAGES from "../../assets/images";
import WarningModal from "../../components/UI/WarningModal/WarningModal";


export default function Login() {
    // const _token = useGenerateToken();
    const [warning, showWarning] = useState();

    // console.log("login")
    const submitHandler = (e) => {
        showWarning(false);
        console.log("hey")
        e.preventDefault();
        const authUrl = new URL('https://accounts.spotify.com/authorize');
        const urlParams = params;
        authUrl.search = new URLSearchParams(urlParams).toString();
        window.location.href = authUrl.toString();
        // console.log("hey")
    }
    return (
        <div className={classes.login}>
            <img src={IMAGES.spotifyLogoImg} alt="Spotify Logo" />
            <button className={classes['start-btn']} onClick={() => showWarning(true)}>Start App</button>
            {warning && <WarningModal showWarning={showWarning} clickHandler={submitHandler} />}
        </div>
    )
}
