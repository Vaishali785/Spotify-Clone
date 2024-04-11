import React from 'react'
import classes from '../Playlist/PlaylistCollection/PlaylistCollection.module.css';
import PlaylistCollectionSkeleton from '../Playlist/PlaylistCollection/Skeleton/PlaylistCollectionSkeleton';
import PlaylistCard from '../Playlist/PlaylistCard/PlaylistCard';


const PlaylistCollectionRowUI = (props) => {
    const { isLoading, response, noPadTop, heading } = props;

    const responseWithoutDuplicates = [...new Map(response?.playlists.items.map((item) => [item.id, item])).values()];
    // console.log(responseWithoutDuplicates);

    return (
        <>
            {
                isLoading
                    ?
                    <PlaylistCollectionSkeleton />
                    :
                    <>
                        {response?.playlists.items.length > 0 && (
                            <div className={`main-row ${props.smPadding ? 'sm-padding' : ''}`} style={props.bgColor && { backgroundColor: props.bgColor, backgroundImage: `linear-gradient(rgba(0,0,0,.6), #121212 20%)` }}>
                                {heading && <h2 className={`${classes["main-playlist-heading"]} ${noPadTop ? 'no-padding-top' : ''}`}>{heading}</h2>}
                                <div className={`${classes['main-playlist-row']}`}>
                                    {responseWithoutDuplicates.map((item) => (
                                        <PlaylistCard item={item} key={item.id} />
                                    ))
                                    }
                                </div>
                            </div>
                        )}
                    </>
            }
        </>
    )
}

export default PlaylistCollectionRowUI