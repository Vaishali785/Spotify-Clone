import React from 'react';
import classes from './ArtistItemHeaderSkeleton.module.css';

const ArtistItemHeaderSkeleton = () => {
    return (
        <div className={`${classes['skeleton_artist_header']}`}>
            <div className={`${classes['skeleton_artist_header__cover-img']} skeleton-bg`} />

            <div className={`${classes['skeleton_artist_header__content']}`}>
                <span className={`${classes['skeleton_artist_header__sub-heading']} skeleton-bg`}></span>
                <div className={`${classes['skeleton_artist_header__heading']} skeleton-bg`}></div>
            </div>
        </div>
    )
}

export default ArtistItemHeaderSkeleton