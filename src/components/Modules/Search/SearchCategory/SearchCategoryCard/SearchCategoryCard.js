import React, { useState } from 'react';
import classes from './SearchCategoryCard.module.css';
import { ColorExtractor } from 'react-color-extractor';
import { Link } from 'react-router-dom';

const SearchCategoryCard = (props) => {
    const [colors, setColors] = useState();
    const styles = {
        background: colors && `var(--noise-bg) , ${colors[0]}`,
    };
    // console.log(colors)
    return (
        <div className={classes['search-card']} style={styles}>
            <Link to={`/category/${props.item.id}`} className={classes['search-card__link']}>
                <div className={classes['search-card__name']}>{props.item.name}</div>
                <ColorExtractor getColors={colors => setColors(colors)}>
                    <img className={classes['search-card__img']} src={props.item.icons[0].url} alt='' />
                </ColorExtractor>
            </Link>
        </div>
    )
}

export default SearchCategoryCard