import React from 'react'
import { useParams } from 'react-router-dom'
import useSendHttpForSearch from '../../../hooks/sendHttpForSearch';
import SearchedAlbums from './SearchResult/SearchedAlbums/SearchedAlbums';
import SearchedPlaylists from './SearchResult/SearchedPlaylists/SearchedPlaylists';
import SearchedArtists from './SearchResult/SearchedArtists/SearchedArtists';
import SearchedTopResult from './SearchResult/SearchedTopResult/SearchedTopResult';
import classes from '../Search.module.css';
import SearchedSongsList from './SearchResult/SearchedSongs/SearchedSongsList';
import SearchByTypeSkeleton from './skeleton/SearchByTypeSkeleton';

const SearchByType = () => {
    const searchQuery = useParams();
    const { isLoading, response, error } = useSendHttpForSearch(searchQuery.query);


    const topItem = response?.tracks?.items.slice(0, 1);
    const songs = response?.tracks?.items.slice(0, 4);

    return (
        <>
            {
                isLoading ?
                    <SearchByTypeSkeleton />
                    :
                    <div className={`${classes["search-results"]}`}>
                        <div className={classes["top-section"]}>
                            <SearchedTopResult songs={topItem} />
                            <SearchedSongsList songs={songs} />
                        </div>
                        <SearchedArtists artists={response?.artists?.items} />
                        <SearchedAlbums albums={response?.albums.items} />
                        <SearchedPlaylists playlists={response?.playlists.items} />
                    </div>
            }
            <div className={`${classes['search-result-copyright']} copyright-info copyright`}>
                <span>&copy; 2024. All rights reserved.</span>
                <span>Developed by Vaishali</span>
            </div>
        </>
    )
}

export default SearchByType