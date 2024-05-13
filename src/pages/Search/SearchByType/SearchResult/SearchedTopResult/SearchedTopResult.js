import React from 'react';
import classes from './SearchedTopResult.module.css';
import heading from '../../../Search.module.css';

import { Link } from 'react-router-dom';

const SearchedTopResult = ({ songs }) => {
    const topResult = songs && songs[0];
    // console.log(topResult);
    return (
        <div className={classes["searched-top-result--item-wrap"]}>
            <h2 className={`${heading["searched_section-heading"]}`}>Top Result</h2>
            <div className={classes["searched-top-result--item"]}>
                <img className={classes[`searched-top-result--img`]} src={topResult?.album.images[1] ? topResult?.album.images[1].url : topResult?.album.images[0].url} alt="" />
                <div className={`${classes[`searched-top-result--title`]} truncate-name`}>{topResult?.name}</div>
                <div className={classes[`searched-top-result--details`]}>
                    <span className={classes[`searched-top-result--type`]}>Song</span>
                    <div className={classes[`searched-top-result--artists`]}>
                        {topResult?.artists.map((artist, index) => (
                            <span className={`${classes["searched-top-result--artist"]}`} key={index}>
                                <Link to={`/artist/${artist.id}`} className={`${classes['searched-top-result--artist-name']} text-white-hover`}>{artist.name}</Link>
                                <span className={`${classes['searched-top-result--separator']} non-white-text`}>&nbsp;{index !== topResult?.artists.length - 1 ? "," : ''}&nbsp;</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedTopResult