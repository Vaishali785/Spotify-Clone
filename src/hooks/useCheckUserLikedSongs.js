import { useState } from 'react'
// import { useSelector } from 'react-redux';
import useSendHttpRequest from './sendHttpReq';
import { addUserLikedSong, removeUserLikedSong } from '../utilities/data/SpotifyApiCalls';
import { useDispatch } from 'react-redux';
import { notificationActions, openNotificationModal } from '../store/notification';

const useLikedSong = (props) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    const { liked: propsLikedValue } = props;
    const [liked, setLiked] = useState(propsLikedValue);
    const dispatch = useDispatch();


    const handleClickToLike = (trackId) => {
        // console.log(typeof trackId);
        // console.log(trackId);
        const config = {
            url: addUserLikedSong(trackId),
            method: "PUT"
        }
        fetchFunction(config);
        setLiked(true);
        dispatch(notificationActions.showNotification("Added to Liked Songs"));
        dispatch(openNotificationModal());
    }
    const handleClickToDislike = (trackId) => {
        const config = {
            url: removeUserLikedSong(trackId),
            method: "DELETE"
        }
        fetchFunction(config);
        setLiked(false);
        dispatch(notificationActions.showNotification("Removed from Liked Songs"));
        dispatch(openNotificationModal());
    }

    return { handleClickToLike, handleClickToDislike, liked }

}

export default useLikedSong