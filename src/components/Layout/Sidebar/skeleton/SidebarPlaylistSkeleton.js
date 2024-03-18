import React from 'react';
import skeleton from './SidebarPlaylistSkeleton.module.css';

const SidebarPlaylistSkeleton = (props) => {
    const count = props.mobileLibrary ? 15 : 5;
    return (
        <div className={`${skeleton['skeleton-sidebar-playlist__container']} ${props.mobileLibrary ? skeleton['skeleton-mobile-library'] : ''}`}>
            {Array(count).fill().map((item, index) => (
                <div className={`${skeleton['skeleton-sidebar-playlist__list']}`} key={index}>
                    <div className={`${skeleton['skeleton-sidebar-playlist__img']}  skeleton-bg`} />
                    <div className={`${"skeleton-sidebar-playlist__item"}`}>
                        <div className={`${skeleton["skeleton-sidebar-playlist-item__name"]}  skeleton-bg`} />
                        <div className={`${skeleton["skeleton-sidebar-playlist-item__type"]}  skeleton-bg`} />
                    </div>
                </div>

            ))}
        </div>
    )
}

export default SidebarPlaylistSkeleton