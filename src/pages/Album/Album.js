import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import classes from './Album.module.css';
import AlbumItemHeader from '../../components/Modules/Albums/AlbumItem__Header/AlbumItemHeader';
import AlbumSongsList from '../../components/Modules/Albums/AlbumItem__Songs/SongsList/AlbumSongsList';

const Album = () => {
    const { albumId } = useParams();
    const [colors, setColors] = useState();

    return (
        <div className={classes['playlist-page']}>
            <AlbumItemHeader albumId={albumId} setColors={setColors} colors={colors} />

            {/* <SongsTitleBar /> */}
            <AlbumSongsList albumId={albumId} colors={colors} />
        </div>
    )

}

export default Album