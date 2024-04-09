import React from 'react'
import classes from './SongsListItemSkeleton.module.css';


const SongsListItemSkeleton = (props) => {
    // console.log("props");
    // console.log(props);
    return (
        <div className={`${classes['skeleton-album-row']}`}>
            <div className={`${classes["skeleton-album-row__index"]} skeleton-bg`}></div>
            <div className={classes["skeleton-album-row__song"]}>
                <div className={classes["skeleton-album-row__songDetails"]}>
                    <div className={`${classes["skeleton-album-row__title"]} skeleton-bg`}></div>
                    <div className={`${classes["skeleton-album-row__artists"]} skeleton-bg`}></div>
                </div>
            </div>

            {/*--------------------- add check here */}
            <div className={`${classes["skeleton-album-row__like"]} skeleton-bg`}></div>

            <div className={`${classes["skeleton-album-row__time"]} skeleton-bg`}></div>
            <div className={`${classes["skeleton-album-row__options"]} skeleton-bg`}></div>
        </div >
    )
}

export default SongsListItemSkeleton