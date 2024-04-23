import React from 'react'
import convertMsToMinsSecs from '../../../../../utilities/general/TimeConverter';
import classes from './SongsListItem.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom';
import useSetNewCurrentSong from '../../../../../hooks/setNewCurrentSong';
import useLikedSong from '../../../../../hooks/useCheckUserLikedSongs';
import MoreOptionsModal from '../../../MoreOptionsModal/MoreOptionsModal';
import { useSelector } from 'react-redux';
import DancingTracks from '../../../../UI/DancingTracks/DancingTracks';

const SongsListItem = (props) => {
    const { handleClickToLike, handleClickToDislike, liked } = useLikedSong(props);
    // const [showOptionsRow, setShowOptionsRow] = useState(false);
    const getLikedSong = liked ?? props.liked;
    const time = convertMsToMinsSecs(props?.items?.track.duration_ms);
    const { setSongFunction } = useSetNewCurrentSong();
    const showOptionsRow = props.showOptions == props?.items?.track.id ? true : false;
    const currentSong = useSelector(state => state.song.songDetail);
    const currentSongIsPlaying = useSelector(state => state.song.isPlaying);
    const isPlayingCurrently = props?.items?.track.id == currentSong?.id && currentSongIsPlaying;
    // console.log(props?.items)
    return (
        <div className={`${classes['playlist-row']} bg-hover position-rel song-item-row ${showOptionsRow ? 'row-hovered' : ''}  ${isPlayingCurrently ? classes['current-playing'] : ''}`} >
            <div className={`${classes["playlist-row__index"]} ${classes["justify-self-center"]} `}>{props.index + 1}</div>
            <div className={classes["playlist-row__song"]}>
                {isPlayingCurrently ?
                    <DancingTracks />
                    :
                    <img className={classes["playlist-row__img"]} src={props?.items?.track?.album?.images[2]?.url} alt="" />
                }
                <div className={classes["playlist-row__songDetails"]}>
                    <div className={`${classes["playlist-row__title"]} hover-with-underline truncate-name`} onClick={() => setSongFunction(props?.items?.track)}>{props?.items?.track.name}</div>
                    <div className={`${classes["playlist-row__artists"]}  truncate-name non-white-ellipsis`}>
                        {
                            props?.items?.track?.artists.map((artist, index) => (
                                <div className={`${classes["playlist-row__artistName"]}`} key={index}>
                                    <Link to={`/artist/${artist.id}`} className={`${classes['playlist-row__artistLink']} text-white-hover`}>{artist.name}</Link>
                                    <span className={classes['playlist-row__artistSeparator']}>&nbsp;{index != props?.items?.track?.artists.length - 1 ? "," : ''}&nbsp;</span>
                                </div>
                            ))

                        }
                    </div>
                </div>

            </div>
            <div className={` ${classes["playlist-row__album"]}`}>
                <Link to={`/album/${props?.items?.track?.album.id}`} className='text-white-hover truncate-name'>
                    {props?.items?.track?.album.name}
                </Link>
            </div>
            {/*--------------------- add check here */}
            <div className={`${getLikedSong ? classes["playlist-row__liked"] : classes["playlist-row__like"]} ${classes["justify-self-center"]} fix-icons-height`}>
                {/*---------------------  if liked */}
                {/* ---------------------  if not liked */}
                {getLikedSong ?
                    <FavoriteRoundedIcon className={`${classes["playlist-row__likeSvgGreen"]}`} onClick={() => handleClickToDislike(props?.items?.track.id)} />
                    :
                    <FavoriteBorderRoundedIcon className={`${classes["playlist-row__likeSvg"]}`} onClick={() => handleClickToLike(props?.items?.track.id)} />
                }

            </div>

            <div className={`${classes["playlist-row__time"]} ${classes["justify-self-center"]}`}>{time}</div>
            <div className={`${classes["justify-self-center"]} ${classes["playlist-row__options"]} text-white-hover no-underline fix-icons-height`} onClick={() => props.setShowOptions(prevState => prevState == props?.items?.track.id ? false : props?.items?.track.id)}>
                <MoreVertIcon />
            </div>
            {showOptionsRow && <MoreOptionsModal closeModal={props.setShowOptions} colors={props.colors} trackId={props?.items?.track.id} artists={props?.items?.track?.artists} album={props?.items?.track?.album} handleLikes={{ handleClickToLike, handleClickToDislike }} checkLiked={getLikedSong} />}
        </div >
    )
}

export default SongsListItem