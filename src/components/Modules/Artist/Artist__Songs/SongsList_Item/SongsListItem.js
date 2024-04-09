import React from 'react'
import convertMsToMinsSecs from '../../../../../utilities/general/TimeConverter';
import classes from './SongsListItem.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import useSetNewCurrentSong from '../../../../../hooks/setNewCurrentSong';
import useLikedSong from '../../../../../hooks/useCheckUserLikedSongs';
import MoreOptionsModal from '../../../MoreOptionsModal/MoreOptionsModal';
import { useSelector } from 'react-redux';
import DancingTracks from '../../../../UI/DancingTracks/DancingTracks';

const SongsListItem = (props) => {
    // console.log(props.items.track)
    const { handleClickToLike, handleClickToDislike, liked } = useLikedSong(props);
    const getLikedSong = liked ?? props.liked;
    const time = convertMsToMinsSecs(props?.items?.duration_ms);
    const { setSongFunction } = useSetNewCurrentSong();
    const showOptionsRow = props.showOptions == props?.items?.id ? true : false;
    const currentSong = useSelector(state => state.song.songDetail);
    const currentSongIsPlaying = useSelector(state => state.song.isPlaying);
    const isPlayingCurrently = props?.items?.id == currentSong?.id && currentSongIsPlaying;

    return (
        <div className={`${classes['artist-row']} bg-hover position-rel song-item-row ${showOptionsRow ? 'row-hovered' : ''} ${isPlayingCurrently ? classes['current-playing'] : ''}`}>
            <div className={`${classes["artist-row__index"]} ${classes["justify-self-center"]} `}>{props.index + 1}</div>
            <div className={classes["artist-row__song"]}>
                {isPlayingCurrently ?
                    <DancingTracks />
                    :
                    <img className={classes["artist-row__img"]} src={props?.items?.album.images[2].url} alt="" />
                    // <img className={classes["playlist-row__img"]} src={props?.items?.track?.album.images[2].url} alt="" />
                }
                <div className={classes["artist-row__songDetails"]}>
                    <div className={`${classes["artist-row__title"]} hover-with-underline truncate-name`} onClick={() => setSongFunction(props?.items)}>{props?.items.name}</div>
                </div>

            </div>

            {/*--------------------- add check here */}
            <div className={`${getLikedSong ? classes["artist-row__liked"] : classes["artist-row__like"]} ${classes["justify-self-center"]}`}>
                {/*---------------------  if liked */}
                {/* ---------------------  if not liked */}
                {getLikedSong
                    ?
                    <FavoriteRoundedIcon className={`${classes["artist-row__likeSvgGreen"]}`} onClick={() => handleClickToDislike(props?.items?.id)} />
                    :
                    <FavoriteBorderRoundedIcon className={`${classes["artist-row__likeSvg"]} `} onClick={() => handleClickToLike(props?.items?.id)} />
                }
            </div>

            <div className={`${classes["artist-row__time"]} ${classes["justify-self-center"]}`}>{time}</div>
            <div className={`${classes["justify-self-center"]} ${classes["artist-row__options"]} text-white-hover no-underline`} onClick={() => props.setShowOptions(prevState => prevState == props?.items?.id ? false : props?.items?.id)}>
                <MoreVertIcon />
            </div>
            {showOptionsRow && <MoreOptionsModal closeModal={props.setShowOptions} colors={props.colors} trackId={props?.items?.id} handleLikes={{ handleClickToLike, handleClickToDislike }} checkLiked={getLikedSong} />}
        </div >
    )
}

export default SongsListItem