import React, { useState } from 'react';
import classes from './MoreOptionsModal.module.css';
import UserPlaylist from './UserPlaylist/UserPlaylist';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate } from 'react-router-dom';
import List from '../../UI/List/List';

const MoreOptionsModal = (props) => {
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [showArtist, setShowArtist] = useState(false);
    const navigate = useNavigate();

    const onRemoveLikeSong = () => {
        props.handleLikes.handleClickToDislike(props.trackId);
    }

    const onAddLikeSong = () => {
        props.handleLikes.handleClickToLike(props.trackId);
    }
    const styles = {
        background: props.colors && `var(--noise-bg) , ${props.colors}`,
        // boxShadow: `0px 0px 10px 5px ${props.colors}`
    }
    return (
        <>
            <div className={classes["modal-shadow"]} onClick={() => props.closeModal(false)}></div>
            <div className={`${classes['options-modal']} modal-position`} style={styles} >
                <div className={`${classes['options-modal_playlist']} ${classes['more-options']} bg-hover`} onMouseEnter={() => setShowPlaylist(true)} onMouseLeave={() => setShowPlaylist(false)}>
                    <div className={`${classes['options-modal_playlist__text-with-icon']}`}>
                        Add To Playlist
                        <ChevronRightRoundedIcon />
                    </div>
                    {showPlaylist &&
                        <UserPlaylist trackId={props.trackId} color={styles} closeModal={props.closeModal} />
                    }
                </div>
                {
                    props.checkLiked
                        ?
                        <div className={`${classes['options-modal_liked']} ${classes['more-options']} bg-hover`} onClick={onRemoveLikeSong}>Remove from Liked Songs</div>
                        :
                        <div className={`${classes['options-modal_liked']} ${classes['more-options']} bg-hover`} onClick={onAddLikeSong}>Save to Liked Songs</div>
                }
                {props.artists &&
                    <div className={`${classes['options-modal_artist']} ${classes['more-options']} bg-hover position-rel`} onMouseEnter={() => setShowArtist(true)} onMouseLeave={() => setShowArtist(false)}>
                        <div className={`${classes['options-modal_playlist__text-with-icon']}`}>
                            Go to Artist
                            <ChevronRightRoundedIcon />
                        </div>
                        {showArtist &&
                            <List items={props.artists} callHandleClick={navigate} color={styles} />
                        }
                    </div>
                }
                {props.album && <div className={`${classes['options-modal_album']} ${classes['more-options']} bg-hover`} onClick={() => navigate(`/album/${props.album.id}`)}>Go to Album</div>}
            </div>

        </>
    )
}

export default MoreOptionsModal