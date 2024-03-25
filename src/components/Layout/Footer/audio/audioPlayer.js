import React, { useEffect, useRef, useState } from 'react'
import DisplayTrack from './displayTrack'

import Slider from './slider'
import Control from './control';
import { getUserRecentlyPlayed } from '../../../../utilities/data/SpotifyApiCalls';
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import audio from './css/AudioPlayer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useSetNewCurrentSong from '../../../../hooks/setNewCurrentSong';
import { setInitialPlayerSong, songActions } from '../../../../store/currentSong';

let initial = true;
const AudioPlayer = () => {
    const dispatch = useDispatch();
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();
    const sliderRef = useRef();


    useEffect(() => {
        if (initial) {
            dispatch(setInitialPlayerSong());
            initial = false;
        }
    }, [dispatch])

    return (
        <>
            <div className={audio["footer-top"]}>
                <DisplayTrack
                    {...{ audioRef, sliderRef, setDuration, setTimeProgress }}
                />
                <Slider {... { audioRef, sliderRef, timeProgress, duration, setDuration, setTimeProgress }} />
                <Control {...{
                    audioRef, sliderRef, duration, setTimeProgress,
                }} />
            </div>
        </>
    )
}

export default AudioPlayer