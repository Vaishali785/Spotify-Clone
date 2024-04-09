import React, { useEffect } from 'react'
import useSendHttpRequest from '../../../../hooks/sendHttpReq';
import { getArtist } from '../../../../utilities/data/SpotifyApiCalls';
import classes from './ArtistItemHeader.module.css';
import ArtistItemHeaderSkeleton from './Skeleton/ArtistItemHeaderSkeleton';
import { ColorExtractor } from 'react-color-extractor';

const ArtistItemHeader = ({ artistId, setColors, colors }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getArtist(artistId),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, artistId])

    const styles = {
        background: colors && `var(--noise-bg) , ${colors[1]}`,
    };

    // console.log(response);
    return (
        <>
            {
                response ?
                    <div className={`${classes['artist_header']}`} style={styles}>
                        <ColorExtractor getColors={colors => setColors(colors)}>
                            <img src={response.images[0].url} className={`${classes['artist_header__cover-img']}`} alt={`${response.name} cover`} />
                        </ColorExtractor>
                        <div className={`${classes['artist_header__content']}`}>
                            <span className={`${classes['artist_header__sub-heading']}`}>{response.type}</span>
                            <h1 className={`${classes['artist_header__heading']}`}>{response.name}</h1>
                            {/* <div className={`${classes['artist_header__description']}`}>{removeHTMLTags(response.description)}</div> */}
                            <div className={`${classes['artist_header__others']}`}>
                                <div className={`${classes['artist_header__owner']}`}>
                                    {/* <img src={spotify_logo} alt="" className={`${classes['artist_header__owner-img']}`} /> */}
                                    {/* <span>{response.artists[0].name}</span> */}
                                </div>
                                {/* <div className={`${classes['artist_header__songs']}`}> */}
                                {/* <span className={`${classes['artist_header__other-separator']}`}></span> */}
                                {/* <span className={`${classes['artist_header__song-count']}`}>{response.total_tracks} songs</span> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    :
                    <ArtistItemHeaderSkeleton />
            }
        </>
    )
}

export default ArtistItemHeader