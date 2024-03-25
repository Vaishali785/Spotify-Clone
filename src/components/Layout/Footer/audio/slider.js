import React from 'react'
import './css/slider.css';
import slider from './css/Slider.module.css';
import audio from './css/AudioPlayer.module.css';
import timeFormatterInMinsSecs from '../../../../utilities/general/TimeFormatterInMinsSecs';
import { useDispatch, useSelector } from 'react-redux';
import { songActions } from '../../../../store/currentSong';

const Slider = ({ sliderRef, audioRef, timeProgress, duration, setDuration, setTimeProgress }) => {

    // const dispatch = useDispatch();
    // const currentTrack = useSelector(state => state.song.songDetail)

    // const onLoadedMetadata = () => {
    //     const seconds = Math.floor(audioRef.current.duration);
    //     setDuration(seconds);
    //     sliderRef.current.max = seconds;
    // }

    // const handleSongEnd = () => {
    //     dispatch(songActions.setIsPlaying(false))
    // };

    // const handleTimeUpdate = () => {
    //     setTimeProgress(audioRef.current.currentTime);
    // }

    /**
     * when user forwards the track  
     */
    const handleSliderChange = () => {
        audioRef.current.currentTime = sliderRef.current.value;
    }

    return (
        <div className={`${slider["progress"]} ${audio['slider']}`}>
            {/* <audio
                src={currentTrack?.preview_url}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={handleSongEnd}
                onTimeUpdate={handleTimeUpdate}
            ></audio> */}


            <span className={slider["time current"]}>{timeFormatterInMinsSecs(timeProgress)}</span>
            <input
                type="range"
                ref={sliderRef}
                defaultValue="0"
                onChange={handleSliderChange}
                min="0" max={100}
            // value={audioRef.current && Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)}
            // step={.1}
            />
            <span className={slider["time"]}>{timeFormatterInMinsSecs(duration)}</span>
        </div>
    )
}

export default Slider