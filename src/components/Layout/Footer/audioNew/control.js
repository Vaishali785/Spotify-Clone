import React, { useState, useEffect, useRef, useCallback } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import control from './css/Control.module.css';
import audio from './css/AudioPlayer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { songActions } from '../../../../store/currentSong';


const Control = ({ audioRef, sliderRef, duration, setTimeProgress }) => {
    const dispatch = useDispatch();;
    const isPlaying = useSelector(state => state.song.isPlaying);
    const currentSong = useSelector(state => state.song.songDetail);
    const [volume, setVolume] = useState(30);
    const [muteVolume, setMuteVolume] = useState(false);
    const playAnimationRef = useRef();


    const repeat = useCallback(() => {
        if (audioRef && audioRef.current) {
            const currentTime = Math.floor(audioRef.current.currentTime);
            setTimeProgress(currentTime);

            sliderRef.current.value = currentTime;
            sliderRef.current.style.setProperty(
                '--range-progress',
                `${((currentTime / 29) * 100)}%`
                // `${Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)}%`
            );
            playAnimationRef.current = requestAnimationFrame(repeat);
        }
    }, [audioRef, setTimeProgress, sliderRef])



    const stopPlaying = () => {
        dispatch(songActions.setIsPlaying(!isPlaying))
    }
    useEffect(() => {
        if (audioRef && audioRef.current) {
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.then(function () {
                        // song plays automatically.
                    }).catch(function (error) {
                        // Automatic playback failed.
                        // Show a UI element to let the user manually start playback.
                        alert("Sorry, This song is not playable!")
                    });
                }
                playAnimationRef.current = requestAnimationFrame(repeat);
            } else {
                audioRef.current.pause();
                // cancelAnimationFrame(playAnimationRef.current);
            }
        }

    }, [audioRef, isPlaying, currentSong, repeat]) //currentSong is required to handle new Song while one is already playing

    useEffect(() => {
        if (audioRef && audioRef.current) {
            audioRef.current.volume = volume / 100; //max value of the audio’s volume property is 1, so divide by max value 
            audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);

    return (
        <div className={`${control["controls-wrapper"]} ${audio['controls']}`}>
            <div className={control["controls"]}>
                <button className={control['play-btn']} onClick={stopPlaying}>
                    {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                </button>
            </div>
            <div className={control["volume"]}>
                <button onClick={() => setMuteVolume((prev) => !prev)} className={control["volume-btn"]}>
                    {muteVolume || volume < 5 ? (
                        <VolumeOffRoundedIcon />
                    ) : volume < 40 ? (
                        <VolumeDownRoundedIcon />
                    ) : (
                        <VolumeUpRoundedIcon />
                    )}
                </button>
                <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)}
                    style={{
                        background: `linear-gradient(to bottom, #1db954 ${volume}%, #ccc ${volume}%)`,
                    }}
                />
            </div>
        </div>
    );
}

export default Control