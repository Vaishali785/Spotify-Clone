import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSearchSingleCategory } from '../../../../../utilities/data/SpotifyApiCalls';
import useSendHttpRequest from '../../../../../hooks/sendHttpReq';
import classes from './SearchedCategoryHeader.module.css';

const SearchedCategoryHeader = (props) => {
    const { categoryId } = useParams();
    const { isLoading, response, fetchFunction } = useSendHttpRequest();

    useEffect(() => {
        const config = {
            url: getSearchSingleCategory(categoryId),
            method: "GET"
        }
        fetchFunction(config);

    }, [fetchFunction, categoryId])

    const styles = {
        background: props.bgColor && `var(--noise-bg) , ${props.bgColor}`,
    };

    return (
        <div className={`${classes['searched-header']}`} style={styles}>
            <h2 className={`${classes['searched-header-heading']}`}>{response?.name}</h2>
        </div>
    )
}

export default SearchedCategoryHeader