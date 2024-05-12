import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../../components/Layout/Main/Main';
import HomeNavLayout from '../HomeNavLayout/HomeNavLayout';
import ErrorPage from '../404/ErrorPage';
import Playlist from '../Playlist/Playlist';
import Album from '../Album/Album';
import Search from '../Search/Search';
import Artist from '../Artist/Artist';
import LikedSong from '../LikedSongs/LikedSongs';
import SearchByType from '../Search/SearchByType/SearchByType';
import SearchedCategory from '../../components/Modules/Search/SearchCategory/SearchedCategory/SearchedCategory';
import MobileLibrary from '../../components/Modules/MobileLibrary/MobileLibrary';


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeNavLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Main /> },
            { path: '/liked/tracks', element: <LikedSong /> },
            { path: 'playlist', element: <Playlist /> },
            { path: 'playlist/:playlistId', element: <Playlist /> },
            { path: 'artist/:artistId', element: <Artist /> },
            { path: '/library', element: <MobileLibrary /> },
            { path: 'album', element: <Album /> },
            { path: 'album/:albumId', element: <Album /> },
            {
                path: 'search',
                children: [
                    { index: true, element: <Search /> },
                    { path: ':query', element: <SearchByType /> },
                ]
            },
            { path: 'category/:categoryId', element: <SearchedCategory /> }
        ]
    }])
const Home = () => {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    )
}

export default Home