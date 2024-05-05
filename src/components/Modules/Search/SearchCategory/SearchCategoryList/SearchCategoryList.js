import React, { useEffect } from 'react';
import classes from './SearchCategoryList.module.css';
import SearchCategoryCard from '../SearchCategoryCard/SearchCategoryCard';
import { getSearchCategories } from '../../../../../utilities/data/SpotifyApiCalls';
import useSendHttpRequest from '../../../../../hooks/sendHttpReq';
import SearchCategoryCardSkeleton from '../SearchCategoryCard/skeleton/SearchCategoryCardSkeleton';

const SearchCategoryList = () => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();

    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getSearchCategories(20),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction])

    // console.log("response");
    // console.log(response);

    return (
        <div className={classes['search-category-list']}>
            {/* <Search /> */}
            {
                isLoading
                    ?
                    Array(20).fill().map((arr, index) => <SearchCategoryCardSkeleton key={index} />)
                    :
                    response?.categories?.items.map(item => (
                        <SearchCategoryCard item={item} key={item.id} />
                    ))
            }
        </div>
    )
}

export default SearchCategoryList