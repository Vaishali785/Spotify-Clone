import React, { useEffect, useState } from 'react'
import useSendHttpRequest from '../../../../../hooks/sendHttpReq';
import { checkUserLikedSong, getArtistTopTracks } from '../../../../../utilities/data/SpotifyApiCalls';
import SongsListItem from '../SongsList_Item/SongsListItem';
import SongsListItemSkeleton from '../SongsList_Item/Skeleton/SongsListItemSkeleton';
import AlbumSongsTitleBar from '../../../Albums/AlbumItem__Songs/TitleBar/Album__SongsTitleBar';

const ArtistSongsList = ({ artistId, colors }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    const { isLoading: isLoading2, response: response2, error: error2, fetchFunction: checkLike } = useSendHttpRequest();
    const [showOptions, setShowOptions] = useState();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getArtistTopTracks(artistId),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, artistId])

    useEffect(() => {
        if (response) {
            const idsLocal = [];
            response?.tracks.map(item => idsLocal.push(item.id));
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
        <div className={`artist_songs_list list-pd-bottom`} style={colors && { backgroundColor: colors[1], backgroundImage: `linear-gradient(rgba(0,0,0,.6), #121212 60%)` }}>
            <AlbumSongsTitleBar />
            {
                isLoading
                    ?
                    Array(8).fill().map((item, index) => <SongsListItemSkeleton key={index} />)
                    :
                    response?.tracks.map((i, index) => (
                        <SongsListItem
                            key={index}
                            items={i}
                            liked={response2 && response2[index]}
                            index={index}
                            showOptions={showOptions}
                            setShowOptions={setShowOptions}
                            data-id={i.id}
                            colors={colors && colors[1]}

                        />
                    ))
            }
        </div>
    )
}

export default ArtistSongsList