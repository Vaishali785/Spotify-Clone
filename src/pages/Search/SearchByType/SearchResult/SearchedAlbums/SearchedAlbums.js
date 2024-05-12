import React from 'react';
import classes from './SearchedAlbums.module.css';
import { Link } from 'react-router-dom';

const SearchedAlbums = (props) => {
    return (
        <div className={classes['searched_albums_container']}>
            <h2 className={`searched_section-heading mt-4`}>Albums</h2>
            <div className={classes["searched_albums_list"]}>
                {props.albums?.map(item =>
                    <div key={item.id} className={`${classes["searched_albums_list-item"]} hover-card`}>
                        <img src={item.images[1].url} alt="" className={classes["searched_albums_list-item--img"]} />
                        <div className={classes["searched_albums_list-item--details"]}>
                            <Link to={`/album/${item.id}`} className='no-underline' >
                                <div className={`${classes["searched_albums_list-item--name"]} text-white-hover title truncate-name`}>{item.name}</div>
                            </Link>
                            <span className={`${classes["searched_albums_list-item--date"]} non-white-text`}>{item.release_date.split("-")[0]}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchedAlbums