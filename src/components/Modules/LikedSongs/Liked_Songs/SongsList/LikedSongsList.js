import React, { useState } from 'react'
import SongsTitleBar from '../TitleBar/Playlist__SongsTitleBar';
import SongsListItem from '../SongsList_Item/SongsListItem';
import SongsListItemSkeleton from '../SongsList_Item/Skeleton/SongsListItemSkeleton';
// import RowSkeleton from '../SongsList_Item/Skeleton/SongsListItemSkeleton';

const LikedSongsList = ({ response, isLoading, colors }) => {
    const [showOptions, setShowOptions] = useState();


    return (
        <div className={`playlist_songs_list list-pd-bottom`} style={{ backgroundColor: "#7b6ae8", backgroundImage: `linear-gradient(rgba(0,0,0,.6), #121212 20%)` }}>
            <SongsTitleBar />
            {
                isLoading
                    ?
                    Array(8).fill().map((item, index) => <SongsListItemSkeleton key={index} />)
                    :
                    response?.items.map((i, index) => (
                        <SongsListItem
                            key={index}
                            items={i}
                            index={index}
                            liked={true}
                            showOptions={showOptions}
                            setShowOptions={setShowOptions}
                            colors={colors}
                        />
                    )
                    )
            }
        </div>
    )
}

export default LikedSongsList