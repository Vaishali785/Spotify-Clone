import React, { useEffect } from 'react';
import { getFeaturedPlaylist } from '../../../../utilities/data/SpotifyApiCalls';
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import PlaylistCollectionRowUI from '../../CommonUIComponents/PlaylistCollectionRowUI';

const PlaylistCollection = ({ index, offset, heading, noPadTop }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();

    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getFeaturedPlaylist('', 5, offset),
            method: "GET",
        }
        fetchFunction(config);
        // console.log(error);
    }, [fetchFunction, offset])

    return (
        <>
            <PlaylistCollectionRowUI isLoading={isLoading} response={response} index={index} heading={heading} noPadTop={noPadTop} />
        </>
    )
}

export default PlaylistCollection