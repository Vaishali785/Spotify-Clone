import React, { useEffect } from "react";
// import { login_url } from '../../utilities/auth/LoginScopes';
import { authUrl, params } from "../../utilities/auth/GetTokenNew";
import classes from './Login.module.css';
import IMAGES from "../../assets/images";
import { redirect } from "react-router-dom";

export default function Login() {
    // const _token = useGenerateToken();

    // console.log("login")
    const submitHandler = (e) => {
        e.preventDefault();
        const authUrl = new URL('https://accounts.spotify.com/authorize');
        const urlParams = params;
        authUrl.search = new URLSearchParams(urlParams).toString();
        window.location.href = authUrl.toString();
        // console.log("hey")
    }
    return (
        <form className={classes.login}>
            <img src={IMAGES.spotifyLogoImg} alt="Spotify Logo" />
            <button className={classes['login-btn']} onClick={submitHandler}>Login to Spotify</button>
        </form>
    )
}
