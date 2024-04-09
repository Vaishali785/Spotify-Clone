import React, { useEffect, useState } from 'react'
import useSendHttpRequest from '../../../../../hooks/sendHttpReq';
import { checkUserLikedSong, getAlbumItems } from '../../../../../utilities/data/SpotifyApiCalls';
import SongsListItem from '../SongsList_Item/SongsListItem';
import AlbumSongsTitleBar from '../TitleBar/Album__SongsTitleBar';
import SongsListItemSkeleton from '../SongsList_Item/Skeleton/SongsListItemSkeleton';

const AlbumSongsList = ({ albumId, colors, trackImg }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    const { isLoading: isLoading2, response: response2, error: error2, fetchFunction: checkLike } = useSendHttpRequest();
    const [showOptions, setShowOptions] = useState();

    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getAlbumItems(albumId, 20),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, albumId])
    // console.log(colors[2]);
    // console.log(response)
    useEffect(() => {
        if (response) {
            const idsLocal = [];
            response?.items.map(item => idsLocal.push(item.id));
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
        <>
            <div className={`album_songs_list list-pd-bottom`} style={colors && { backgroundColor: colors[1], backgroundImage: `linear-gradient(rgba(0,0,0,.6), #121212 20%)` }}>
                <AlbumSongsTitleBar />
                {
                    isLoading
                        ?
                        Array(8).fill().map((item, index) => <SongsListItemSkeleton key={index} />)
                        :
                        response?.items.map((i, index) => (
                            <SongsListItem key={index}
                                items={i}
                                liked={response2 && response2[index]}
                                index={index}
                                showOptions={showOptions}
                                setShowOptions={setShowOptions}
                                colors={colors && colors[2]}
                                trackImg={trackImg}
                            />
                        ))
                }
            </div>


        </>

    )
}

export default AlbumSongsList