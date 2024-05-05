import React from 'react';
import skeleton from './SearchCategoryCardSkeleton.module.css';

const SearchCategoryCardSkeleton = () => {
    return (
        <div className={`${skeleton['skeleton-search-card']}  skeleton-bg`}>
            <div className={skeleton['skeleton-search-card__link']}>
                <div className={`${skeleton['skeleton-search-card__name']}  skeleton-bg`}></div>
                <div className={`${skeleton['skeleton-search-card__img']}  skeleton-bg`} alt='' />
            </div>
        </div>
    )
}

export default SearchCategoryCardSkeleton