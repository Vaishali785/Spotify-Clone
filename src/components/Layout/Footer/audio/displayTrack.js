import React from 'react'
import track from './css/DisplayTrack.module.css';
import audio from './css/AudioPlayer.module.css';
import { songActions } from '../../../../store/currentSong';
import { useDispatch, useSelector } from 'react-redux';


const DisplayTrack = ({ audioRef, setDuration, sliderRef, setTimeProgress }) => {
    const dispatch = useDispatch();
    const currentTrack = useSelector(state => state.song.songDetail)


    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioRef.current.duration);
        setDuration(seconds);
        sliderRef.current.max = seconds;
    }

    const handleSongEnd = () => {
        dispatch(songActions.setIsPlaying(false))
    };

    const handleTimeUpdate = () => {
        setTimeProgress(audioRef.current.currentTime);
    }

    return (
        <div className={`${track['audio-slider']} ${audio['display']} `}>
            {
                currentTrack ?
                    <>
                        <audio

                            src={currentTrack.preview_url}
                            ref={audioRef}
                            onLoadedMetadata={onLoadedMetadata}
                            onEnded={handleSongEnd}
                            onTimeUpdate={handleTimeUpdate}
                        ></audio>

                        <div className={track["audio-info"]}>
                            <div className={track["thumb"]}>
                                <img src={currentTrack.album?.images[2].url} alt="Song Track " />
                            </div>
                            <div className={track["audio-text"]}>
                                <div className={track["audio-name"]}>{currentTrack?.name}</div>
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