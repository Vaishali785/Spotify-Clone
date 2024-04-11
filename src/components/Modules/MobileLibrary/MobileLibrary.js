import React from 'react'
import SidebarPlaylists from '../../Layout/Sidebar/SidebarPlaylists'
import classes from './MobileLibrary.module.css';

const MobileLibrary = () => {
    return (
        <div className={`${classes['mobile-library']} mobile-library-copyright`}>
            {/* <h2>Your Library</h2> */}
            <SidebarPlaylists fullHeight mobileLibrary />
        </div>
    )
}

export default MobileLibrary