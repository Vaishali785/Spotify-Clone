import React from 'react'
import home from '../../../pages/Home/Home.module.css';
import NavMobile from '../NavMobile/NavMobile';
import AudioPlayer from './audioNew/audioPlayer';

// AudioNew contains audio track and its functions inside Slider
// Audio has audio tag and its functions inside DisplayTrack

const Footer = () => {

    return (

        <div className={`${home['home-grid__footer']} ${home['footer']}`}>
            <AudioPlayer />
            <NavMobile />
        </div>

    )
}

export default Footer