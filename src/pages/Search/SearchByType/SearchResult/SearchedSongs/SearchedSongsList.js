import React, { useEffect, useState } from 'react';
import classes from '../../../Search.module.css';
import SearchedSongs from './SearchedSongs';
import useSendHttpRequest from '../../../../../hooks/sendHttpReq';
import { checkUserLikedSong } from '../../../../../utilities/data/SpotifyApiCalls';


const SearchedSongsList = ({ songs }) => {
    const { isLoading, response, error, fetchFunction: checkLike } = useSendHttpRequest();
    const [showOptions, setShowOptions] = useState();
    useEffect(() => {
        if (songs) {
            const idsLocal = [];
            songs?.map(item => idsLocal.push(item.id));
            const config2 = {
                url: checkUserLikedSong(idsLocal.join(",")),
                method: "GET",
            }
            if (idsLocal.length > 0) {
                checkLike(config2);
            }
        }
    }, [checkLike, songs])
    return (
        <div className={classes['searched_song_container']}>
            <h2 className={`${classes["searched_section-heading"]}`}>Songs</h2>
            {songs?.map((song, index) => (
                <SearchedSongs
                    key={index}
                    song={song}
                    index={index}
                    liked={response && response[index]}
                    showOptions={showOptions}
                    setShowOptions={setShowOptions}
                    data-id={song.id}
                />
            ))}
        </div>
    )
}

export default SearchedSongsList