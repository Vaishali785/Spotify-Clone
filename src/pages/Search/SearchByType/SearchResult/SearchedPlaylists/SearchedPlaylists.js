import React from 'react';
import classes from './SearchedPlaylists.module.css';
import { Link } from 'react-router-dom';


const SearchedPlaylists = (props) => {
    return (
        <div className={classes['searched_playlist_container']}>
            <h2 className={`searched_section-heading mt-4`}>Playlists</h2>
            <div className={classes["searched_playlist_list"]}>
                {props?.playlists && props?.playlists?.map(item =>
                    <div key={item.id} className={`${classes["searched_playlist_list-item"]} hover-card`}>
                        <img src={item.images[1] ? item.images[1].url : item.images[0].url} alt="" className={classes["searched_playlist_list-item--img"]} />
                        <div className={classes["searched_playlist_list-item--details"]}>
                            <Link to={`/playlist/${item.id}`} className='no-underline'>
                                <div className={`${classes["searched_playlist_list-item--name"]} text-white-hover title truncate-name`}>{item.name}</div>
                            </Link>
                            <span className={`${classes["searched_playlist_list-item--owner"]} non-white-text`}>By {item.owner.display_name}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default SearchedPlaylists