import React from 'react';
import classes from './Playlist__SongsTitleBar.module.css';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const SongsTitleBar = () => {
    return (
        <div className={`${classes['playlist__songs_title-bar']}`}>
            <div className={classes["playlist-definition-bar"]}>
                <span className={`${classes["playlist-definition-bar__index"]} justify-self-center`}>#</span>
                {/* <span></span> */}
                <span className={`${classes['playlist-definition-bar__title']}`}>Title</span>
                <span className={`${classes['playlist-definition-bar__album']}`}>Album</span>
                {/* <span></span> */}
                <span className={`${classes['playlist-definition-bar__time']} fix-icons-height`}>
                    <AccessTimeRoundedIcon />
                </span>
            </div>
            <div className={classes["playlist-definition-bar__bottomBorder"]} />
        </div>
    )
}

export default SongsTitleBar