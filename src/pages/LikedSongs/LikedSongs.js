import React, { useEffect } from 'react'
import useSendHttpRequest from '../../hooks/sendHttpReq';
import classes from './LikedSongs.module.css';
import LikedSongsList from '../../components/Modules/LikedSongs/Liked_Songs/SongsList/LikedSongsList';
import { getUserLikedTracks } from '../../utilities/data/SpotifyApiCalls';
import LikedSongsHeader from '../../components/Modules/LikedSongs/Liked_Header/LikedSongsHeader';

const LikedSong = () => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getUserLikedTracks(),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction])


    return (
        <>
            <div className={classes['playlist-page']}>
                <LikedSongsHeader totalCount={response?.total} />
                {/* <SongsTitleBar /> */}
                <LikedSongsList response={response} error={error} isLoading={isLoading} colors="#7b6ae8" />
            </div>
        </>
    )
}

export default LikedSong