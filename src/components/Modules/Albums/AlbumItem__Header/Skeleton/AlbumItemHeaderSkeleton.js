import React from 'react';
import classes from './AlbumItemHeaderSkeleton.module.css';

const AlbumItemHeaderSkeleton = () => {
    return (
        <div className={`${classes['skeleton_album_header']}`}>
            <div className={`${classes['skeleton_album_header__cover-img']} skeleton-bg`} />
            <div className={`${classes['skeleton_album_header__content']}`}>
                <span className={`${classes['skeleton_album_header__sub-heading']} skeleton-bg`}></span>
                <div className={`${classes['skeleton_album_header__heading']} skeleton-bg`}></div>
                {/* <div className={`${classes['skeleton_album_header__description']}`}>{removeHTMLTags(response.description)}</div> */}
                <div className={`${classes['skeleton_album_header__others']} skeleton-bg2`}>
                    <div className={`${classes['skeleton_album_header__owner']} skeleton-bg`}></div>
                    <div className={`${classes['skeleton_album_header__songs']} skeleton-bg`}></div>
                </div>
            </div>
        </div>
    )
}

export default AlbumItemHeaderSkeleton