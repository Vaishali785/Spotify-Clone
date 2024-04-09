import React from 'react'
import classes from './SongsListItem.module.css';
import { Link } from 'react-router-dom';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import convertMsToMinsSecs from '../../../../../utilities/general/TimeConverter';
import useSetNewCurrentSong from '../../../../../hooks/setNewCurrentSong';
import useLikedSong from '../../../../../hooks/useCheckUserLikedSongs';
import MoreOptionsModal from '../../../MoreOptionsModal/MoreOptionsModal';
import { useSelector } from 'react-redux';
import DancingTracks from '../../../../UI/DancingTracks/DancingTracks';

const SongsListItem = (props) => {
    const { handleClickToLike, handleClickToDislike, liked } = useLikedSong(props);
    const getLikedSong = liked ?? props.liked;
    const time = convertMsToMinsSecs(props?.items.duration_ms);
    const { setSongFunction } = useSetNewCurrentSong();
    const showOptionsRow = props.showOptions == props?.items?.id ? true : false;
    const currentSong = useSelector(state => state.song.songDetail);
    const currentSongIsPlaying = useSelector(state => state.song.isPlaying);
    const isPlayingCurrently = props?.items?.id == currentSong?.id && currentSongIsPlaying;

    // console.log(props.items);
    const songItem = { ...props?.items, album: { images: { ...props.trackImg } } };

    return (
        <div className={`${classes['album-row']} bg-hover position-rel song-item-row ${showOptionsRow ? 'row-hovered' : ''} ${isPlayingCurrently ? classes['current-playing'] : ''} `}>
            {isPlayingCurrently ?
                <DancingTracks />
                :
                <div className={`${classes["album-row__index"]} ${classes["justify-self-center"]} `}>{props.index + 1}</div>
                // <img className={classes["playlist-row__img"]} src={props?.items?.track?.album.images[2].url} alt="" />
            }
            <div className={classes["album-row__song"]}>
                {/* <img className={classes["album-row__img"]} src={props?.items?.album.images[2].url} alt="" /> */}
                <div className={classes["album-row__songDetails"]}>
                    <div className={`${classes["album-row__title"]} hover-with-underline truncate-name`} onClick={() => setSongFunction(songItem)}>{props?.items.name}</div>
                    <div className={`${classes["album-row__artists"]}  truncate-name non-white-ellipsis`}>
                        {
                            props?.items?.artists.map((artist, index) => (
                                <div className={`${classes["album-row__artistName"]}`} key={index}>
                                    <Link to={`/artist/${artist.id}`} className={`${classes['album-row__artistLink']} text-white-hover`}>{artist.name}</Link>
                                    <span className={classes['album-row__artistSeparator']}>&nbsp;{index != props?.items?.artists.length - 1 ? "," : ''}&nbsp;</span>
                                </div>
                            ))

                        }
                    </div>
                </div>

            </div>

            {/*--------------------- add check here */}
            <div className={`${getLikedSong ? classes["album-row__liked"] : classes["album-row__like"]} ${classes["justify-self-center"]} fix-icons-height`}>
                {/*---------------------  if liked */}
                {/* ---------------------  if not liked */}
                {
                    getLikedSong
                        ?
                        <FavoriteRoundedIcon className={`${classes["album-row__likeSvgGreen"]}`} onClick={() => handleClickToDislike(props?.items?.id)} />
                        :
                        <FavoriteBorderRoundedIcon className={`${classes["album-row__likeSvg"]} `} onClick={() => handleClickToLike(props?.items?.id)} />
                }
            </div>

            <div className={`${classes["album-row__time"]} ${classes["justify-self-center"]}`}>{time}</div>
            <div className={`${classes["justify-self-center"]} ${classes["album-row__options"]} text-white-hover fix-icons-height no-underline`} onClick={() => props.setShowOptions(prevState => prevState == props?.items?.id ? false : props?.items?.id)}>
                <MoreVertIcon />
            </div>
            {showOptionsRow && <MoreOptionsModal closeModal={props.setShowOptions} colors={props.colors} artists={props?.items?.artists} trackId={props?.items?.id} handleLikes={{ handleClickToLike, handleClickToDislike }} checkLiked={getLikedSong} />}
        </div >
    )
}

export default SongsListItem