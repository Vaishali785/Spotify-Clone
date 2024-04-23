import React from 'react';
import skeleton from './PlaylistCollectionSkeleton.module.css';

const PlaylistCollectionSkeleton = () => {
    return (
        <div className={`${skeleton["main-row"]} main-row`}>
            <div className={`${skeleton["skeleton-main-playlist-heading"]} skeleton-bg`}></div>
            <div className={`${skeleton['skeleton-main-playlist-row']}`}>
                {Array(5).fill().map((item, index) => (
                    <div className={`${skeleton['skeleton-playlist-card']}`} key={index}>
                        <div className={`${skeleton['skeleton-playlist-item-img']} skeleton-bg`} />
                        <div className={`${skeleton["skeleton-playlist-item-details"]}`}>
                            <div className={`${skeleton["skeleton-playlist-item-details__name"]} truncate-name skeleton-bg`}></div>
                            <div className={`${skeleton["skeleton-playlist-item-details__description"]} skeleton-bg`}></div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>

    )
}

export default PlaylistCollectionSkeleton