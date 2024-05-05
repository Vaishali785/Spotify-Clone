import React, { useEffect, useMemo } from 'react'
import { getSearchCategoriesPlaylists } from '../../../../../utilities/data/SpotifyApiCalls'
import useSendHttpRequest from '../../../../../hooks/sendHttpReq'
import { useParams } from 'react-router-dom';
import PlaylistCollectionRowUI from '../../../CommonUIComponents/PlaylistCollectionRowUI';
import SearchedCategoryHeader from './SearchedCategoryHeader';
import generateRandomColors from '../../../../../utilities/general/generateRandomColors';

const SearchedCategory = () => {
    const { categoryId } = useParams();
    const { isLoading, response, fetchFunction } = useSendHttpRequest();
    let color = useMemo(() => generateRandomColors(), []);
    useEffect(() => {
        const config = {
            url: getSearchCategoriesPlaylists(categoryId, 50),
            method: "GET"
        }
        fetchFunction(config);

    }, [fetchFunction, categoryId])

    return (
        <div className='main-content'>
            <SearchedCategoryHeader bgColor={color} />
            <PlaylistCollectionRowUI isLoading={isLoading} response={response} heading="" bgColor={color} smPadding />
        </div>
    )
}

export default SearchedCategory