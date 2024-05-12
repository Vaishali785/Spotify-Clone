import React from 'react';
import skeleton from './HomeSkeleton.module.css';

const HomeSkeleton = () => {
    return (
        <div className={`${skeleton['skeleton-home']} `}>
            <div className={`${skeleton['skeleton-home-sidebar']} skeleton-bg`} />
            <div className={`${skeleton["skeleton-main-wrap"]}`}>
                <div className={`${skeleton['skeleton-home-header']} `} />
                <div className={`${skeleton['skeleton-home-main']} skeleton-bg`} />
            </div>
            <div className={`${skeleton['skeleton-home-footer']} skeleton-bg`} />
        </div>

    )
}

export default HomeSkeleton