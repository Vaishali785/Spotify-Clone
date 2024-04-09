import React from 'react';
import skeleton from './SongsListItemSkeleton.module.css'

const SongsListItemSkeleton = () => {
    return (
        <div className={`${skeleton['skeleton-artist-row']}`}>
            <div className={`${skeleton['skeleton-artist-row__index']} skeleton-bg`}></div>
            <div className={skeleton['skeleton-artist-row__song']}>
                <div className={`${skeleton['skeleton-artist-row__img']}  skeleton-bg`}></div>
                <div className={skeleton['skeleton-artist-row__songDetails']}>
                    <div className={`${skeleton['skeleton-artist-row__title']}  skeleton-bg`}></div>
                    {/* <div className={`${skeleton['skeleton-artist-row__subtitle']} skeleton-bg`}></div> */}
                </div>

            </div>

            <div className={`${skeleton["skeleton-artist-row__like"]} skeleton-bg`}></div>

            <div className={`${skeleton["skeleton-artist-row__time"]} skeleton-bg`}></div>
            <div className={`${skeleton["skeleton-artist-row__options"]} skeleton-bg `}></div>
        </div>
    )
}


export default SongsListItemSkeleton