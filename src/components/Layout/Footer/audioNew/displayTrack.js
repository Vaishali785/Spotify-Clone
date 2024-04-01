import React from 'react'
import track from './css/DisplayTrack.module.css';
import audio from './css/AudioPlayer.module.css';
import { useSelector } from 'react-redux';


const DisplayTrack = () => {
    const currentTrack = useSelector(state => state.song.songDetail);
    return (
        <div className={`${track['audio-slider']} ${audio['display']} `}>
            {
                currentTrack ?
                    <>
                        <div className={track["audio-info"]}>
                            <div className={track["thumb"]}>
                                <img src={currentTrack.album?.images[2].url} alt="Song Track " />
                            </div>
                            <div className={track["audio-text"]}>
                                <div className={`${track["audio-name"]} truncate-name`}>{currentTrack?.name}</div>
                                <div className={track["audio-singer"]}>{currentTrack && currentTrack?.artists[0].name}</div>
                            </div>
                        </div>
                    </>
                    :
                    <p>Loading....</p>
            }
        </div>
    )
}

export default DisplayTrack