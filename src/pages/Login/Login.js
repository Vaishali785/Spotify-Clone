import React, { useState } from "react";
import { params } from "../../utilities/authParams/GetToken";
import classes from './Login.module.css';
import IMAGES from "../../assets/images";
import WarningModal from "../../components/UI/WarningModal/WarningModal";


export default function Login() {
    const [warning, showWarning] = useState(false);
    const submitHandler = (e) => {
        // showWarning(false);
        const currentUrl = window.location.href;
        e.preventDefault();
        const authUrl = new URL('https://accounts.spotify.com/authorize');
        params.redirect_uri = currentUrl;
        const urlParams = params;
        authUrl.search = new URLSearchParams(urlParams).toString();
        window.location.href = authUrl.toString();
    }

    return (
        <div className={classes.login}>
            <img src={IMAGES.spotifyLogoImg} alt="Spotify Logo" />
            <button className={classes['start-btn']} onClick={() => showWarning(prev => !prev)}>Start App</button>
            {/* {params} */}
            {/* <p className={classes["warning"]}><b>Caution :</b> Changes made here affect your personal account.</p> */}
            {warning && <WarningModal showWarning={showWarning} clickHandler={submitHandler} />}
        </div>
    )
}
