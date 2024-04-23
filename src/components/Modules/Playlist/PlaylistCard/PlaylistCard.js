import React from 'react'
import classes from './PlaylistCard.module.css';
import HoverableCard from '../../../UI/Card/HoverableCard/HoverableCard';

const PlaylistCard = ({ item }) => {
    const removeHTMLFromContent = (content) => {
        const tagRegExp = new RegExp('<\s*[^>]*>', 'g')
        return content.replace(tagRegExp, '');
    }
    return (
        <HoverableCard link={`/playlist/${item.id}`}>
            <img src={item.images[0].url} alt="" className={`${classes['item-img']}`} />
            <div className={`${classes["item-details"]}`}>
                <div className={`${classes["item-details__name"]} truncate-name title`}>
                    {item.name}
                </div>
                <div className={`${classes["item-details__description"]} text-no-hover truncate-description`}>{removeHTMLFromContent(item.description)}</div>
            </div>
        </HoverableCard>
    )
}

export default PlaylistCard