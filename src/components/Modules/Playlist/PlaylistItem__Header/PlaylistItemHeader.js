import React, { useEffect } from 'react';
import classes from './PlaylistItemHeader.module.css';
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import { getPlaylist } from '../../../../utilities/data/SpotifyApiCalls';
import spotify_logo from '../../../../assets/logo/spotify-mini-logo.png';
import { ColorExtractor } from 'react-color-extractor'
import PlaylistItemHeaderSkeleton from './Skeleton/PlaylistItemHeaderSkeleton';
import removeHTMLTags from '../../../../utilities/general/removeHTMLTags';

const PlaylistItemHeader = ({ playlistId, setColors, colors }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getPlaylist(playlistId),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, playlistId])

    const styles = {
        background: colors && `var(--noise-bg) , ${colors[2]}`,
    };
    // console.log(response)
    return (
        <>
            {
                response ?
                    <div className={`${classes['playlist_header']}`} style={styles}>
                        <ColorExtractor getColors={colors => setColors(colors)}>
                            <img src={response.images[0].url} className={`${classes['playlist_header__cover-img']}`} alt={`${response.name} cover`} />
                        </ColorExtractor>
                        <div className={`${classes['playlist_header__content']}`}>
                            <span className={`${classes['playlist_header__sub-heading']}`}>{response.type}</span>
                            <h1 className={`${classes['playlist_header__heading']}`}>{response.name}</h1>
                            <div className={`${classes['playlist_header__description']}`}>{removeHTMLTags(response.description)}</div>
                            <div className={`${classes['playlist_header__others']}`}>
                                <div className={`${classes['playlist_header__owner']}`}>
                                    <img src={spotify_logo} alt="" className={`${classes['playlist_header__owner-img']}`} />
                                    <span>{response.owner.display_name}</span>
                                </div>
                                <div className={`${classes['playlist_header__songs']}`}>
                                    <span className={`${classes['playlist_header__other-separator']}`}></span>
                                    <span className={`${classes['playlist_header__song-count']}`}>{response.tracks.items.length} songs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <PlaylistItemHeaderSkeleton />
            }
        </>
    )
}

export default PlaylistItemHeader