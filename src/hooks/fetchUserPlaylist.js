import { useEffect } from 'react'
import useSendHttpRequest from './sendHttpReq';
import { getUserPlaylist } from '../utilities/data/SpotifyApiCalls';

const useFetchUserPlaylist = () => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();

    useEffect(() => {
        const config = {
            url: getUserPlaylist(),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction])
    return { isLoading, response, error }
}

export default useFetchUserPlaylist