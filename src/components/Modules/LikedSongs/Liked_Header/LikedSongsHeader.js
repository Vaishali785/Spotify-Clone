import React, { useEffect } from 'react';
import classes from './LikedSongsHeader.module.css';
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import { getUser } from '../../../../utilities/data/SpotifyApiCalls';
import spotify_logo from '../../../../assets/logo/spotify-mini-logo.png';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const LikedSongsHeader = ({ totalCount, }) => {
    const styles = {
        background: `var(--noise-bg) , #7b6ae8`,
    };
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getUser(),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction])

    // console.log(response)
    return (
        <>
            {
                <div className={`${classes['playlist_header']}`} style={styles}>
                    <div className={`${classes['playlist_header__liked-icon']}`}>
                        <FavoriteRoundedIcon fontSize='large' />
                    </div>
                    <div className={`${classes['playlist_header__content']}`}>
                        <span className={`${classes['playlist_header__sub-heading']}`}>Playlist</span>
                        <h1 className={`${classes['playlist_header__heading']}`}>Liked Songs</h1>
                        {/* <div className={`${classes['playlist_header__description']}`}>{removeHTMLTags(response.description)}</div> */}
                        <div className={`${classes['playlist_header__others']}`}>
                            <div className={`${classes['playlist_header__owner']}`}>
                                <img src={spotify_logo} alt="" className={`${classes['playlist_header__owner-img']}`} />
                                <span>{response?.display_name}</span>
                            </div>
                            <div className={`${classes['playlist_header__songs']}`}>
                                <span className={`${classes['playlist_header__other-separator']}`}></span>
                                <span className={`${classes['playlist_header__song-count']}`}>{totalCount} songs</span>
                            </div>
                        </div>
                    </div>
                </div>
                // // :
                // <PlaylistItemHeaderSkeleton />
            }
        </>
    )
}

export default LikedSongsHeader