import React from 'react';
import classes from './SearchByTypeSkeleton.module.css';

const SearchByTypeSkeleton = () => {
    return (
        <div className={classes['skeleton-search-results']}>
            <div className={classes["skeleton-top-section"]}>
                {/* Top result */}
                <div className={classes["skeleton-searched-top-result--item-wrap"]}>
                    <div className={`${classes["skeleton-searched_section-heading"]} skeleton-bg`}></div>
                    <div className={`${classes["skeleton-searched-top-result--item"]} `}>
                        <div className={`${classes['skeleton-searched-top-result--img']}  skeleton-bg`} />
                        <div className={`${classes['skeleton-searched-top-result--title']} truncate-name  skeleton-bg`} />
                        <div className={`${classes['skeleton-searched-top-result--details']} `}>
                            <span className={`${classes['skeleton-searched-top-result--type']} skeleton-bg`}></span>
                            <div className={`${classes['skeleton-searched-top-result--artists']}  skeleton-bg`}>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Songs */}
                <div className={`${classes['skeleton-searched_song_container']}`}>
                    <div className={`${classes["skeleton-searched_section-heading"]} ${classes['sm-mt-0']} skeleton-bg`}></div>
                    {Array(4).fill().map((item, index) => (
                        <div className={`${classes["skeleton-searched_song_list"]}`} key={index}>
                            <div className={`${classes["skeleton-searched_song_list-item"]} position-rel`}>
                                <div className={`${classes["skeleton-searched_song_list-item--img"]} skeleton-bg`} />
                                <div className={`${classes["skeleton-searched_song_list-item--details"]}`}>
                                    <div className={`${classes["skeleton-searched_song_list-item--name"]}  title truncate-name skeleton-bg`}></div>
                                    <div className={`${classes["skeleton-searched_song_list-item--artists"]} skeleton-bg`}>
                                    </div>
                                </div>
                                <div className={`${classes["skeleton-searched_song_list-item__others"]} skeleton-bg`}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Artist */}
            <div className={`${classes['skeleton-searched_artist_container']}`}>
                <div className={`${classes["skeleton-searched_section-heading"]} ${classes["mt-4"]} skeleton-bg`}></div>
                <div className={`${classes["skeleton-searched_artist_list"]}`}>
                    {Array(5).fill().map((item, index) =>
                        <div key={index} className={`${classes["skeleton-searched_artist_list-item"]}`}>
                            <div className={`${classes["skeleton-searched_artist_list-item--img"]} skeleton-bg`} />
                            <div className={`${classes["skeleton-searched_artist_list-item--details"]}`}>
                                <div className={`${classes["skeleton-searched_artist_list-item--name"]} skeleton-bg  title truncate-name`} />
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Albums */}
            <div className={`${classes['skeleton-searched_albums_container']}`}>
                <div className={`${classes["skeleton-searched_section-heading"]} ${classes["mt-4"]} skeleton-bg`}></div>
                <div className={`${classes["skeleton-searched_albums_list"]}`}>
                    {Array(5).fill().map((item, index) =>
                        <div key={index} className={`${classes["skeleton-searched_albums_list-item"]}`}>
                            <div className={`${classes["skeleton-searched_albums_list-item--img"]} skeleton-bg`} />
                            <div className={`${classes["skeleton-searched_albums_list-item--details"]}`}>
                                <div className={`${classes["skeleton-searched_albums_list-item--name"]} skeleton-bg  title truncate-name`}></div>
                                <span className={`${classes["skeleton-searched_albums_list-item--date"]} skeleton-bg `}></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={`${classes['skeleton-searched_albums_container']}`}>
                <div className={`${classes["skeleton-searched_section-heading"]} ${classes["mt-4"]} skeleton-bg`}></div>
                <div className={`${classes["skeleton-searched_albums_list"]}`}>
                    {Array(5).fill().map((item, index) =>
                        <div key={index} className={`${classes["skeleton-searched_albums_list-item"]}`}>
                            <div className={`${classes["skeleton-searched_albums_list-item--img"]} skeleton-bg`} />
                            <div className={`${classes["skeleton-searched_albums_list-item--details"]}`}>
                                <div className={`${classes["skeleton-searched_albums_list-item--name"]} skeleton-bg  title truncate-name`}></div>
                                <span className={`${classes["skeleton-searched_albums_list-item--date"]} skeleton-bg `}></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Playlists */}
            {/* <div className={`${classes['skeleton-searched_playlist_container']}`}>
                <div className={`${classes["skeleton-searched_section-heading"]} ${classes["mt-4"]} skeleton-bg`}></div>
                <div className={`${classes["skeleton-searched_playlist_list"]}`}>
                    {Array(5).fill().map((item, index) =>
                        <div key={index} className={`${classes["skeleton-searched_playlist_list-item"]}`}>
                            <div className={`${classes["skeleton-searched_playlist_list-item--img"]} skeleton-bg`} />
                            <div className={`${classes["skeleton-searched_playlist_list-item--details"]}`}>
                                <div className={`${classes["skeleton-searched_playlist_list-item--name"]} skeleton-bg text-white-hover title truncate-name`}></div>
                                <span className={`${classes["skeleton-searched_playlist_list-item--owner"]} skeleton-bg`}></span>
                            </div>
                        </div>
                    )}
                </div>
            </div> */}

        </div>
    )
}

export default SearchByTypeSkeleton