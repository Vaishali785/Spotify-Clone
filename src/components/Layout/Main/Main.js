import React from 'react';
import home from '../../../pages/Home/Home.module.css';
import classes from './Main.module.css';
import PlaylistCollection from '../../Modules/Playlist/PlaylistCollection/PlaylistCollection';


const Main = () => {

    return (
        <>
            <div className={`${home['home-grid__main']} ${classes.main}`}>
                <PlaylistCollection index={5} offset={0} heading="Biggest Hits" noPadTop={true} />
                <PlaylistCollection index={10} offset={5} heading="India's Best" />
                <PlaylistCollection index={15} offset={10} heading="More of what you like" />
            </div>
            <div className='copyright-info copyright'>
                <span>&copy; 2024. All rights reserved.</span>
                <span>Developed by Vaishali</span>
            </div>
        </>
    )
}

export default Main