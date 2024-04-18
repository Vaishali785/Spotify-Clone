import React from 'react';
import classes from './SongsListItemSkeleton.module.css';

const SongsListItemSkeleton = () => {
    return (
        <div className={`${classes['skeleton-playlist-row']}`}>
            <div className={`${classes['skeleton-playlist-row__index']} skeleton-bg`}></div>
            <div className={classes['skeleton-playlist-row__song']}>
                <div className={`${classes['skeleton-playlist-row__img']}  skeleton-bg`}></div>
                <div className={classes['skeleton-playlist-row__songDetails']}>
                    <div className={`${classes['skeleton-playlist-row__title']}  skeleton-bg`}></div>
                    <div className={`${classes['skeleton-playlist-row__subtitle']} skeleton-bg`}></div>
                </div>

            </div>
            <div className={`${classes['skeleton-playlist-row__album']} skeleton-bg`}></div>
            <div className={`${classes["skeleton-playlist-row__like"]} skeleton-bg `}>
            </div>

            <div className={`${classes["skeleton-playlist-row__time"]} skeleton-bg`}></div>
            <div className={`${classes["skeleton-playlist-row__options"]} skeleton-bg`}>
            </div>
        </div>
    )
}

export default SongsListItemSkeleton