import React, { Suspense, useEffect } from 'react'
import { getUserPlaylist } from '../../../utilities/data/SpotifyApiCalls';
import useSendHttpRequest from '../../../hooks/sendHttpReq';
import classes from './Sidebar.module.css';
import capitalizeFirstLetter from '../../../utilities/general/CapitalizeFirstLetter';
import SidebarPlaylistSkeleton from './skeleton/SidebarPlaylistSkeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetchUserPlaylist from '../../../hooks/fetchUserPlaylist';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';

const SidebarPlaylists = (props) => {
    const { isLoading, response } = useFetchUserPlaylist();
    // console.log(response);
    return (
        <>
            {isLoading
                ?
                <SidebarPlaylistSkeleton mobileLibrary={props.mobileLibrary} />
                :
                <div className={`${classes['sidebar-playlist__container']} ${props.fullHeight ? classes['sidebar-playlist__full-height'] : classes['sidebar-playlist__fixed-height']} ${props.mobileLibrary ? classes['mobile-library'] : ''}`}>
                    <div className={`bg-hover`} >
                        <Link to={`/liked/tracks`} className={`${classes['sidebar-playlist__link']} ${classes['sidebar-playlist__list']}`}>
                            <div className={`${classes['sidebar-playlist__liked-icon']}`}>
                                <GradeRoundedIcon />
                            </div>
                            {/* <img src='' alt="" className={`${classes['sidebar-playlist__img']}`} /> */}
                            <div className={`${"sidebar-playlist__item"}`}>
                                <div className={`${classes["sidebar-playlist-item__name"]}`}>Liked Songs</div>
                                <div className={`${classes["sidebar-playlist-item__type"]}`}>PlayList</div>
                            </div>
                        </Link>
                    </div>
                    {response?.items.map(item => (
                        <div className={`bg-hover`} key={item.id}>
                            <Link to={`/playlist/${item.id}`} className={`${classes['sidebar-playlist__link']} ${classes['sidebar-playlist__list']}`}>
                                <img src={item.images[0].url} alt="" className={`${classes['sidebar-playlist__img']}`} />
                                <div className={`${"sidebar-playlist__item"}`}>
                                    <div className={`${classes["sidebar-playlist-item__name"]}`}>{item?.name}</div>
                                    <div className={`${classes["sidebar-playlist-item__type"]}`}>{capitalizeFirstLetter(item?.type)}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            }
        </>
    )
}

export default SidebarPlaylists