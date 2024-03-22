import React, { useEffect, useState } from 'react'
import classes from './Artist.module.css';
import { useParams } from 'react-router-dom';
import ArtistItemHeader from '../../components/Modules/Artist/Artist__Header/ArtistItemHeader';
import ArtistSongsList from '../../components/Modules/Artist/Artist__Songs/SongsList/ArtistSongsList';

const Artist = () => {
    const { artistId } = useParams();
    const [colors, setColors] = useState();

    return (
        <div className={classes['artist-page']}>
            <ArtistItemHeader artistId={artistId} setColors={setColors} colors={colors} />
            {/* <SongsTitleBar /> */}
            <ArtistSongsList artistId={artistId} colors={colors} />
        </div>
    )
}

export default Artist