import React, { useEffect } from 'react'
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import classes from './AlbumItemHeader.module.css';
import { ColorExtractor } from 'react-color-extractor';
import AlbumItemHeaderSkeleton from './Skeleton/AlbumItemHeaderSkeleton';
import { getAlbum } from '../../../../utilities/data/SpotifyApiCalls';

const AlbumItemHeader = ({ albumId, setColors, colors, setTrackImg }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getAlbum(albumId),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, albumId, setTrackImg])

    useEffect(() => {
        setTrackImg(response?.images);
    }, [response, setTrackImg])

    const styles = {
        background: colors && `var(--noise-bg) , ${colors[2]}`,
    };

    return (
        <>
            {
                response ?
                    <div className={`${classes['album_header']}`} style={styles}>
                        <ColorExtractor getColors={colors => setColors(colors)}>
                            <img src={response.images[0].url} className={`${classes['album_header__cover-img']}`} alt={`${response.name} cover`} />
                        </ColorExtractor>
                        <div className={`${classes['album_header__content']}`}>
                            <span className={`${classes['album_header__sub-heading']}`}>{response.type}</span>
                            <h1 className={`${classes['album_header__heading']}`}>{response.name}</h1>
                            {/* <div className={`${classes['album_header__description']}`}>{removeHTMLTags(response.description)}</div> */}
                            <div className={`${classes['album_header__others']}`}>
                                <div className={`${classes['album_header__owner']}`}>
                                    {/* <img src={spotify_logo} alt="" className={`${classes['album_header__owner-img']}`} /> */}
                                    <span>{response.artists[0].name}</span>
                                </div>
                                <div className={`${classes['album_header__songs']}`}>
                                    <span className={`${classes['album_header__other-separator']}`}></span>
                                    <span className={`${classes['album_header__song-count']}`}>{response.total_tracks} songs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <AlbumItemHeaderSkeleton />
            }
        </>
    )
}

export default AlbumItemHeader