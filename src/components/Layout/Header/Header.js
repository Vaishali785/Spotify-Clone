import React, { useState } from 'react';
import Search from '../Search/Search';
import IMAGES from '../../../assets/images';
import classes from './Header.module.css';
import home from '../../../pages/Home/Home.module.css';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileBtn from './ProfileBtn';
import CloseRounded from '@mui/icons-material/CloseRounded';

const Header = () => {
    const url = useLocation();
    const navigate = useNavigate();
    const [showLogOut, setShowLogOut] = useState(false);


    const handleLogOut = () => {
        sessionStorage.removeItem("time");
        sessionStorage.removeItem("code");
        sessionStorage.removeItem("refresh");
        sessionStorage.removeItem("lastPlayed");
        window.location.pathname = '';
        // window.location.reload();
    }

    return (
        <>
            <div className={`${classes.header} ${home['home-grid__header']}`}>

                {/* logo for mobile/tablet */}
                <div className={classes["header-logo"]}>
                    <Link to="/" className={classes['header-logo']}>
                        <img src={IMAGES.spotifyLogoImg} className={classes['header-logo__img']} alt="Spotify logo" />
                    </Link>
                </div>

                {/* Back btns for laptop */}
                <div className={classes['header-btns-search-wrap']}>
                    <div className={`${classes["header-back-btns"]}`}>
                        <button className={`${classes.back} ${classes.headerNavBtn}`} onClick={() => navigate(-1)}>
                            <ArrowBackIosNewRoundedIcon />
                        </button>

                        <button className={`${classes.forward} ${classes.headerNavBtn}`} onClick={() => navigate(1)}>
                            <ArrowForwardIosRoundedIcon />
                        </button>
                    </div>
                    {/* Search */}
                    {url.pathname.includes('/search') && <Search />}
                </div>


                {/* profile btn for laptop */}
                <div className={`${classes["profile-btn-wrap"]}`}>
                    <button className={` ${showLogOut ? classes['log-out-btn'] : classes['header-profile-btn']}`} >
                        {/* hide profile btn content on click */}
                        <ProfileBtn showLogOut={showLogOut} setShowLogOut={setShowLogOut} />

                        {/* log out btn with animation */}
                        <div className={`${showLogOut ? classes['log-out-btn-content'] : classes['hide-content']}`} onClick={handleLogOut}>
                            <span className={`${classes['log-out-btn__text']}`}>
                                Log Out
                            </span>
                        </div>
                    </button>
                    <span className={`${showLogOut ? classes['close-logout'] : classes['hide-content']} `} onClick={() => setShowLogOut(prevState => !prevState)}>
                        <CloseRounded />
                    </span>



                </div>

            </div >
            <div className={classes['lg-hide']}>
                {url.pathname.includes('/search') && <Search />}
            </div>
        </>
    )
}

export default Header