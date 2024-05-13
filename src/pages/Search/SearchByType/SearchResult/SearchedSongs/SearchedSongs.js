import React from 'react';
import classes from './SearchedSongs.module.css';
import { Link } from 'react-router-dom';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreOptionsModal from '../../../../../components/Modules/MoreOptionsModal/MoreOptionsModal';
import useLikedSong from '../../../../../hooks/useCheckUserLikedSongs';
import convertMsToMinsSecs from '../../../../../utilities/general/TimeConverter';
import useSetNewCurrentSong from '../../../../../hooks/setNewCurrentSong';


const SearchedSongs = (props) => {
    const { handleClickToLike, handleClickToDislike, liked } = useLikedSong(props);
    const { setSongFunction } = useSetNewCurrentSong();
    const getLikedSong = liked ?? props.liked;
    const showOptionsRow = props.showOptions == props?.song?.id ? true : false;

    return (
        <div className={classes["searched_song_list"]}>
            <div className={`${classes["searched_song_list-item"]} bg-hover position-rel`}>
                <img src={props.song?.album.images[1] ? props.song?.album?.images[1].url : props.song?.album?.images[0].url} alt="" className={classes["searched_song_list-item--img"]} />
                <div className={classes["searched_song_list-item--details"]}>
                    <div className={`${classes["searched_song_list-item--name"]} text-white-hover title truncate-name`} onClick={() => setSongFunction(props.song)}>{props.song.name}</div>
                    <div className={`${classes["searched_song_list-item--artists"]} `}>
                        {props.song?.artists.map((artist, indexArtist) => (
                            <span className={`${classes["searched_song_list-item--artist"]}`} key={indexArtist}>
                                <Link to={`/artist/${artist.id}`} className={`${classes['searched_song_list-item--artist-name']} text-white-hover`}>{artist.name}</Link>
                                <span className={`${classes['searched_song_list-item--artist-separator']} non-white-text`}>&nbsp;{indexArtist != props.song?.artists.length - 1 ? "," : ''}&nbsp;</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div
                    className={`
                            ${(getLikedSong)
                            ?
                            classes["searched_song_list-item__liked"]
                            :
                            classes["searched_song_list-item__like"]
                        } 
                            ${classes["justify-self-center"]} fix-icons-height`}>
                    {/*---------------------  if liked */}
                    {/* ---------------------  if not liked */}
                    {getLikedSong ?
                        <FavoriteRoundedIcon className={`${classes["searched_song_list-item__likeSvgGreen"]}`} onClick={() => handleClickToDislike(props.song.id)} />
                        :
                        <FavoriteBorderRoundedIcon className={`${classes["searched_song_list-item__likeSvg"]}`} onClick={() => handleClickToLike(props.song.id)} />
                    }
                </div>
                <div className={`${classes["searched_song_list-item__time"]} ${classes["justify-self-center"]}`}>{convertMsToMinsSecs(props.song.duration_ms)}</div>
                <div className={`${classes["justify-self-center"]} ${classes["searched_song_list-item__options"]} text-white-hover no-underline fix-icons-height`} onClick={() => props.setShowOptions(prevState => prevState == props.song.id ? false : props.song.id)}>
                    <MoreVertIcon />
                </div>
                {showOptionsRow && <MoreOptionsModal closeModal={props.setShowOptions} colors={"linear-gradient(0deg, #16a816, #6ab86a)"} trackId={props.song.id} artists={props.song.artists} album={props.song.album} handleLikes={{ handleClickToLike, handleClickToDislike }} checkLiked={getLikedSong} />}
            </div>
        </div>
    )
}

export default SearchedSongs