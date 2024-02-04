import React, { useState } from 'react'
import PlaylistItemHeader from '../../components/Modules/Playlist/PlaylistItem__Header/PlaylistItemHeader'
import classes from './Playlist.module.css';
import PlaylistSongsList from '../../components/Modules/Playlist/PlaylistItem__Songs/SongsList/PlaylistSongsList';
import { useParams } from 'react-router-dom';

const Playlist = () => {
    const { playlistId } = useParams();
    const [colors, setColors] = useState();

    return (
        <div className={classes['playlist-page']}>
            <PlaylistItemHeader playlistId={playlistId} setColors={setColors} colors={colors} />

            {/* <SongsTitleBar /> */}
            <PlaylistSongsList playlistId={playlistId} colors={colors} />
        </div>
    )
}

export default Playlist