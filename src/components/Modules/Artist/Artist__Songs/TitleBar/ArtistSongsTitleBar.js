
import React from 'react';
import classes from './ArtistSongsTitleBar.module.css';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const ArtistSongsTitleBar = () => {
    return (
        <div className={`${classes['artist__songs_title-bar']}`}>
            <div className={classes["artist-definition-bar"]}>
                <span className={`justify-self-center`}>#</span>
                {/* <span></span> */}
                <span className={`${classes['artist-definition-bar__title']}`}>Title</span>
                {/* <span className={`${classes['artist-definition-bar__artist']}`}>Artist</span> */}
                {/* <span></span> */}
                <span className={classes['artist-definition-bar__time']}>
                    <AccessTimeRoundedIcon />
                </span>
            </div>
            <div className={classes["artist-definition-bar__bottomBorder"]} />
        </div>
    )
}

export default ArtistSongsTitleBar