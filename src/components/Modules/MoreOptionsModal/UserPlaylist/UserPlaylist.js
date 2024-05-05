import React from 'react'
import useFetchUserPlaylist from '../../../../hooks/fetchUserPlaylist';
import classes from './UserPlaylist.module.css';
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import { addSongToUserPlaylist } from '../../../../utilities/data/SpotifyApiCalls';
import { useDispatch } from 'react-redux';
import { notificationActions, openNotificationModal } from '../../../../store/notification';
import { useParams } from 'react-router-dom';

const UserPlaylist = (props) => {
    const { isLoading, response } = useFetchUserPlaylist();
    const { isLoading: addSongIsLoading, response: addSongResponse, error: addSongError, fetchFunction } = useSendHttpRequest();
    const dispatch = useDispatch();
    const paramId = useParams();

    const addSongToPlaylist = (pId) => {
        const uri = encodeURIComponent(`spotify:track:${props.trackId}`);
        const config = {
            url: addSongToUserPlaylist(pId, uri),
            method: "POST",
        }
        fetchFunction(config);
        props.closeModal(false);
        dispatch(notificationActions.showNotification("Added to the playlist"));
        dispatch(openNotificationModal());
    }


    // console.log(response);

    return (
        <div className={`${classes['options-modal__list']}`} style={props.color}>
            <h2 className={`${classes['options-modal__heading']}`}>Playlists</h2>
            {response?.items.length > 1 && <ul className='scroll-y modal-sub-list'>
                {response?.items.map(item => (
                    item.id !== paramId.playlistId && <li key={item.id} className={`${classes['options-modal__list_item']} bg-hover`} onClick={() => addSongToPlaylist(item.id)}>{item.name}</li>
                ))
                }

            </ul>}
        </div>
    )
}

export default UserPlaylist