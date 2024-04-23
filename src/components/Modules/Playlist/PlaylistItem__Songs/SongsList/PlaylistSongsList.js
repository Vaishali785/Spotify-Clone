import React, { useEffect, useState } from 'react'
import { checkUserLikedSong, getPlaylistItems } from '../../../../../utilities/data/SpotifyApiCalls';
import useSendHttpRequest from '../../../../../hooks/sendHttpReq';
import SongsTitleBar from '../TitleBar/Playlist__SongsTitleBar';
import SongsListItem from '../SongsList_Item/SongsListItem';
import SongsListItemSkeleton from '../SongsList_Item/Skeleton/SongsListItemSkeleton';
// import RowSkeleton from '../SongsList_Item/Skeleton/SongsListItemSkeleton';

const PlaylistSongsList = ({ playlistId, colors }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    const [showOptions, setShowOptions] = useState();
    const { isLoading: isLoading2, response: response2, error: error2, fetchFunction: checkLike } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getPlaylistItems(playlistId, 20),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, playlistId])

    useEffect(() => {
        if (response) {
            const idsLocal = [];
            response?.items.map(item => idsLocal.push(item.track.id));
            const config2 = {
                url: checkUserLikedSong(idsLocal.join(",")),
                method: "GET",
            }
            if (idsLocal.length > 0) {
                checkLike(config2);
            }
        }
    }, [checkLike, response])

    return (
        <div className={`playlist_songs_list list-pd-bottom`} style={colors && { backgroundColor: colors[2], backgroundImage: `linear-gradient(rgba(0,0,0,.6), #121212 20%)` }}>
            <SongsTitleBar />
            {
                isLoading
                    ?
                    Array(8).fill().map((item, index) => <SongsListItemSkeleton key={index} />)
                    :
                    <div className={`playlist_songs_list_items`}>
                        {response?.items.map((item, index) => (
                            <SongsListItem
                                key={index}
                                items={item}
                                index={index}
                                liked={response2 && response2[index]}
                                showOptions={showOptions}
                                setShowOptions={setShowOptions}
                                data-id={item.track.id}
                                colors={colors && colors[2]}
                            />
                        ))
                        }
                    </div>
            }
        </div>
    )
}

export default PlaylistSongsList