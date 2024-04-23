import React from 'react';
import classes from './PlaylistItemHeaderSkeleton.module.css';

const PlaylistItemHeaderSkeleton = () => {
    return (
        <div>
            <div className={`${classes['skeleton-playlist_header']}`} >
                <div className={`${classes['skeleton-playlist_header__cover-img']}  skeleton-bg`} />
                <div className={`${classes['skeleton-playlist_header__content']}`}>
                    <span className={`${classes['skeleton-playlist_header__sub-heading']}  skeleton-bg`}></span>
                    <div className={`${classes['skeleton-playlist_header__heading']}  skeleton-bg`}></div>
                    <div className={`${classes['skeleton-playlist_header__description']}  skeleton-bg`}></div>
                    <div className={`${classes['skeleton-playlist_header__others']}`}>
                        <div className={`${classes['skeleton-playlist_header__owner']}  skeleton-bg`}></div>
                        <div className={`${classes['skeleton-playlist_header__songs']}  skeleton-bg`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItemHeaderSkeleton