
import React from 'react';
import classes from './Album__SongsTitleBar.module.css';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const AlbumSongsTitleBar = () => {
    return (
        <div className={`${classes['album__songs_title-bar']}`}>
            <div className={classes["album-definition-bar"]}>
                <span className={`justify-self-center ${classes["album-definition-bar__index"]}`}>#</span>
                {/* <span></span> */}
                <span className={`${classes['album-definition-bar__title']}`}>Title</span>
                {/* <span className={`${classes['album-definition-bar__album']}`}>Album</span> */}
                {/* <span></span> */}
                <span className={`${classes['album-definition-bar__time']} fix-icons-height`}>
                    <AccessTimeRoundedIcon />
                </span>
            </div>
            <div className={classes["album-definition-bar__bottomBorder"]} />
        </div>
    )
}

export default AlbumSongsTitleBar