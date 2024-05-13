import React from 'react';
import classes from './SearchedArtists.module.css';
import HoverableCard from '../../../../../components/UI/Card/HoverableCard/HoverableCard';


const SearchedArtists = (props) => {
    return (
        <div className={classes['searched_artist_container']}>
            <h2 className={`searched_section-heading mt-4`}>Artists</h2>
            <div className={classes["searched_artist_list"]}>
                {props?.artists && props?.artists?.map(item =>
                    <HoverableCard link={`/artist/${item.id}`} key={item.id} className={classes["searched_artist_list-item"]}>
                        <img src={item?.images[1] ? item?.images[1]?.url : item?.images[0]?.url} alt="" className={classes["searched_artist_list-item--img"]} />
                        <div className={classes["searched_artist_list-item--details"]}>
                            <div className={`${classes["searched_artist_list-item--name"]} text-white-hover title truncate-name`}>{item.name}</div>
                            {/* <span className={`${classes["searched_artist_list-item--owner"]} non-white-text`}>By {item.owner.display_name}</span> */}
                        </div>
                    </HoverableCard>
                )}
            </div>
        </div>

    )
}

export default SearchedArtists